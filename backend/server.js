const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const csv = require('csv-parse');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database setup
const db = new sqlite3.Database('./orgchart.db');

// Initialize database
db.serialize(() => {
    // Create regions table
    db.run(`CREATE TABLE IF NOT EXISTS regions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        color TEXT,
        display_order INTEGER
    )`);
    
    // Create positions table
    db.run(`CREATE TABLE IF NOT EXISTS positions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        name TEXT NOT NULL,
        location TEXT,
        level TEXT,
        region_id INTEGER,
        parent_id INTEGER,
        x_position INTEGER,
        y_position INTEGER,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (region_id) REFERENCES regions (id),
        FOREIGN KEY (parent_id) REFERENCES positions (id)
    )`);
    
    // Create audit log table
    db.run(`CREATE TABLE IF NOT EXISTS audit_log (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user TEXT,
        action TEXT,
        position_id INTEGER,
        old_values TEXT,
        new_values TEXT,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )`);
    
    // Insert sample regions if empty
    db.get("SELECT COUNT(*) as count FROM regions", (err, row) => {
        if (row.count === 0) {
            const regions = [
                ['Alabama/MS', '#c2185b', 1],
                ['Florida N/C', '#388e3c', 2],
                ['Florida South', '#00796b', 3],
                ['Georgia', '#1976d2', 4],
                ['North Carolina', '#f57c00', 5],
                ['Puerto Rico', '#0097a7', 6],
                ['South Carolina', '#d32f2f', 7],
                ['Tennessee', '#7b1fa2', 8]
            ];
            
            const stmt = db.prepare("INSERT INTO regions (name, color, display_order) VALUES (?, ?, ?)");
            regions.forEach(region => {
                stmt.run(region);
            });
            stmt.finalize();
        }
    });
});

// API Routes

// Get all regions
app.get('/api/regions', (req, res) => {
    db.all("SELECT * FROM regions ORDER BY display_order", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get all positions
app.get('/api/positions', (req, res) => {
    const regionId = req.query.region_id;
    let query = "SELECT * FROM positions";
    if (regionId) {
        query += " WHERE region_id = " + regionId;
    }
    
    db.all(query, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Get single position
app.get('/api/positions/:id', (req, res) => {
    db.get("SELECT * FROM positions WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(row);
    });
});

// Create position
app.post('/api/positions', (req, res) => {
    const { title, name, location, level, region_id, parent_id, x_position, y_position } = req.body;
    
    db.run(
        `INSERT INTO positions (title, name, location, level, region_id, parent_id, x_position, y_position) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [title, name, location, level, region_id, parent_id, x_position, y_position],
        function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            // Log the action
            db.run(
                `INSERT INTO audit_log (user, action, position_id, new_values) 
                 VALUES (?, ?, ?, ?)`,
                ['system', 'CREATE', this.lastID, JSON.stringify(req.body)]
            );
            
            res.json({ id: this.lastID, ...req.body });
        }
    );
});

// Update position
app.put('/api/positions/:id', (req, res) => {
    const { title, name, location, level, x_position, y_position } = req.body;
    
    // Get old values for audit log
    db.get("SELECT * FROM positions WHERE id = ?", [req.params.id], (err, oldRow) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        db.run(
            `UPDATE positions 
             SET title = ?, name = ?, location = ?, level = ?, 
                 x_position = ?, y_position = ?, updated_at = CURRENT_TIMESTAMP
             WHERE id = ?`,
            [title, name, location, level, x_position, y_position, req.params.id],
            function(err) {
                if (err) {
                    res.status(500).json({ error: err.message });
                    return;
                }
                
                // Log the action
                db.run(
                    `INSERT INTO audit_log (user, action, position_id, old_values, new_values) 
                     VALUES (?, ?, ?, ?, ?)`,
                    ['system', 'UPDATE', req.params.id, JSON.stringify(oldRow), JSON.stringify(req.body)]
                );
                
                res.json({ id: req.params.id, ...req.body });
            }
        );
    });
});

// Delete position
app.delete('/api/positions/:id', (req, res) => {
    // Get position data for audit log
    db.get("SELECT * FROM positions WHERE id = ?", [req.params.id], (err, row) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        // Update children to have no parent
        db.run("UPDATE positions SET parent_id = NULL WHERE parent_id = ?", [req.params.id]);
        
        // Delete the position
        db.run("DELETE FROM positions WHERE id = ?", [req.params.id], function(err) {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            // Log the action
            db.run(
                `INSERT INTO audit_log (user, action, position_id, old_values) 
                 VALUES (?, ?, ?, ?)`,
                ['system', 'DELETE', req.params.id, JSON.stringify(row)]
            );
            
            res.json({ message: 'Position deleted successfully' });
        });
    });
});

// Bulk import from CSV
const upload = multer({ dest: 'uploads/' });

app.post('/api/import/csv', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }
    
    const results = [];
    fs.createReadStream(req.file.path)
        .pipe(csv.parse({ columns: true, trim: true }))
        .on('data', (row) => {
            results.push(row);
        })
        .on('end', () => {
            // Insert all positions
            const stmt = db.prepare(
                `INSERT INTO positions (title, name, location, level, region_id) 
                 VALUES (?, ?, ?, ?, ?)`
            );
            
            results.forEach(row => {
                stmt.run([
                    row.title || 'Untitled',
                    row.name || 'Unknown',
                    row.location || '',
                    row.level || 'specialist',
                    row.region_id || 1
                ]);
            });
            
            stmt.finalize();
            
            // Clean up uploaded file
            fs.unlinkSync(req.file.path);
            
            res.json({ 
                message: 'Import successful', 
                count: results.length 
            });
        })
        .on('error', (error) => {
            res.status(500).json({ error: error.message });
        });
});

// Export to JSON
app.get('/api/export/json', (req, res) => {
    db.all("SELECT * FROM positions", (err, positions) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        
        db.all("SELECT * FROM regions", (err, regions) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            
            res.json({
                regions: regions,
                positions: positions,
                exported_at: new Date().toISOString()
            });
        });
    });
});

// Get audit log
app.get('/api/audit', (req, res) => {
    db.all(
        "SELECT * FROM audit_log ORDER BY timestamp DESC LIMIT 100",
        (err, rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json(rows);
        }
    );
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`API available at http://localhost:${PORT}/api`);
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