#!/usr/bin/env node

/**
 * Data Extractor for Red Cross Org Chart
 * Consolidates data from all existing HTML files and deep-org-data.js
 */

const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

// Load existing deep-org-data.js if it exists
let deepOrgData = {};
try {
    const dataFile = fs.readFileSync('./deep-org-data.js', 'utf8');
    // Extract the data object from the file
    const dataMatch = dataFile.match(/const deepOrgData = ({[\s\S]*});/);
    if (dataMatch) {
        deepOrgData = eval('(' + dataMatch[1] + ')');
    }
} catch (err) {
    console.log('Could not load deep-org-data.js, starting fresh');
}

// Function to extract data from HTML files
function extractFromHTML(filePath) {
    const html = fs.readFileSync(filePath, 'utf8');
    const $ = cheerio.load(html);
    const extracted = [];
    
    // Look for various org chart elements
    $('.org-node, .node, .person-card, .staff-member').each((i, elem) => {
        const name = $(elem).find('.name, .node-name, .person-name').text().trim();
        const title = $(elem).find('.title, .node-title, .person-title').text().trim();
        const location = $(elem).find('.location, .node-location').text().trim();
        
        if (name && title) {
            extracted.push({ name, title, location });
        }
    });
    
    return extracted;
}

// Process all HTML files
function processAllFiles() {
    const files = fs.readdirSync('.');
    const allData = {};
    
    files.forEach(file => {
        if (file.endsWith('.html') && !file.includes('index')) {
            console.log(`Processing ${file}...`);
            const data = extractFromHTML(file);
            
            // Determine region from filename
            let region = 'unknown';
            if (file.includes('ncflorida') || file.includes('florida-nc')) {
                region = 'florida-nc';
            } else if (file.includes('georgia')) {
                region = 'georgia';
            } else if (file.includes('alabama')) {
                region = 'alabama-mississippi';
            } else if (file.includes('south-carolina')) {
                region = 'south-carolina';
            } else if (file.includes('north-carolina')) {
                region = 'north-carolina';
            } else if (file.includes('tennessee')) {
                region = 'tennessee';
            } else if (file.includes('puerto')) {
                region = 'puerto-rico';
            } else if (file.includes('florida-south')) {
                region = 'florida-south';
            }
            
            if (!allData[region]) {
                allData[region] = [];
            }
            
            allData[region] = allData[region].concat(data);
        }
    });
    
    return allData;
}

// Generate consolidated CSV
function generateCSV(data) {
    let csv = 'ID,Name,Title,Location,ReportsTo,Region,Department\n';
    let id = 1;
    
    for (const [region, positions] of Object.entries(data)) {
        positions.forEach(pos => {
            // Generate ID
            const posId = `pos-${id}`;
            id++;
            
            // Determine department from title
            let dept = 'Operations';
            if (pos.title.toLowerCase().includes('development') || pos.title.toLowerCase().includes('philanthropy')) {
                dept = 'Development';
            } else if (pos.title.toLowerCase().includes('disaster')) {
                dept = 'Disaster Services';
            } else if (pos.title.toLowerCase().includes('volunteer')) {
                dept = 'Volunteer Services';
            } else if (pos.title.toLowerCase().includes('bio') || pos.title.toLowerCase().includes('blood')) {
                dept = 'Biomedical Services';
            }
            
            csv += `${posId},"${pos.name}","${pos.title}","${pos.location || ''}","","${region}","${dept}"\n`;
        });
    }
    
    fs.writeFileSync('consolidated-data.csv', csv);
    console.log('Generated consolidated-data.csv');
}

// Generate SQL for database initialization
function generateSQL(data) {
    let sql = '-- Red Cross Org Chart Database Initialization\n';
    sql += '-- Generated from existing HTML files\n\n';
    sql += 'DELETE FROM positions;\n\n';
    
    let id = 1;
    
    for (const [region, positions] of Object.entries(data)) {
        sql += `-- ${region.toUpperCase()} Region\n`;
        
        positions.forEach(pos => {
            const posId = `pos-${id}`;
            id++;
            
            // Determine department
            let dept = 'Operations';
            if (pos.title.toLowerCase().includes('development')) dept = 'Development';
            else if (pos.title.toLowerCase().includes('disaster')) dept = 'Disaster Services';
            
            sql += `INSERT INTO positions (id, name, title, location, region, department) VALUES ('${posId}', '${pos.name.replace(/'/g, "''")}', '${pos.title.replace(/'/g, "''")}', '${pos.location || ''}', '${region}', '${dept}');\n`;
        });
        
        sql += '\n';
    }
    
    fs.writeFileSync('init-database.sql', sql);
    console.log('Generated init-database.sql');
}

// Main execution
console.log('Starting data extraction...\n');

// Extract from HTML files
const extractedData = processAllFiles();

// Merge with existing deepOrgData
const mergedData = { ...deepOrgData };
for (const [region, positions] of Object.entries(extractedData)) {
    if (!mergedData[region]) {
        mergedData[region] = positions;
    }
}

// Generate outputs
generateCSV(mergedData);
generateSQL(mergedData);

// Generate updated deep-org-data.js
const jsOutput = `// Red Cross Organizational Data
// Auto-generated from HTML files
// Last updated: ${new Date().toISOString()}

const deepOrgData = ${JSON.stringify(mergedData, null, 2)};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = deepOrgData;
}
`;

fs.writeFileSync('deep-org-data-updated.js', jsOutput);
console.log('Generated deep-org-data-updated.js');

console.log('\nData extraction complete!');
console.log(`Total regions processed: ${Object.keys(mergedData).length}`);
console.log(`Total positions extracted: ${Object.values(mergedData).flat().length}`);