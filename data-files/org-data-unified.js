// Unified Red Cross SE & Caribbean Division Organizational Data
// Single source of truth - each person appears only once
// Uses references for dual reporting relationships

const unifiedOrgData = {
    // Master person registry - single source of truth
    people: {
        // Division Leadership
        "anna-trefethen": {
            id: "anna-trefethen",
            name: "Anna Trefethen",
            title: "Division Vice President",
            location: "SE & Caribbean Division",
            type: "division"
        },
        "ryan-lock": {
            id: "ryan-lock",
            name: "Ryan Lock",
            title: "Division Disaster Executive",
            location: "Division HQ",
            type: "executive"
        },
        "d-dixon": {
            id: "d-dixon",
            name: "D. Dixon",
            title: "Chief Development Officer",
            location: "Division HQ",
            type: "executive"
        },
        "k-gonzalez": {
            id: "k-gonzalez",
            name: "K. Gonzalez",
            title: "Service to Armed Forces Director",
            location: "Division HQ",
            type: "executive"
        },
        "s-taylor": {
            id: "s-taylor",
            name: "S. Taylor",
            title: "Chief Communications Officer",
            location: "Division HQ",
            type: "executive"
        },
        "c-edwards": {
            id: "c-edwards",
            name: "C. Edwards",
            title: "Chief Community Engagement Officer",
            location: "Division HQ",
            type: "executive"
        },
        
        // Regional Executives
        "l-feliciano": {
            id: "l-feliciano",
            name: "L. Feliciano",
            title: "Regional Executive",
            location: "San Juan",
            type: "puerto-rico"
        },
        "alicia-doherty": {
            id: "alicia-doherty",
            name: "Alicia Doherty",
            title: "Regional Chief Executive",
            location: "Atlanta",
            type: "georgia"
        },
        "c-smith": {
            id: "c-smith",
            name: "C. Smith",
            title: "Regional Executive",
            location: "Jacksonville",
            type: "ncflorida"
        },
        "krista-coletti": {
            id: "krista-coletti",
            name: "Krista Coletti",
            title: "Regional Executive",
            location: "Miami",
            type: "sflorida"
        },
        "j-sullivan": {
            id: "j-sullivan",
            name: "J. Sullivan",
            title: "Regional Executive",
            location: "Nashville",
            type: "tennessee"
        },
        "m-beddingfield": {
            id: "m-beddingfield",
            name: "M. Beddingfield",
            title: "Regional Executive",
            location: "Birmingham",
            type: "alabama"
        },
        "a-taylor": {
            id: "a-taylor",
            name: "A. Taylor",
            title: "Regional Executive",
            location: "North Carolina",
            type: "northcarolina"
        },
        "susan-everitt": {
            id: "susan-everitt",
            name: "Susan Everitt",
            title: "Regional Executive",
            location: "South Carolina",
            type: "southcarolina"
        },
        
        // People with dual reporting - SINGLE ENTRY
        "w-carney": {
            id: "w-carney",
            name: "W. Carney",
            title: "Chief Development Officer",
            regionalTitle: "CDO - Florida N/C",  // Title when shown in division context
            location: "Jacksonville",
            type: "ncflorida",
            dualReport: true,
            primaryReport: "c-smith",  // Reports to C. Smith regionally
            secondaryReport: "d-dixon"  // Reports to D. Dixon functionally
        },
        "tzaicel-hernandez": {
            id: "tzaicel-hernandez",
            name: "Tzaicel Hernandez",
            title: "Chief Development Officer",
            regionalTitle: "CDO - Florida South",
            location: "Miami",
            type: "sflorida",
            dualReport: true,
            primaryReport: "krista-coletti",
            secondaryReport: "d-dixon"
        },
        "l-vaughn": {
            id: "l-vaughn",
            name: "L. Vaughn",
            title: "Chief Development Officer",
            regionalTitle: "CDO - Tennessee",
            location: "Memphis",
            type: "tennessee",
            dualReport: true,
            primaryReport: "j-sullivan",
            secondaryReport: "d-dixon"
        },
        "d-warren": {
            id: "d-warren",
            name: "D. Warren",
            title: "Chief Development Officer",
            regionalTitle: "CDO - Alabama/Mississippi",
            location: "Birmingham",
            type: "alabama",
            dualReport: true,
            primaryReport: "m-beddingfield",
            secondaryReport: "d-dixon"
        },
        "e-davis": {
            id: "e-davis",
            name: "E. Davis",
            title: "Chief Development Officer",
            regionalTitle: "CDO - North Carolina",
            location: "Charlotte",
            type: "northcarolina",
            dualReport: true,
            primaryReport: "a-taylor",
            secondaryReport: "d-dixon"
        },
        "s-ingraham": {
            id: "s-ingraham",
            name: "S. Ingraham",
            title: "Chief Development Officer",
            regionalTitle: "CDO - South Carolina",
            location: "Columbia",
            type: "southcarolina",
            dualReport: true,
            primaryReport: "susan-everitt",
            secondaryReport: "d-dixon"
        },
        "m-santiago": {
            id: "m-santiago",
            name: "M. Santiago",
            title: "Chief Development Officer",
            regionalTitle: "CDO - Puerto Rico",
            location: "San Juan",
            type: "puerto-rico",
            dualReport: true,
            primaryReport: "l-feliciano",
            secondaryReport: "d-dixon"
        }
    },
    
    // Organization structure using references
    structure: {
        id: "anna-trefethen",
        children: [
            {
                id: "division-leadership",
                name: "Division Leadership",
                title: "Executive Team",
                type: "group",
                children: [
                    {
                        id: "ryan-lock",
                        children: ["janice-vannatta", "patricia-dalessandro", "marvin-williams"]
                    },
                    {
                        id: "d-dixon",
                        children: [
                            {
                                id: "regional-development",
                                name: "Regional Development Leaders",
                                type: "group",
                                // These are REFERENCES, not duplicates
                                childRefs: [
                                    "w-carney",
                                    "tzaicel-hernandez",
                                    "l-vaughn",
                                    "d-warren",
                                    "e-davis",
                                    "s-ingraham",
                                    "m-santiago"
                                ]
                            }
                        ]
                    },
                    {
                        id: "k-gonzalez",
                        children: ["victoria-hamrick", "a-ware", "n-ortiz"]
                    },
                    {
                        id: "s-taylor",
                        children: ["j-copeland", "l-brown", "j-brown"]
                    },
                    {
                        id: "c-edwards",
                        children: ["g-robinson", "d-eichhorn", "m-sapp"]
                    }
                ]
            },
            {
                id: "regional-executives",
                name: "Regional Executives",
                title: "Regional Leadership",
                type: "group",
                children: [
                    {
                        id: "l-feliciano",
                        children: [
                            "m-santiago",  // This person ALSO appears under d-dixon
                            "j-colon",
                            "p-torres"
                        ]
                    },
                    {
                        id: "alicia-doherty",
                        children: [
                            "adelaide-kirk",
                            "carla-dillard-homer",
                            "l-holland"
                        ]
                    },
                    {
                        id: "c-smith",
                        children: [
                            "k-jones",
                            "w-carney",  // This person ALSO appears under d-dixon
                            "s-rosario",
                            "j-walker",
                            "k-watt"
                        ]
                    },
                    {
                        id: "krista-coletti",
                        children: [
                            "rosemarie-critchfield",
                            "tzaicel-hernandez",  // This person ALSO appears under d-dixon
                            "julie-unwin",
                            "monica-rusconi"
                        ]
                    },
                    {
                        id: "j-sullivan",
                        children: [
                            "k-mostoller",
                            "l-vaughn",  // This person ALSO appears under d-dixon
                            "g-king",
                            "c-robins"
                        ]
                    },
                    {
                        id: "m-beddingfield",
                        children: [
                            "e-whitt",
                            "d-warren",  // This person ALSO appears under d-dixon
                            "r-word",
                            "t-stewart"
                        ]
                    },
                    {
                        id: "a-taylor",
                        children: [
                            "s-laub",
                            "e-davis",  // This person ALSO appears under d-dixon
                            "m-womble",
                            "j-jarvis"
                        ]
                    },
                    {
                        id: "susan-everitt",
                        children: [
                            "l-ruggles",
                            "s-ingraham",  // This person ALSO appears under d-dixon
                            "m-hesbach",
                            "t-reid"
                        ]
                    }
                ]
            }
        ]
    }
};

