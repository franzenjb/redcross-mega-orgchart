// Red Cross SE & Caribbean Division Leadership
// Division-wide executives who oversee all regions

const divisionalLeadership = {
    "division-leadership": {
        name: "Division Leadership",
        title: "SE & Caribbean Division",
        location: "Division HQ",
        type: "division",
        children: [
            {
                name: "Ryan Lock", 
                title: "Division Disaster Executive",
                location: "Division HQ",
                type: "executive",
                children: [
                            {
                                name: "Janice Vannatta",
                                title: "Chief of Staff",
                                location: "Division HQ"
                            },
                            {
                                name: "Patricia D'Alessandro",
                                title: "AD Operations",
                                location: "Division HQ",
                                children: [
                                    { name: "Rick Schou", title: "Zone Coordinator-Zone 1" },
                                    { name: "Bene Hunter", title: "Zone Coordinator-Zone 2" },
                                    { name: "Brenda Bridges", title: "HQ Mass Care Chief" }
                                ]
                            },
                            {
                                name: "Marvin Williams",
                                title: "AD Logistics",
                                location: "Division HQ",
                                children: [
                                    { name: "Margenia Hatfield", title: "HQ Logistics Chief" },
                                    { name: "Lee Meyer", title: "HQ Transportation Manager" }
                                ]
                            }
                ]
            },
            {
                name: "D. Dixon",
                        title: "Division Chief Development Officer",
                        location: "Division HQ",
                        type: "executive",
                        children: [
                                    { name: "W. Carney", title: "CDO - Florida N/C", location: "Jacksonville", region: "florida-nc" },
                                    { name: "Tzaicel Hernandez", title: "CDO - Florida South", location: "Miami", region: "florida-south" },
                                    { name: "Vacant", title: "CDO - Georgia", location: "Atlanta", region: "georgia" },
                                    { name: "L. Vaughn", title: "CDO - Tennessee", location: "Memphis", region: "tennessee" },
                                    { name: "D. Warren", title: "CDO - Alabama/Mississippi", location: "Birmingham", region: "alabama-mississippi" },
                                    { name: "E. Davis", title: "CDO - North Carolina", location: "Charlotte", region: "north-carolina" },
                                    { name: "S. Ingraham", title: "CDO - South Carolina", region: "south-carolina" },
                                    { name: "M. Santiago", title: "CDO - Puerto Rico", location: "San Juan", region: "puerto-rico" }
                ]
            },
            {
                name: "K. Gonzalez",
                        title: "Division Service to Armed Forces Director",
                        location: "Division HQ",
                        type: "executive",
                        children: [
                                    { name: "G. Scrivens", title: "SAF Director - Florida N/C", location: "Tampa", region: "florida-nc" },
                                    { name: "Ivan Sterpin", title: "SAF Director - Florida South", location: "Miami", region: "florida-south" },
                                    { name: "Victoria Hamrick", title: "SAF Director - Georgia", location: "Atlanta", region: "georgia" },
                                    { name: "A. Ware", title: "SAF Director - Tennessee", location: "Nashville", region: "tennessee" },
                                    { name: "N. Ortiz", title: "SAF Lead - Puerto Rico", location: "San Juan", region: "puerto-rico" }
                ]
            },
            {
                name: "S. Taylor",
                        title: "Division Communications Director",
                        location: "Division HQ",
                        type: "executive",
                        children: [
                                    { name: "A. Bierfreund", title: "Comm Director - Florida N/C", location: "Jacksonville", region: "florida-nc" },
                                    { name: "Tiffany Gonzalez", title: "Dir Comm - Florida South", location: "Miami", region: "florida-south" },
                                    { name: "J. Copeland", title: "Regional External Comms Manager - Georgia", location: "Atlanta", region: "georgia" },
                                    { name: "J. Williams", title: "Dir Comm/Mkt - Tennessee", location: "Nashville", region: "tennessee" },
                                    { name: "B. Reynolds", title: "Regional Communications Director - North Carolina", location: "Charlotte", region: "north-carolina" }
                ]
            },
            {
                name: "C. Edwards",
                        title: "Division Community Engagement Director",
                        location: "Division HQ",
                        type: "executive",
                        children: [
                                    { name: "G. Robinson", title: "Sr FSTPM" },
                                    { name: "D. Eichhorn", title: "Sr Division Govt Relations Officer" },
                                    { name: "M. Sapp", title: "Volunteer Mobilization Director" }
                ]
            },
            {
                name: "Division Support Functions",
                        title: "Division Support",
                        type: "support",
                        children: [
                                    { name: "P. Foster", title: "DRHRM - Georgia", location: "Atlanta", region: "georgia" },
                                    { name: "L. Turner", title: "Regional HR Director - Alabama/Mississippi", location: "Birmingham", region: "alabama-mississippi" },
                                    { name: "D. Porter", title: "Regional HR Director - North Carolina", location: "Charlotte", region: "north-carolina" },
                                    { name: "J. Webb", title: "Regional IT Director - North Carolina", location: "Charlotte", region: "north-carolina" },
                                    { name: "Keith Cofer", title: "RD Biomedical Services - Georgia", region: "georgia" },
                                    { name: "K. Mason", title: "Regional Blood Services Director - North Carolina", location: "Charlotte", region: "north-carolina" },
                                    { name: "K. Murray", title: "Regional Blood Services Director - South Carolina", location: "Columbia", region: "south-carolina" }
                ]
            },
            {
                name: "Regional Executives",
                title: "Regional Leadership",
                type: "regional-summary",
                children: [
                    { name: "C. Smith", title: "Regional Executive - Florida N/C", location: "Jacksonville", region: "florida-nc" },
                    { name: "Krista Coletti", title: "Regional Executive - Florida South", location: "Miami", region: "florida-south" },
                    { name: "Alicia Doherty", title: "Regional Chief Executive - Georgia", location: "Atlanta", region: "georgia" },
                    { name: "J. Sullivan", title: "Regional Executive - Tennessee", location: "Nashville", region: "tennessee" },
                    { name: "M. Beddingfield", title: "Regional Executive - Alabama/Mississippi", location: "Birmingham/Jackson", region: "alabama-mississippi" },
                    { name: "A. Taylor", title: "Regional Executive - North Carolina", location: "North Carolina", region: "north-carolina" },
                    { name: "Susan Everitt", title: "Regional Executive - South Carolina", location: "South Carolina", region: "south-carolina" },
                    { name: "L. Rodriguez", title: "Regional Executive - Puerto Rico", location: "San Juan", region: "puerto-rico" }
                ]
            }
        ]
    }
};

// Export for use in main application
if (typeof window !== 'undefined') {
    window.divisionalLeadership = divisionalLeadership;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = divisionalLeadership;
}