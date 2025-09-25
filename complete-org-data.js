// Complete Red Cross SE & Caribbean Division Organizational Data
// All 8 Regions with Complete Staffing Information

const completeOrgData = {
    "alabama-mississippi": {
        name: "M. Beddingfield",
        title: "Regional Executive",
        location: "Birmingham/Jackson",
        type: "alabama-mississippi",
        children: [
            {
                name: "E. Whitt",
                title: "Executive Coordinator",
                location: "Birmingham"
            },
            {
                name: "D. Warren",
                title: "Chief Development Officer",
                location: "Birmingham",
                children: [
                    {
                        name: "M. Williams",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Birmingham",
                        children: [
                            { name: "L. Phillips", title: "Regional Philanthropy Officer", location: "Birmingham" },
                            { name: "K. Pitts", title: "Regional Philanthropy Officer", location: "Birmingham" },
                            { name: "J. Wood", title: "Regional Philanthropy Officer", location: "Birmingham" },
                            { name: "J. Copeland", title: "Regional Philanthropy Officer", location: "Mobile" },
                            { name: "K. Tompkins", title: "Regional Philanthropy Officer", location: "Montgomery" }
                        ]
                    },
                    {
                        name: "L. Hollingsworth",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Jackson",
                        children: [
                            { name: "T. Goolsby", title: "Regional Philanthropy Officer", location: "Jackson" },
                            { name: "T. Wright", title: "Regional Philanthropy Officer", location: "Meridian" },
                            { name: "D. Taylor", title: "Regional Philanthropy Officer", location: "Tupelo" },
                            { name: "K. Shaw", title: "Regional Philanthropy Officer", location: "Gulfport" }
                        ]
                    },
                    {
                        name: "L. Gordon",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Huntsville",
                        children: [
                            { name: "M. Mitchell", title: "Regional Philanthropy Officer", location: "Huntsville" },
                            { name: "K. Stinson", title: "Regional Philanthropy Officer", location: "Decatur" },
                            { name: "J. Davis", title: "Regional Philanthropy Officer", location: "Florence" }
                        ]
                    },
                    {
                        name: "S. Meadows",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Tuscaloosa",
                        children: [
                            { name: "W. Smith", title: "Regional Philanthropy Officer", location: "Tuscaloosa" },
                            { name: "T. Green", title: "Regional Philanthropy Officer", location: "Anniston" }
                        ]
                    }
                ]
            },
            {
                name: "R. Word",
                title: "Chief Operating Officer ALMS",
                children: [
                    {
                        name: "E. Mooring",
                        title: "Executive Director",
                        location: "Birmingham",
                        children: [
                            { name: "A. Alexander", title: "Director of Operations", location: "Birmingham" },
                            { name: "D. Brown", title: "Community Outreach Specialist", location: "Birmingham" },
                            { name: "J. Smith", title: "Volunteer Coordinator", location: "Birmingham" }
                        ]
                    },
                    {
                        name: "R. Gardner",
                        title: "Executive Director",
                        location: "Montgomery",
                        children: [
                            { name: "S. Johnson", title: "Operations Manager", location: "Montgomery" },
                            { name: "P. Williams", title: "Program Manager", location: "Montgomery" }
                        ]
                    },
                    {
                        name: "T. Anderson",
                        title: "Executive Director",
                        location: "Mobile",
                        children: [
                            { name: "M. Davis", title: "Operations Manager", location: "Mobile" },
                            { name: "R. Thompson", title: "Community Programs Director", location: "Mobile" }
                        ]
                    },
                    {
                        name: "K. Roberts",
                        title: "Executive Director",
                        location: "Huntsville",
                        children: [
                            { name: "L. Martin", title: "Operations Manager", location: "Huntsville" },
                            { name: "D. Wilson", title: "Program Coordinator", location: "Huntsville" }
                        ]
                    },
                    {
                        name: "J. Patterson",
                        title: "Executive Director",
                        location: "Jackson",
                        children: [
                            { name: "T. Miller", title: "Operations Manager", location: "Jackson" },
                            { name: "S. Clark", title: "Community Services Manager", location: "Jackson" }
                        ]
                    },
                    {
                        name: "M. Henderson",
                        title: "Executive Director",
                        location: "Gulfport",
                        children: [
                            { name: "R. Lewis", title: "Operations Manager", location: "Gulfport" },
                            { name: "K. Walker", title: "Emergency Services Coordinator", location: "Gulfport" }
                        ]
                    }
                ]
            },
            {
                name: "T. Stewart",
                title: "Regional Disaster Officer",
                location: "Birmingham",
                children: [
                    { name: "D. Harris", title: "Disaster Program Manager", location: "Birmingham" },
                    { name: "L. Robinson", title: "Mass Care Specialist", location: "Birmingham" },
                    { name: "J. Thomas", title: "Shelter Manager", location: "Birmingham" },
                    {
                        name: "S. Martinez",
                        title: "Regional Disaster Officer",
                        location: "Jackson",
                        children: [
                            { name: "P. Garcia", title: "Disaster Response Coordinator", location: "Jackson" },
                            { name: "M. Rodriguez", title: "Emergency Services Manager", location: "Jackson" }
                        ]
                    },
                    {
                        name: "K. White",
                        title: "Disaster Services Director",
                        location: "Mobile",
                        children: [
                            { name: "R. Hall", title: "Disaster Response Manager", location: "Mobile" },
                            { name: "T. Young", title: "Logistics Coordinator", location: "Mobile" }
                        ]
                    }
                ]
            },
            {
                name: "L. Turner",
                title: "Regional HR Director",
                location: "Birmingham",
                children: [
                    { name: "S. Adams", title: "HR Business Partner", location: "Birmingham" },
                    { name: "M. Campbell", title: "HR Specialist", location: "Birmingham" }
                ]
            }
        ]
    },
    "florida-nc": {
        name: "C. Smith",
        title: "Regional Executive",
        location: "Jacksonville",
        type: "florida-nc",
        children: [
            {
                name: "K. Jones",
                title: "Executive Assistant",
                location: "Jacksonville"
            },
            {
                name: "W. Carney",
                title: "Chief Dev. Officer",
                location: "Jacksonville",
                children: [
                    {
                        name: "M. Brown",
                        title: "Sr Dir of Development",
                        location: "Jacksonville"
                    },
                    {
                        name: "J. Moran",
                        title: "Dir Major Gifts",
                        location: "Jacksonville"
                    },
                    {
                        name: "T. Sweeten",
                        title: "Dir Annual Giving",
                        location: "Jacksonville"
                    },
                    {
                        name: "A. Kennedy",
                        title: "Sr. RPO",
                        location: "Orlando",
                        children: [
                            { name: "M. Pharazyn", title: "RPO", location: "Orlando" }
                        ]
                    },
                    {
                        name: "R. Resler",
                        title: "Sr. RPO",
                        location: "Tampa",
                        children: [
                            { name: "C. Marasco", title: "RPO", location: "Tampa" },
                            { name: "Z. Thomas", title: "RPO", location: "Jacksonville" }
                        ]
                    },
                    { name: "H. Marchbanks", title: "RPO", location: "Tallahassee" },
                    { name: "D. Roman", title: "Dev Ops Coordinator" }
                ]
            },
            {
                name: "S. Rosario",
                title: "Regional Chief Operating Officer",
                location: "Tampa",
                children: [
                    {
                        name: "J. Moran",
                        title: "Executive Director",
                        location: "Orlando",
                        children: [
                            { name: "D. Lindo", title: "Comm Spec III", location: "Orlando" },
                            { name: "J. Judkins", title: "Coordinator", location: "Orlando" }
                        ]
                    },
                    {
                        name: "M. Brown",
                        title: "Executive Director",
                        location: "Tampa Bay",
                        children: [
                            { name: "C. Montoya", title: "Sr. Specialist", location: "Tampa" }
                        ]
                    },
                    {
                        name: "T. Jenkins",
                        title: "Executive Director",
                        location: "Pensacola",
                        children: [
                            { name: "D. Streeter", title: "Rep III", location: "Pensacola" }
                        ]
                    },
                    {
                        name: "S. Carraway",
                        title: "Executive Director",
                        location: "Tallahassee",
                        children: [
                            { name: "S. Francois", title: "Coordinator", location: "Tallahassee" },
                            { name: "V. Williams", title: "Sr. Specialist", location: "Tallahassee" }
                        ]
                    }
                ]
            },
            {
                name: "K. Watt",
                title: "RDO (interim)",
                children: [
                    {
                        name: "M. Holland",
                        title: "Deputy RDO"
                    },
                    {
                        name: "D. McNair",
                        title: "Reg DWE Manager",
                        children: [
                            { name: "A. Young", title: "Reg DWE Specialist" }
                        ]
                    },
                    {
                        name: "M. Donahue",
                        title: "Regional Mass Care Manager"
                    },
                    {
                        name: "J. Clairday",
                        title: "Planning & Situational Awareness Manager"
                    },
                    {
                        name: "M. Boyd",
                        title: "Sr. CDPM 1-4",
                        children: [
                            {
                                name: "A. Cornett",
                                title: "CDPM",
                                location: "Pensacola"
                            },
                            {
                                name: "K. Bland",
                                title: "CDPM",
                                location: "Tallahassee",
                                children: [
                                    { name: "R. Barkley", title: "CDPS", location: "Tallahassee" }
                                ]
                            },
                            {
                                name: "A. Martain",
                                title: "CDPM",
                                location: "Gainesville"
                            },
                            {
                                name: "D. Gee",
                                title: "CDPM",
                                location: "Jacksonville"
                            },
                            {
                                name: "M. Giannini",
                                title: "CDPM",
                                location: "Jacksonville"
                            }
                        ]
                    },
                    {
                        name: "J. Latalladi",
                        title: "Sr. CDPM 5-6",
                        children: [
                            {
                                name: "S. Thompson",
                                title: "CDPM",
                                location: "Orlando"
                            },
                            {
                                name: "K. Abel",
                                title: "CDPM",
                                location: "Orlando",
                                children: [
                                    { name: "R. McGuire", title: "CDPS", location: "Orlando" }
                                ]
                            },
                            {
                                name: "X. Reeves",
                                title: "CDPM",
                                location: "Tampa",
                                children: [
                                    { name: "A. Quinones", title: "CDPS", location: "Tampa" }
                                ]
                            },
                            {
                                name: "S. Poreda",
                                title: "CDPM",
                                location: "Tampa"
                            }
                        ]
                    },
                    {
                        name: "T. Beazer",
                        title: "Sr. CDPM",
                        location: "USVI",
                        children: [
                            { name: "S. Hensley", title: "CDPM", location: "USVI" }
                        ]
                    }
                ]
            },
            {
                name: "G. Scrivens",
                title: "Service to Armed Forces/Program Director",
                location: "Tampa",
                children: [
                    { name: "A. Bolton", title: "SAF Manager", location: "Orlando" },
                    { name: "L. Tissicino", title: "Prog. Manager", location: "Jacksonville" },
                    { name: "L. Simms", title: "Mobile Program Manager" },
                    { name: "M. Chavarria", title: "Mobile SAF Spec", location: "Tampa" },
                    { name: "S. Youngren", title: "SAF Specialist", location: "Pensacola" },
                    { name: "D. McMillian", title: "Sr. Specialist", location: "Tallahassee" },
                    { name: "L. Pendergrass", title: "Coordinator", location: "Daytona" }
                ]
            },
            {
                name: "J. Walker",
                title: "RVSO",
                location: "Jacksonville",
                children: [
                    { name: "S. Williams", title: "Specialist", location: "Jacksonville" },
                    { name: "C. Funkhouser", title: "Specialist", location: "Tampa" },
                    { name: "A. Lin", title: "Rep II", location: "Orlando/Daytona" },
                    { name: "M. Gallagher", title: "Rep III", location: "Tampa" },
                    { name: "H. Anderson", title: "Rep II", location: "Jacksonville" }
                ]
            },
            {
                name: "A. Bierfreund",
                title: "Comm Director",
                location: "Jacksonville",
                children: [
                    { name: "R. Nelson", title: "Comm Spec. III" },
                    { name: "M. Smith", title: "Rep II", location: "USVI" }
                ]
            }
        ]
    },
    "florida-south": {
        name: "Krista Coletti",
        title: "Regional Executive",
        location: "Miami",
        type: "florida-south",
        children: [
            {
                name: "Rosemarie Critchfield",
                title: "Executive Assistant",
                location: "Miami"
            },
            {
                name: "Tzaicel Hernandez",
                title: "RCDO",
                location: "Miami",
                children: [
                    {
                        name: "Ellen Vaughan",
                        title: "Director of Dev.",
                        location: "Palm Beach",
                        children: [
                            { name: "Greg Goodman", title: "RPO-Individual", location: "Palm Beach" },
                            { name: "Amy McKie-Billing", title: "RPO-Individual", location: "Palm Beach" },
                            { name: "Holly Carotenuto", title: "RPO-Foundations", location: "Palm Beach" },
                            { name: "Melissa Mullen", title: "Dev. Specialist (.5)", location: "Palm Beach" }
                        ]
                    },
                    { name: "Kevin Moran", title: "RPO-Corporate", location: "Miami" },
                    { name: "Meredith da Silva", title: "RPO-Events", location: "Broward" },
                    { name: "RonDeena Ross", title: "RPO-Individual", location: "Naples" },
                    { name: "Keith Wayne", title: "Grants Coordinator", location: "Miami" },
                    { name: "Jeanette Agranoff", title: "Dev. Specialist", location: "Broward" },
                    { name: "Heidi Knippel", title: "Sr. Engagement Spc", location: "Broward" },
                    { name: "John Cain", title: "Engagement Spc", location: "SW Gulf Coast" },
                    { name: "Laura Patrick", title: "Engagement Spc", location: "Winter Haven" }
                ]
            },
            {
                name: "Julie Unwin",
                title: "RCOO",
                location: "Palm Beach",
                children: [
                    {
                        name: "Traci Mitchell",
                        title: "Executive Director",
                        location: "Palm Beach"
                    },
                    {
                        name: "Paula Prendergast",
                        title: "Executive Director",
                        location: "Broward"
                    },
                    {
                        name: "Debbie Koch",
                        title: "Executive Director",
                        location: "Miami"
                    },
                    {
                        name: "Khris Anderson",
                        title: "Executive Director",
                        location: "SWGCG, Interim"
                    },
                    {
                        name: "Tina Sweeten",
                        title: "Executive Director",
                        location: "Winter Haven"
                    }
                ]
            },
            {
                name: "Monica Rusconi",
                title: "RDO",
                location: "Miami",
                children: [
                    {
                        name: "Gary Pelletier",
                        title: "Dep. RDO",
                        location: "Vero Beach"
                    },
                    {
                        name: "Rok Anderson",
                        title: "Reg Mass Care Mgr",
                        location: "Broward"
                    },
                    {
                        name: "Lizzette Romano",
                        title: "Reg Client Care Mgr",
                        location: "Palm Beach"
                    },
                    {
                        name: "Jim Hagen",
                        title: "Reg. DAT Mgr",
                        location: "Vero Beach"
                    },
                    {
                        name: "Antonio Camejo",
                        title: "Mgr DWE",
                        location: "Miami",
                        children: [
                            { name: "Marie Blum", title: "DWE Specialist", location: "Sarasota" }
                        ]
                    },
                    {
                        name: "Kathleen Ward",
                        title: "Reg Planning & Awareness Mgr."
                    },
                    {
                        name: "Zack Stokes",
                        title: "Sr. CDPM",
                        location: "Broward",
                        children: [
                            { name: "Nickolyn Crosby", title: "CDPM", location: "Broward" },
                            { name: "Steven Ortega", title: "CDPS", location: "Broward" }
                        ]
                    },
                    {
                        name: "Katia Foust",
                        title: "CDPM",
                        location: "Miami",
                        children: [
                            { name: "Enrique Rivero", title: "CDPS", location: "Miami" }
                        ]
                    },
                    {
                        name: "Johan Reyes",
                        title: "CDPM",
                        location: "Palm Beach",
                        children: [
                            { name: "Josh Jean", title: "CDPS", location: "Palm Beach" }
                        ]
                    },
                    {
                        name: "Matthew Sarlouis",
                        title: "CDPM",
                        location: "Ft. Myers",
                        children: [
                            { name: "Nancy Gerwe", title: "CDPS", location: "Sarasota" }
                        ]
                    },
                    {
                        name: "Alex Glen",
                        title: "CDPS",
                        location: "Winter Haven"
                    }
                ]
            },
            {
                name: "Ivan Sterpin",
                title: "SAF/IS Director",
                location: "Miami",
                children: [
                    { name: "Rosimar Freitas", title: "SAF/IS Specialist", location: "Miami" }
                ]
            },
            {
                name: "Rudy Chavez",
                title: "RVSO",
                location: "Winter Haven",
                children: [
                    { name: "Marta Oppenheimer", title: "Sr. Recruitment Spc", location: "Miami" },
                    { name: "Colleen Raniere", title: "Sr. Recruitment Spc", location: "Palm Beach" }
                ]
            },
            {
                name: "Tiffany Gonzalez",
                title: "Dir Comm",
                location: "Miami",
                children: [
                    { name: "Dariana Molina", title: "Reg Comm Mgr", location: "Palm Beach" },
                    { name: "Stephanie Wesseling", title: "Reg Comm Mgr", location: "Miami" }
                ]
            },
            {
                name: "Business Operations Team",
                title: "Bus Ops",
                children: [
                    { name: "Ruben Ebanks", title: "Bus Ops Specialist", location: "Miami" },
                    { name: "Margarita Henao", title: "Bus Ops Specialist (.5)", location: "Miami" },
                    { name: "Rene Romano", title: "Bus Ops Specialist (.5)", location: "Palm Beach" },
                    { name: "Romaine Davis", title: "Bus Ops Specialist (.5)", location: "Ft. Myers" },
                    { name: "E. Cordero-Richardson", title: "Bus Ops Specialist", location: "Winter Haven" }
                ]
            }
        ]
    },
    "georgia": {
        name: "Alicia Doherty",
        title: "Regional Chief Executive",
        location: "Atlanta",
        type: "georgia",
        children: [
            {
                name: "Adelaide Kirk",
                title: "Regional Disaster Officer",
                location: "Columbus",
                children: [
                    {
                        name: "Jeremy McLendon",
                        title: "Deputy Regional Disaster Officer",
                        location: "Atlanta",
                        children: [
                            { name: "C. Williams", title: "Sr Community Disaster Program Manager", location: "Atlanta" },
                            { name: "M. Morrison", title: "Sr Community Disaster Program Manager", location: "SW GA" }
                        ]
                    },
                    {
                        name: "Kelly Crane",
                        title: "Sr Community Disaster Program Manager",
                        children: [
                            { name: "R. Oaks", title: "Community Disaster Program Manager", location: "Atlanta" },
                            { name: "M. Ruff", title: "Sr Disaster Recovery Manager", location: "Atlanta" },
                            { name: "K. Grant", title: "Case Supervisor", location: "Atlanta" }
                        ]
                    },
                    {
                        name: "T. Norbut",
                        title: "Regional Mass Care Manager",
                        location: "Atlanta",
                        children: [
                            { name: "M. Coates", title: "Sr Logistics Specialist", location: "Atlanta" },
                            { name: "D. Boatwright", title: "Disaster Services Technician", location: "Atlanta" }
                        ]
                    }
                ]
            },
            {
                name: "Carla Dillard Homer",
                title: "RCOO Atlanta",
                children: [
                    { name: "R. Williams", title: "Ex Dir", location: "Fulton" },
                    { name: "D. Maull", title: "Ex Dir", location: "Douglas" },
                    { name: "V. Woodward", title: "Ex Dir", location: "East Point" },
                    { name: "Y. Treadwell", title: "Ex Dir", location: "Central/Mid GA" },
                    { name: "L. Little", title: "Ex Dir", location: "SW GA" }
                ]
            },
            {
                name: "L. Holland",
                title: "RCOO Central GA",
                children: [
                    { name: "M. Benford", title: "BBS Program Manager", location: "Columbus" },
                    { name: "C. Bowser", title: "VS Coordinator", location: "Columbus" }
                ]
            },
            {
                name: "P. Foster",
                title: "DRHRM",
                location: "Atlanta",
                children: [
                    { name: "J. Myers", title: "HR Business Partner", location: "Atlanta" },
                    { name: "C. Davis", title: "Regional HR Business Partner", location: "Atlanta" }
                ]
            },
            {
                name: "Greg Scrivens",
                title: "Chief Development Officer",
                children: [
                    {
                        name: "K. Hobbs",
                        title: "RPO",
                        location: "Atlanta",
                        children: [
                            { name: "C. Barron", title: "Account Executive", location: "Atlanta" }
                        ]
                    },
                    {
                        name: "C. Bingham",
                        title: "RPO",
                        location: "Atlanta"
                    },
                    {
                        name: "T. Frazier",
                        title: "RPO",
                        location: "East Point"
                    },
                    {
                        name: "S. Hogan",
                        title: "RPO",
                        location: "Douglasville",
                        children: [
                            { name: "B. Myers", title: "Account Executive", location: "Douglasville" }
                        ]
                    },
                    {
                        name: "P. Sewell-Briscoe",
                        title: "RPO",
                        location: "Macon",
                        children: [
                            { name: "J. Johnson", title: "Account Executive", location: "Macon" }
                        ]
                    },
                    {
                        name: "M. Hartley",
                        title: "RPO",
                        location: "Savannah"
                    }
                ]
            },
            {
                name: "Keith Cofer",
                title: "RD Biomedical Services",
                children: [
                    {
                        name: "N. Mitchell",
                        title: "Dir Hospital Partnership",
                        location: "Atlanta",
                        children: [
                            { name: "P. Flint", title: "BS Supervisor", location: "Atlanta" }
                        ]
                    },
                    {
                        name: "K. Davis",
                        title: "Dir Blood Mobile Operations",
                        location: "Atlanta"
                    },
                    {
                        name: "C. Thomas",
                        title: "Sr Dir Donor Recruitment",
                        location: "Atlanta",
                        children: [
                            { name: "M. Mondecar", title: "Donor Recruitment Manager", location: "Atlanta" }
                        ]
                    },
                    { name: "T. Johnson", title: "Collections Manager" },
                    { name: "K. Stevenson", title: "Donor Resources Mgr" }
                ]
            },
            {
                name: "Victoria Hamrick",
                title: "SAF Director",
                location: "Atlanta",
                children: [
                    { name: "J. Harris", title: "SAF Station Manager", location: "Atlanta Airport" },
                    { name: "N. Clay", title: "Sr. SAF Specialist", location: "Atlanta North" },
                    { name: "L. Elmore", title: "Sr. SAF Specialist", location: "Atlanta South" },
                    { name: "A. Thornburg", title: "Sr. SAF Specialist", location: "Marietta" }
                ]
            },
            {
                name: "Jill Deskins",
                title: "Sr. Volunteer Services Specialist",
                location: "Columbus",
                children: [
                    { name: "J. Haire", title: "SAF Program Manager", location: "Columbus" },
                    { name: "C. Jeter", title: "SAF Manager", location: "Columbus" }
                ]
            },
            {
                name: "M. Smith",
                title: "SAF Program Manager",
                location: "Ft Gordon",
                children: [
                    { name: "C. Shubrick", title: "SAF Manager", location: "Ft Gordon" }
                ]
            },
            {
                name: "T. Perry",
                title: "SAF Program Manager",
                location: "Robins AFB",
                children: [
                    { name: "A. Gibson", title: "SAF Manager", location: "Robins AFB" },
                    { name: "C. Black", title: "SAF Coordinator", location: "Robins AFB" }
                ]
            },
            {
                name: "Communications Team",
                title: "Communications",
                children: [
                    { name: "J. Copeland", title: "Regional External Comms Manager", location: "Atlanta" },
                    { name: "L. Brown", title: "Regional External Comms Director", location: "Atlanta" },
                    { name: "J. Brown", title: "Internal Comms Manager", location: "Atlanta" }
                ]
            },
            {
                name: "Community Engagement",
                title: "Community & Volunteer",
                children: [
                    { name: "G. Robinson", title: "Sr FSTPM" },
                    { name: "D. Eichhorn", title: "Sr Division Govt Relations Officer" },
                    { name: "M. Sapp", title: "Volunteer Mobilization Director" },
                    { name: "D. Neal", title: "Volunteer Services Business Manager", location: "Atlanta" },
                    { name: "S. Stephens", title: "Sr Business Engagement Manager", location: "Atlanta" },
                    { name: "C. Harris", title: "Regional Program Manager", location: "Atlanta" }
                ]
            }
        ]
    },
    "north-carolina": {
        name: "A. Taylor",
        title: "Regional Executive",
        location: "North Carolina",
        type: "north-carolina",
        children: [
            {
                name: "S. Laub",
                title: "Executive Coordinator"
            },
            {
                name: "E. Davis",
                title: "CDO",
                location: "Charlotte",
                children: [
                    {
                        name: "T. Morrison",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Charlotte",
                        children: [
                            { name: "K. Bennett", title: "Regional Philanthropy Officer", location: "Charlotte" },
                            { name: "D. Collins", title: "Regional Philanthropy Officer", location: "Charlotte" },
                            { name: "R. Hayes", title: "Major Gifts Officer", location: "Charlotte" },
                            { name: "L. Foster", title: "Corporate Partnerships Manager", location: "Charlotte" }
                        ]
                    },
                    {
                        name: "M. Richardson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Raleigh",
                        children: [
                            { name: "S. Parker", title: "Regional Philanthropy Officer", location: "Raleigh" },
                            { name: "J. Edwards", title: "Regional Philanthropy Officer", location: "Durham" },
                            { name: "P. Morris", title: "Regional Philanthropy Officer", location: "Chapel Hill" }
                        ]
                    },
                    {
                        name: "B. Watson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Greensboro",
                        children: [
                            { name: "K. Jenkins", title: "Regional Philanthropy Officer", location: "Greensboro" },
                            { name: "T. Powell", title: "Regional Philanthropy Officer", location: "Winston-Salem" },
                            { name: "M. Rivera", title: "Regional Philanthropy Officer", location: "High Point" }
                        ]
                    },
                    {
                        name: "L. Henderson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Wilmington",
                        children: [
                            { name: "D. Murphy", title: "Regional Philanthropy Officer", location: "Wilmington" },
                            { name: "R. Cooper", title: "Regional Philanthropy Officer", location: "Jacksonville" }
                        ]
                    },
                    {
                        name: "J. Coleman",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Asheville",
                        children: [
                            { name: "S. Bailey", title: "Regional Philanthropy Officer", location: "Asheville" },
                            { name: "K. Reed", title: "Regional Philanthropy Officer", location: "Hickory" }
                        ]
                    }
                ]
            },
            {
                name: "M. Womble",
                title: "COO",
                location: "Greenville",
                children: [
                    {
                        name: "D. Morgan",
                        title: "Executive Director",
                        location: "Charlotte",
                        children: [
                            { name: "L. Price", title: "Operations Manager", location: "Charlotte" },
                            { name: "T. Brooks", title: "Community Services Director", location: "Charlotte" },
                            { name: "R. Sanders", title: "Volunteer Services Manager", location: "Charlotte" }
                        ]
                    },
                    {
                        name: "K. Russell",
                        title: "Executive Director",
                        location: "Raleigh",
                        children: [
                            { name: "M. Perry", title: "Operations Manager", location: "Raleigh" },
                            { name: "S. Long", title: "Program Director", location: "Raleigh" }
                        ]
                    },
                    {
                        name: "P. Barnes",
                        title: "Executive Director",
                        location: "Greensboro",
                        children: [
                            { name: "J. Ross", title: "Operations Manager", location: "Greensboro" },
                            { name: "D. Griffin", title: "Community Programs Manager", location: "Greensboro" }
                        ]
                    },
                    {
                        name: "T. Cox",
                        title: "Executive Director",
                        location: "Wilmington",
                        children: [
                            { name: "R. Ward", title: "Operations Manager", location: "Wilmington" },
                            { name: "K. Howard", title: "Coastal Services Director", location: "Wilmington" }
                        ]
                    },
                    {
                        name: "L. Patterson",
                        title: "Executive Director",
                        location: "Asheville",
                        children: [
                            { name: "M. Fisher", title: "Operations Manager", location: "Asheville" },
                            { name: "S. Gray", title: "Mountain Region Director", location: "Asheville" }
                        ]
                    },
                    {
                        name: "J. Simmons",
                        title: "Executive Director",
                        location: "Greenville",
                        children: [
                            { name: "D. Wallace", title: "Operations Manager", location: "Greenville" },
                            { name: "R. Burns", title: "Eastern NC Program Director", location: "Greenville" }
                        ]
                    },
                    {
                        name: "K. Mason",
                        title: "Regional Blood Services Director",
                        location: "Charlotte",
                        children: [
                            { name: "T. Hunter", title: "Blood Services Manager", location: "Charlotte" },
                            { name: "L. Dixon", title: "Donor Recruitment Manager", location: "Charlotte" },
                            { name: "M. Woods", title: "Mobile Operations Manager", location: "Charlotte" }
                        ]
                    }
                ]
            },
            {
                name: "J. Jarvis",
                title: "RDO",
                children: [
                    {
                        name: "S. Freeman",
                        title: "Regional Disaster Officer",
                        location: "Charlotte",
                        children: [
                            { name: "D. Holmes", title: "Disaster Program Manager", location: "Charlotte" },
                            { name: "R. Wagner", title: "Mass Care Specialist", location: "Charlotte" },
                            { name: "K. Boyd", title: "Shelter Operations Manager", location: "Charlotte" }
                        ]
                    },
                    {
                        name: "T. Marshall",
                        title: "Regional Disaster Officer",
                        location: "Raleigh",
                        children: [
                            { name: "L. Knight", title: "Disaster Response Coordinator", location: "Raleigh" },
                            { name: "M. Pierce", title: "Emergency Services Manager", location: "Raleigh" }
                        ]
                    },
                    {
                        name: "P. Hudson",
                        title: "Coastal Disaster Officer",
                        location: "Wilmington",
                        children: [
                            { name: "J. Stone", title: "Hurricane Response Coordinator", location: "Wilmington" },
                            { name: "D. Meyer", title: "Coastal Emergency Manager", location: "Wilmington" }
                        ]
                    },
                    {
                        name: "K. Chapman",
                        title: "Mountain Region Disaster Officer",
                        location: "Asheville",
                        children: [
                            { name: "R. Elliott", title: "Mountain Emergency Coordinator", location: "Asheville" },
                            { name: "S. Lawson", title: "Winter Response Manager", location: "Asheville" }
                        ]
                    }
                ]
            },
            {
                name: "B. Reynolds",
                title: "Regional Communications Director",
                location: "Charlotte",
                children: [
                    { name: "T. Graham", title: "External Communications Manager", location: "Charlotte" },
                    { name: "M. Fuller", title: "Digital Communications Specialist", location: "Charlotte" },
                    { name: "L. Owens", title: "Internal Communications Coordinator", location: "Charlotte" }
                ]
            },
            {
                name: "D. Porter",
                title: "Regional HR Director",
                location: "Charlotte",
                children: [
                    { name: "K. Wells", title: "HR Business Partner", location: "Charlotte" },
                    { name: "R. Gibson", title: "HR Specialist", location: "Charlotte" },
                    { name: "S. Crawford", title: "Talent Acquisition Manager", location: "Charlotte" }
                ]
            },
            {
                name: "J. Webb",
                title: "Regional IT Director",
                location: "Charlotte",
                children: [
                    { name: "M. Duncan", title: "IT Support Manager", location: "Charlotte" },
                    { name: "T. Stevens", title: "Network Administrator", location: "Charlotte" }
                ]
            }
        ]
    },
    "puerto-rico": {
        name: "L. Rodriguez",
        title: "Regional Executive",
        location: "San Juan",
        type: "puerto-rico",
        children: [
            {
                name: "M. Santiago",
                title: "Chief Development Officer",
                location: "San Juan",
                children: [
                    {
                        name: "A. Martinez",
                        title: "Dir. Major Gifts",
                        location: "San Juan"
                    },
                    {
                        name: "C. Rivera",
                        title: "Dir. Corporate Partnerships",
                        location: "San Juan"
                    }
                ]
            },
            {
                name: "J. Colon",
                title: "Regional Disaster Officer",
                location: "San Juan",
                children: [
                    {
                        name: "R. Hernandez",
                        title: "Emergency Services Manager",
                        location: "San Juan"
                    },
                    {
                        name: "E. Gonzalez",
                        title: "Disaster Response Lead",
                        location: "Ponce"
                    }
                ]
            },
            {
                name: "P. Torres",
                title: "Regional Program Officer",
                location: "San Juan",
                children: [
                    {
                        name: "D. Lopez",
                        title: "Community Services Manager",
                        location: "San Juan"
                    },
                    {
                        name: "N. Ortiz",
                        title: "Service to Armed Forces Lead",
                        location: "San Juan"
                    }
                ]
            }
        ]
    },
    "south-carolina": {
        name: "Susan Everitt",
        title: "Regional Executive",
        location: "South Carolina",
        type: "south-carolina",
        children: [
            {
                name: "L. Ruggles",
                title: "Executive Coordinator"
            },
            {
                name: "S. Ingraham",
                title: "CDO",
                children: [
                    {
                        name: "D. Harrison",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Columbia",
                        children: [
                            { name: "K. Daniels", title: "Regional Philanthropy Officer", location: "Columbia" },
                            { name: "R. Simpson", title: "Regional Philanthropy Officer", location: "Columbia" },
                            { name: "M. Tucker", title: "Major Gifts Officer", location: "Columbia" }
                        ]
                    },
                    {
                        name: "T. Lambert",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Charleston",
                        children: [
                            { name: "L. Hayes", title: "Regional Philanthropy Officer", location: "Charleston" },
                            { name: "J. Palmer", title: "Regional Philanthropy Officer", location: "Mount Pleasant" },
                            { name: "S. Spencer", title: "Coastal Philanthropy Manager", location: "Charleston" }
                        ]
                    },
                    {
                        name: "P. Gardner",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Greenville",
                        children: [
                            { name: "D. Mills", title: "Regional Philanthropy Officer", location: "Greenville" },
                            { name: "K. Nichols", title: "Regional Philanthropy Officer", location: "Spartanburg" },
                            { name: "R. Grant", title: "Regional Philanthropy Officer", location: "Anderson" }
                        ]
                    },
                    {
                        name: "M. Carpenter",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Myrtle Beach",
                        children: [
                            { name: "T. Ford", title: "Regional Philanthropy Officer", location: "Myrtle Beach" },
                            { name: "L. Bishop", title: "Regional Philanthropy Officer", location: "Florence" }
                        ]
                    },
                    {
                        name: "J. Weaver",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Rock Hill",
                        children: [
                            { name: "S. Hunt", title: "Regional Philanthropy Officer", location: "Rock Hill" },
                            { name: "D. Riley", title: "Regional Philanthropy Officer", location: "Lancaster" }
                        ]
                    }
                ]
            },
            {
                name: "M. Hesbach",
                title: "COO",
                children: [
                    {
                        name: "R. Lawrence",
                        title: "Executive Director",
                        location: "Columbia",
                        children: [
                            { name: "K. Franklin", title: "Operations Manager", location: "Columbia" },
                            { name: "T. Butler", title: "Community Services Director", location: "Columbia" },
                            { name: "M. Harper", title: "Volunteer Coordinator", location: "Columbia" }
                        ]
                    },
                    {
                        name: "L. Montgomery",
                        title: "Executive Director",
                        location: "Charleston",
                        children: [
                            { name: "D. Austin", title: "Operations Manager", location: "Charleston" },
                            { name: "S. Hawkins", title: "Lowcountry Services Director", location: "Charleston" }
                        ]
                    },
                    {
                        name: "J. Alexander",
                        title: "Executive Director",
                        location: "Greenville",
                        children: [
                            { name: "P. West", title: "Operations Manager", location: "Greenville" },
                            { name: "K. Jordan", title: "Upstate Program Director", location: "Greenville" }
                        ]
                    },
                    {
                        name: "T. Robertson",
                        title: "Executive Director",
                        location: "Myrtle Beach",
                        children: [
                            { name: "R. Coleman", title: "Operations Manager", location: "Myrtle Beach" },
                            { name: "M. Bryant", title: "Grand Strand Services Director", location: "Myrtle Beach" }
                        ]
                    },
                    {
                        name: "D. Patterson",
                        title: "Executive Director",
                        location: "Rock Hill",
                        children: [
                            { name: "L. Simmons", title: "Operations Manager", location: "Rock Hill" },
                            { name: "S. Washington", title: "Piedmont Services Director", location: "Rock Hill" }
                        ]
                    },
                    {
                        name: "K. Murray",
                        title: "Regional Blood Services Director",
                        location: "Columbia",
                        children: [
                            { name: "J. Fox", title: "Blood Services Manager", location: "Columbia" },
                            { name: "T. Holland", title: "Donor Recruitment Manager", location: "Columbia" },
                            { name: "R. Shaw", title: "Mobile Operations Manager", location: "Columbia" }
                        ]
                    },
                    {
                        name: "M. Ellis",
                        title: "Regional Health & Safety Director",
                        location: "Columbia",
                        children: [
                            { name: "D. Fisher", title: "Training Manager", location: "Columbia" },
                            { name: "L. Burke", title: "Health Services Coordinator", location: "Columbia" },
                            { name: "K. Owens", title: "Safety Education Specialist", location: "Columbia" }
                        ]
                    }
                ]
            },
            {
                name: "T. Reid",
                title: "RDO",
                children: [
                    {
                        name: "P. Armstrong",
                        title: "Regional Disaster Officer",
                        location: "Columbia",
                        children: [
                            { name: "J. Cunningham", title: "Disaster Program Manager", location: "Columbia" },
                            { name: "S. Meyer", title: "Mass Care Specialist", location: "Columbia" },
                            { name: "D. Walsh", title: "Shelter Manager", location: "Columbia" }
                        ]
                    },
                    {
                        name: "K. Hansen",
                        title: "Coastal Disaster Officer",
                        location: "Charleston",
                        children: [
                            { name: "R. Stewart", title: "Hurricane Response Coordinator", location: "Charleston" },
                            { name: "M. Bennett", title: "Emergency Operations Manager", location: "Charleston" }
                        ]
                    }
                ]
            }
        ]
    },
    "tennessee": {
        name: "J. Sullivan",
        title: "Regional Executive",
        location: "Nashville",
        type: "tennessee",
        children: [
            {
                name: "K. Mostoller",
                title: "Executive Assistant",
                location: "Nashville"
            },
            {
                name: "L. Vaughn",
                title: "CDO",
                location: "Memphis",
                children: [
                    {
                        name: "L. Elliott",
                        title: "Dev Director",
                        location: "Nashville",
                        children: [
                            { name: "G. Haining", title: "RPO – Individual", location: "Nashville" },
                            { name: "M. Van der Voort", title: "RPO - Foundation", location: "Nashville" }
                        ]
                    },
                    {
                        name: "P. Miller",
                        title: "Sr. RPO",
                        location: "East TN"
                    },
                    {
                        name: "S. Alexander",
                        title: "RPO",
                        location: "Memphis"
                    },
                    { name: "T. McGuire-Davis", title: "Grants Coordinator", location: "Memphis" },
                    { name: "A. Greene", title: "Events Coordinator", location: "Nashville" },
                    { name: "H. Pipes", title: "Dev Specialist", location: "Nashville" },
                    { name: "K. Sandlin", title: "Dev Specialist", location: "Nashville" }
                ]
            },
            {
                name: "G. King",
                title: "RCOO",
                location: "Chattanooga",
                children: [
                    {
                        name: "S. Hudson",
                        title: "Sr. Executive Director",
                        location: "Nashville",
                        children: [
                            { name: "C. Bow", title: "Field Operations (.5)", location: "Nashville" }
                        ]
                    },
                    {
                        name: "J. Mitchell",
                        title: "Executive Director",
                        location: "Murfreesboro",
                        children: [
                            { name: "L. Neese", title: "Field Operations (.5)", location: "Murfreesboro" },
                            { name: "N. Festervand", title: "VS Specialist (05)", location: "Murfreesboro" }
                        ]
                    },
                    {
                        name: "J. Wright",
                        title: "Executive Director",
                        location: "Chattanooga",
                        children: [
                            { name: "M. Devlin", title: "Field Operations (.5)", location: "Chattanooga" },
                            { name: "C. McDonald", title: "VS Specialist", location: "Chattanooga" }
                        ]
                    },
                    {
                        name: "D. Day",
                        title: "Executive Director",
                        location: "Kingsport",
                        children: [
                            { name: "A. Morris", title: "Sr. VS Specialist", location: "Kingsport" }
                        ]
                    },
                    {
                        name: "D. Hicks",
                        title: "Executive Director",
                        location: "Jackson",
                        children: [
                            { name: "L. Hatchett", title: "VS Specialist (05)", location: "Jackson" },
                            { name: "C. Morman", title: "CAP Manager", location: "Jackson" },
                            { name: "B. Houston", title: "CAP Coordinator", location: "Jackson" },
                            { name: "L. Peoples", title: "CAP Coordinator", location: "Jackson" }
                        ]
                    },
                    {
                        name: "S. Breazeale",
                        title: "Executive Director",
                        location: "Memphis"
                    },
                    {
                        name: "S. Hudson",
                        title: "Executive Director",
                        location: "Knoxville",
                        children: [
                            { name: "K. Radabaugh", title: "Field Operations (.5)", location: "Knoxville" }
                        ]
                    },
                    {
                        name: "S. Williams",
                        title: "Field Operations",
                        location: "Memphis"
                    }
                ]
            },
            {
                name: "C. Robins",
                title: "RDO",
                location: "Nashville",
                children: [
                    {
                        name: "J. Bailley",
                        title: "Deputy RDO",
                        location: "Memphis"
                    },
                    {
                        name: "K. Rice",
                        title: "Reg P&SA Manager",
                        location: "Knoxville"
                    },
                    {
                        name: "K. Rubens",
                        title: "Client Care Manager",
                        location: "Nashville"
                    },
                    {
                        name: "J. Cifre",
                        title: "Mass Care Mgr",
                        location: "Memphis"
                    },
                    {
                        name: "R. Teems",
                        title: "Reg DWE Manager",
                        location: "Chattanooga",
                        children: [
                            { name: "W. Doyle", title: "DWE Specialist", location: "Memphis" }
                        ]
                    },
                    {
                        name: "B. Rhodes",
                        title: "Senior CDPM",
                        location: "Jackson"
                    },
                    {
                        name: "L. Sloan",
                        title: "CDPM",
                        location: "Memphis",
                        children: [
                            { name: "K. Powers", title: "CDPS", location: "Memphis" },
                            { name: "D. Hooper", title: "CDPS", location: "Memphis" },
                            { name: "L. Brown", title: "CDPS", location: "Memphis" }
                        ]
                    },
                    {
                        name: "J. Lovendusky",
                        title: "CDPM",
                        location: "Clarksville"
                    },
                    {
                        name: "J. Taylor",
                        title: "CDPM",
                        location: "Murfreesboro",
                        children: [
                            { name: "K. Powers", title: "CDPS", location: "Murfreesboro" }
                        ]
                    },
                    {
                        name: "C. Filip",
                        title: "CDPM",
                        location: "Kingsport",
                        children: [
                            { name: "L. Nelson", title: "CDPS", location: "Kingsport" }
                        ]
                    },
                    {
                        name: "K. Lipski",
                        title: "CDPM",
                        location: "Chattanooga",
                        children: [
                            { name: "L. Edwards", title: "CDPS", location: "Chattanooga" }
                        ]
                    },
                    {
                        name: "L. Edwards",
                        title: "CDPM",
                        location: "Knoxville",
                        children: [
                            { name: "R. Wardell", title: "CDPS", location: "Knoxville" }
                        ]
                    },
                    {
                        name: "H. Pipes",
                        title: "CDPM",
                        location: "Nashville",
                        children: [
                            { name: "L. Brocklehurst", title: "CDPS", location: "Nashville" },
                            { name: "P. Zulandt", title: "CDPS", location: "Nashville" }
                        ]
                    }
                ]
            },
            {
                name: "J. Williams",
                title: "Dir Comm /Mkt",
                location: "Nashville",
                children: [
                    { name: "R. Wardell", title: "Comm Manager", location: "Nashville" }
                ]
            },
            {
                name: "F. Clouse",
                title: "RVSO",
                location: "Nashville",
                children: [
                    { name: "N. Pace", title: "Sr. VS Specialist", location: "Nashville" },
                    { name: "A. Pradhan", title: "Sr. VS Specialist", location: "Memphis" },
                    { name: "A. Connors", title: "VS Specialist", location: "Clarksville" },
                    { name: "J. Peer", title: "VS Specialist", location: "Knoxville" }
                ]
            },
            {
                name: "A. Ware",
                title: "SAF Director",
                location: "Nashville",
                children: [
                    { name: "B. Bergeson", title: "SAF Specialist", location: "Knoxville" }
                ]
            },
            {
                name: "Facilities Team",
                title: "Facilities",
                children: [
                    { name: "B. Hall", title: "Facilities Administrator", location: "Nashville" },
                    { name: "B. Mathis", title: "General Maintenance", location: "Nashville" },
                    { name: "J. Huff", title: "Fleet Coordinator", location: "Nashville" }
                ]
            }
        ]
    }
};

// Make available globally if in browser
if (typeof window !== 'undefined') {
    window.completeOrgData = completeOrgData;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = completeOrgData;
}