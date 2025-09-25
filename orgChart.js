// Color scheme for regions
const COLORS = {
    division: '#ED1B2E',      // Red Cross red for division leadership
    georgia: '#2E86AB',        // Blue for Georgia
    alabama: '#A23B72',        // Purple for Alabama/Mississippi
    northcarolina: '#F18F01',  // Orange for North Carolina
    southcarolina: '#C73E1D',  // Dark red for South Carolina
    tennessee: '#6A994E',      // Green for Tennessee
    puertorico: '#BC4B51',     // Rose for Puerto Rico
    florida: '#5D737E',        // Gray-blue for Florida
    vacant: '#666666',         // Gray for vacant positions
    
    // Sub-region colors (lighter variants)
    georgiaLocal: '#5BA3C9',
    alabamaLocal: '#C668A0',
    ncLocal: '#F5B454',
    scLocal: '#DA6B4D'
};

// Initialize the chart
let chart;
let nodeCount = 0;
let expandedNodes = 0;

// Convert our data to OrgChart format
function convertDataToNodes(data, parentId = null, region = 'division', level = 0) {
    const nodes = [];
    const nodeId = parentId ? `${parentId}_${nodes.length}` : 'root';
    
    // Determine color based on region and level
    let nodeColor = COLORS.division;
    if (data.name && data.name.includes('Vacant')) {
        nodeColor = COLORS.vacant;
    } else if (region !== 'division') {
        // Use region color for regional leadership, lighter color for local staff
        if (level <= 2) {
            nodeColor = COLORS[region] || COLORS.division;
        } else {
            nodeColor = COLORS[region + 'Local'] || COLORS[region] || COLORS.division;
        }
    }
    
    // Create node
    const node = {
        id: nodeId,
        pid: parentId,
        name: data.name || 'Unknown',
        title: data.title || '',
        location: data.location || '',
        img: '', // Could add profile images later
        color: nodeColor
    };
    
    nodes.push(node);
    nodeCount++;
    
    // Process children
    if (data.children && data.children.length > 0) {
        data.children.forEach((child, index) => {
            // Determine region for children
            let childRegion = child.region || region;
            nodes.push(...convertDataToNodes(child, nodeId, childRegion, level + 1));
        });
    }
    
    return nodes;
}

