const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const csv = require('csv-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// File upload setup
const upload = multer({ dest: 'uploads/' });

// Initialize SQLite database
const db = new sqlite3.Database('orgchart.db');

// Create tables
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS positions (
            id TEXT PRIMARY KEY,
            name TEXT NOT NULL,
            title TEXT NOT NULL,
            location TEXT,
            reports_to TEXT,
            region TEXT,
            department TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (reports_to) REFERENCES positions(id)
        )
    `);
    
    db.run(`
        CREATE TABLE IF NOT EXISTS audit_log (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            action TEXT NOT NULL,
            position_id TEXT,
            user TEXT,
            details TEXT,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
    
    console.log('Database initialized');
});

// API Routes

// Get all positions
app.get('/api/positions', (req, res) => {
    const { region, department } = req.query;
    let query = 'SELECT * FROM positions WHERE 1=1';
    const params = [];
    
    if (region) {
        query += ' AND region = ?';
        params.push(region);
    }
    
    if (department) {
        query += ' AND department = ?';
        params.push(department);
    }
    
    db.all(query, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get single position
app.get('/api/positions/:id', (req, res) => {
    const { id } = req.params;
    
    db.get('SELECT * FROM positions WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Position not found' });
            return;
        }
        res.json(row);
    });
});

// Create position
app.post('/api/positions', (req, res) => {
    const { id, name, title, location, reports_to, region, department } = req.body;
    
    if (!id || !name || !title) {
        res.status(400).json({ error: 'ID, name, and title are required' });
        return;
    }
    
    const query = `
        INSERT INTO positions (id, name, title, location, reports_to, region, department)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;
    
    db.run(query, [id, name, title, location, reports_to, region, department], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        // Log the action
        logAction('CREATE', id, 'API', { name, title });
        
        res.json({ id, message: 'Position created successfully' });
    });
});

// Update position
app.put('/api/positions/:id', (req, res) => {
    const { id } = req.params;
    const { name, title, location, reports_to, region, department } = req.body;
    
    const query = `
        UPDATE positions
        SET name = ?, title = ?, location = ?, reports_to = ?, region = ?, department = ?, updated_at = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    
    db.run(query, [name, title, location, reports_to, region, department, id], function(err) {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        if (this.changes === 0) {
            res.status(404).json({ error: 'Position not found' });
            return;
        }
        
        // Log the action
        logAction('UPDATE', id, 'API', { name, title });
        
        res.json({ message: 'Position updated successfully' });
    });
});

// Delete position
app.delete('/api/positions/:id', (req, res) => {
    const { id } = req.params;
    
    // First check if anyone reports to this position
    db.get('SELECT COUNT(*) as count FROM positions WHERE reports_to = ?', [id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        if (row.count > 0) {
            res.status(400).json({ error: 'Cannot delete position with direct reports' });
            return;
        }
        
        // Delete the position
        db.run('DELETE FROM positions WHERE id = ?', [id], function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            if (this.changes === 0) {
                res.status(404).json({ error: 'Position not found' });
                return;
            }
            
            // Log the action
            logAction('DELETE', id, 'API', {});
            
            res.json({ message: 'Position deleted successfully' });
        });
    });
});

// Get org chart hierarchy
app.get('/api/orgchart', (req, res) => {
    const { region } = req.query;
    
    db.all('SELECT * FROM positions', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        // Build hierarchy
        const hierarchy = buildHierarchy(rows, region);
        res.json(hierarchy);
    });
});

// Import CSV
app.post('/api/import/csv', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ error: 'No file uploaded' });
        return;
    }
    
    const results = [];
    let successCount = 0;
    let errorCount = 0;
    
    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            results.push(row);
        })
        .on('end', () => {
            // Process each row
            const stmt = db.prepare(`
                INSERT OR REPLACE INTO positions (id, name, title, location, reports_to, region, department)
                VALUES (?, ?, ?, ?, ?, ?, ?)
            `);
            
            results.forEach(row => {
                try {
                    stmt.run(
                        row.ID || row.id,
                        row.Name || row.name,
                        row.Title || row.title,
                        row.Location || row.location,
                        row.ReportsTo || row.reports_to,
                        row.Region || row.region,
                        row.Department || row.department
                    );
                    successCount++;
                } catch(err) {
                    console.error('Error importing row:', err);
                    errorCount++;
                }
            });
            
            stmt.finalize();
            
            // Clean up uploaded file
            fs.unlinkSync(req.file.path);
            
            // Log the action
            logAction('IMPORT', null, 'API', { count: successCount });
            
            res.json({
                message: 'Import completed',
                success: successCount,
                errors: errorCount,
                total: results.length
            });
        });
});