// Function to convert unified data to flat array for D3 OrgChart
function unifiedToFlatData() {
    const flatData = [];
    const processedIds = new Set();
    let nodeId = 0;
    
    function processNode(personId, parentId = null, useRegionalTitle = false) {
        // Skip if this exact relationship has been processed
        const relationshipKey = `${personId}-${parentId}-${useRegionalTitle}`;
        if (processedIds.has(relationshipKey)) {
            return null;
        }
        processedIds.add(relationshipKey);
        
        const person = unifiedOrgData.people[personId];
        if (!person) {
            // Handle group nodes
            if (typeof personId === 'object') {
                const group = personId;
                const groupNodeId = `node-${nodeId++}`;
                flatData.push({
                    id: groupNodeId,
                    parentId: parentId,
                    name: group.name,
                    title: group.title || '',
                    type: group.type || 'group'
                });
                
                // Process children or childRefs
                if (group.children) {
                    group.children.forEach(childId => {
                        processNode(childId, groupNodeId, false);
                    });
                }
                if (group.childRefs) {
                    group.childRefs.forEach(childId => {
                        processNode(childId, groupNodeId, true);  // Use regional title for refs
                    });
                }
                return groupNodeId;
            }
            return null;
        }
        
        // Create unique node ID for this instance
        const uniqueNodeId = `${person.id}-${nodeId++}`;
        
        // Determine which title to use
        let title = person.title;
        if (useRegionalTitle && person.regionalTitle) {
            title = person.regionalTitle;
        }
        
        // Add node to flat data
        flatData.push({
            id: uniqueNodeId,
            parentId: parentId,
            name: person.name,
            title: title,
            location: person.location || '',
            type: person.type || '',
            personId: person.id,  // Reference to master record
            dualReport: person.dualReport || false
        });
        
        return uniqueNodeId;
    }
    
    // Start processing from root
    function processStructure(node, parentId = null) {
        if (typeof node === 'string') {
            return processNode(node, parentId, false);
        }
        
        let currentNodeId = null;
        if (node.id) {
            currentNodeId = processNode(node.id, parentId, false);
        } else {
            // It's a group node
            currentNodeId = processNode(node, parentId, false);
        }
        
        if (node.children && currentNodeId) {
            node.children.forEach(child => {
                processStructure(child, currentNodeId);
            });
        }
        
        return currentNodeId;
    }
    
    processStructure(unifiedOrgData.structure);
    return flatData;
}

// Export for use in org chart
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { unifiedOrgData, unifiedToFlatData };
}