// Load the complete org data
function loadOrgChart() {
    // Using the complete data from orgData.js
    const nodes = convertDataToNodes(orgData);
    
    // Update stats
    document.getElementById('totalCount').textContent = nodeCount;
    
    // Configure OrgChart
    OrgChart.templates.ana.field_0 = 
        '<text data-width="230" data-text-overflow="ellipsis" style="font-size: 18px;" fill="#ffffff" x="125" y="30" text-anchor="middle">{val}</text>';
    OrgChart.templates.ana.field_1 = 
        '<text data-width="230" data-text-overflow="ellipsis" style="font-size: 14px;" fill="#ffffff" x="125" y="50" text-anchor="middle">{val}</text>';
    OrgChart.templates.ana.field_2 = 
        '<text data-width="230" data-text-overflow="ellipsis" style="font-size: 12px;" fill="#ffffff" x="125" y="70" text-anchor="middle">{val}</text>';
    
    // Custom template for different colors
    OrgChart.templates.redcross = Object.assign({}, OrgChart.templates.ana);
    OrgChart.templates.redcross.size = [250, 90];
    OrgChart.templates.redcross.node = 
        '<rect x="0" y="0" height="{h}" width="{w}" fill="{color}" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>';
    
    // Create the chart
    chart = new OrgChart(document.getElementById("tree"), {
        template: "redcross",
        enableDragDrop: false,
        nodeBinding: {
            field_0: "name",
            field_1: "title",
            field_2: "location",
            color: "color"
        },
        nodes: nodes,
        toolbar: {
            layout: true,
            zoom: true,
            fit: true,
            expandAll: false
        },
        menu: {
            pdf: { text: "Export PDF" },
            png: { text: "Export PNG" },
            svg: { text: "Export SVG" },
            csv: { text: "Export CSV" }
        },
        nodeMenu: {
            details: { text: "Details" },
            add: { text: "Add Person" },
            edit: { text: "Edit" },
            remove: { text: "Remove" }
        },
        collapse: {
            level: 2,
            allChildren: true
        },
        layout: OrgChart.mixed,
        scaleInitial: OrgChart.match.boundary,
        mouseScrool: OrgChart.action.zoom,
        nodeMouseClick: OrgChart.action.none,
        editForm: {
            buttons: {
                edit: null,
                share: null,
                pdf: null
            },
            generateElementsFromFields: false,
            elements: [
                { type: 'textbox', label: 'Name', binding: 'name' },
                { type: 'textbox', label: 'Title', binding: 'title' },
                { type: 'textbox', label: 'Location', binding: 'location' }
            ]
        }
    });
    
    // Add search functionality
    document.getElementById('searchBox').addEventListener('keyup', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        if (searchTerm.length > 2) {
            const foundNodes = nodes.filter(node => 
                (node.name && node.name.toLowerCase().includes(searchTerm)) ||
                (node.title && node.title.toLowerCase().includes(searchTerm)) ||
                (node.location && node.location.toLowerCase().includes(searchTerm))
            );
            
            if (foundNodes.length > 0) {
                chart.center(foundNodes[0].id, {
                    parentState: OrgChart.COLLAPSE_PARENT_NEIGHBORS,
                    childrenState: OrgChart.COLLAPSE_SUB_CHILDRENS,
                    ripple: {
                        radius: 100,
                        color: "#e6f3ff",
                        rect: null
                    }
                });
            }
        }
    });
    
    // Update expanded count on node click
    chart.on('click', function(sender, args) {
        setTimeout(() => {
            const expandedElements = document.querySelectorAll('[data-n-id]:not([data-l-id="1"])');
            document.getElementById('expandedCount').textContent = expandedElements.length;
        }, 100);
    });
}

// Control functions
function expandAll() {
    chart.expand(null, 'all');
    document.getElementById('expandedCount').textContent = nodeCount;
}

function collapseAll() {
    chart.collapse(null, 'all');
    document.getElementById('expandedCount').textContent = '1';
}

function fitToScreen() {
    chart.fit();
}

function exportChart() {
    chart.exportPDF();
}

// Load chart when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Check if orgData exists
    if (typeof orgData === 'undefined') {
        console.error('orgData not found. Loading sample data...');
        // Load a simplified version for testing
        window.orgData = {
            name: "Anna Trefethen",
            title: "Vice President",
            subtitle: "SE & Caribbean Division",
            type: "executive",
            children: [
                {
                    name: "Alicia Doherty",
                    title: "Regional Chief Executive Officer",
                    location: "Atlanta",
                    region: "georgia",
                    children: [
                        {
                            name: "D. Dixon",
                            title: "DFVP",
                            children: [
                                {
                                    name: "V. Barnett",
                                    title: "Director of Division Fundraising"
                                }
                            ]
                        },
                        {
                            name: "Katrina Gonzalez",
                            title: "Div SAF Director",
                            children: [
                                {
                                    name: "Victoria Hamrick",
                                    title: "SAF Director",
                                    location: "Atlanta"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "M. Beddingfield",
                    title: "Regional Executive",
                    location: "Birmingham",
                    region: "alabama",
                    children: [
                        {
                            name: "E. Whitt",
                            title: "Executive Coordinator",
                            location: "Birmingham"
                        }
                    ]
                },
                {
                    name: "A. Taylor",
                    title: "Regional Executive",
                    location: "North Carolina",
                    region: "northcarolina",
                    children: [
                        {
                            name: "S. Laub",
                            title: "Executive Coord"
                        }
                    ]
                },
                {
                    name: "Susan Everitt",
                    title: "Regional Executive",
                    location: "South Carolina",
                    region: "southcarolina",
                    children: [
                        {
                            name: "L. Ruggles",
                            title: "Executive Coord"
                        }
                    ]
                }
            ]
        };
    }
    
    loadOrgChart();
});