// Export to CSV
app.get('/api/export/csv', (req, res) => {
    db.all('SELECT * FROM positions ORDER BY region, department, name', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        // Convert to CSV
        const headers = ['ID', 'Name', 'Title', 'Location', 'ReportsTo', 'Region', 'Department'];
        let csv = headers.join(',') + '\n';
        
        rows.forEach(row => {
            csv += [
                row.id,
                `"${row.name}"`,
                `"${row.title}"`,
                `"${row.location || ''}"`,
                row.reports_to || '',
                row.region || '',
                row.department || ''
            ].join(',') + '\n';
        });
        
        res.setHeader('Content-Type', 'text/csv');
        res.setHeader('Content-Disposition', 'attachment; filename="orgchart.csv"');
        res.send(csv);
    });
});

// Generate PDF using Python script
app.post('/api/generate/pdf', (req, res) => {
    const { format = 'pdf', title = 'Organization Chart' } = req.body;
    
    // Export data to temporary CSV
    const tempFile = path.join(__dirname, 'temp_export.csv');
    
    db.all('SELECT * FROM positions ORDER BY region, department, name', [], (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        // Create CSV
        const headers = ['ID', 'Name', 'Title', 'ReportsTo', 'Location', 'Category'];
        let csv = headers.join(',') + '\n';
        
        rows.forEach(row => {
            csv += [
                row.id,
                row.name,
                row.title,
                row.reports_to || '',
                row.location || '',
                row.region || 'Default'
            ].join(',') + '\n';
        });
        
        // Write to temp file
        fs.writeFileSync(tempFile, csv);
        
        // Execute Python script
        const outputFile = `org_chart_${Date.now()}`;
        exec(`python3 python-org-generator.py ${tempFile} --format ${format} --output ${outputFile} --title "${title}"`, (error, stdout, stderr) => {
            // Clean up temp file
            fs.unlinkSync(tempFile);
            
            if (error) {
                console.error('Error generating PDF:', stderr);
                res.status(500).json({ error: 'Failed to generate PDF' });
                return;
            }
            
            // Send file
            const filePath = path.join(__dirname, `${outputFile}.${format}`);
            res.download(filePath, () => {
                // Clean up generated file after sending
                fs.unlinkSync(filePath);
            });
        });
    });
});

// Get statistics
app.get('/api/stats', (req, res) => {
    const stats = {};
    
    // Total positions
    db.get('SELECT COUNT(*) as count FROM positions', [], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        stats.total = row.count;
        
        // Filled positions
        db.get('SELECT COUNT(*) as count FROM positions WHERE name IS NOT NULL AND name != ""', [], (err, row) => {
            stats.filled = row.count;
            
            // By region
            db.all('SELECT region, COUNT(*) as count FROM positions GROUP BY region', [], (err, rows) => {
                stats.byRegion = {};
                rows.forEach(row => {
                    stats.byRegion[row.region || 'Unknown'] = row.count;
                });
                
                // By department
                db.all('SELECT department, COUNT(*) as count FROM positions GROUP BY department', [], (err, rows) => {
                    stats.byDepartment = {};
                    rows.forEach(row => {
                        stats.byDepartment[row.department || 'Unknown'] = row.count;
                    });
                    
                    res.json(stats);
                });
            });
        });
    });
});

// Helper functions

function buildHierarchy(positions, filterRegion) {
    const positionMap = {};
    const roots = [];
    
    // First pass: create map
    positions.forEach(pos => {
        if (!filterRegion || pos.region === filterRegion) {
            positionMap[pos.id] = {
                ...pos,
                children: []
            };
        }
    });
    
    // Second pass: build hierarchy
    Object.values(positionMap).forEach(pos => {
        if (pos.reports_to && positionMap[pos.reports_to]) {
            positionMap[pos.reports_to].children.push(pos);
        } else {
            roots.push(pos);
        }
    });
    
    return roots;
}

function logAction(action, positionId, user, details) {
    const query = 'INSERT INTO audit_log (action, position_id, user, details) VALUES (?, ?, ?, ?)';
    db.run(query, [action, positionId, user, JSON.stringify(details)]);
}

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the application at http://localhost:${PORT}/mega-orgchart.html`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\nShutting down gracefully...');
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
        console.log('Database connection closed.');
        process.exit(0);
    });
});