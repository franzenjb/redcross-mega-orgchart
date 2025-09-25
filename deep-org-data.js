// Complete deep organizational data for SE & Caribbean Division
const deepOrgData = {
    puertorico: {
        name: "L. Rodriguez",
        title: "Regional Executive",
        location: "San Juan",
        type: "puertorico",
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
    georgia: {
        name: "Alicia Doherty",
        title: "Regional Chief Executive",
        location: "Atlanta",
        type: "georgia",
        children: [
            {
                name: "Adelaide Kirk",
                title: "Regional Disaster Officer",
                location: "Columbus",
                type: "georgia",
                children: [
                    {
                        name: "Jeremy McLendon",
                        title: "Deputy Regional Disaster Officer",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "C. Williams", title: "Sr Community Disaster Program Manager", location: "Atlanta", type: "georgia" },
                            { name: "M. Morrison", title: "Sr Community Disaster Program Manager", location: "SW GA", type: "georgia" },
                            { name: "Vacant", title: "Sr Community Disaster Program Manager", type: "vacant" }
                        ]
                    },
                    {
                        name: "Kelly Crane",
                        title: "Sr Community Disaster Program Manager",
                        type: "georgia",
                        children: [
                            { name: "R. Oaks", title: "Community Disaster Program Manager", location: "Atlanta", type: "georgia" },
                            { name: "M. Ruff", title: "Sr Disaster Recovery Manager", location: "Atlanta", type: "georgia" },
                            { name: "K. Grant", title: "Case Supervisor", location: "Atlanta", type: "georgia" }
                        ]
                    },
                    {
                        name: "T. Norbut",
                        title: "Regional Mass Care Manager",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "M. Coates", title: "Sr Logistics Specialist", location: "Atlanta", type: "georgia" },
                            { name: "D. Boatwright", title: "Disaster Services Technician", location: "Atlanta", type: "georgia" }
                        ]
                    },
                    { name: "Vacant", title: "Disaster Action Team Manager", location: "Atlanta", type: "vacant" }
                ]
            },
            {
                name: "Carla Dillard Homer",
                title: "RCOO Atlanta",
                type: "georgia",
                children: [
                    { name: "R. Williams", title: "Ex Dir", location: "Fulton", type: "georgia" },
                    { name: "D. Maull", title: "Ex Dir", location: "Douglas", type: "georgia" },
                    { name: "V. Woodward", title: "Ex Dir", location: "East Point", type: "georgia" },
                    { name: "Vacant", title: "Ex Dir", location: "Jonesboro", type: "vacant" },
                    { name: "Y. Treadwell", title: "Ex Dir", location: "Central/Mid GA", type: "georgia" },
                    { name: "Vacant", title: "Ex Dir", location: "Coastal GA", type: "vacant" },
                    { name: "L. Little", title: "Ex Dir", location: "SW GA", type: "georgia" }
                ]
            },
            {
                name: "L. Holland",
                title: "RCOO Central GA",
                type: "georgia",
                children: [
                    { name: "Vacant", title: "Ex Dir", location: "Columbus", type: "vacant" },
                    { name: "M. Benford", title: "BBS Program Manager", location: "Columbus", type: "georgia" },
                    { name: "C. Bowser", title: "VS Coordinator", location: "Columbus", type: "georgia" },
                    { name: "Vacant", title: "Ex Dir", location: "Macon", type: "vacant" }
                ]
            },
            {
                name: "P. Foster",
                title: "DRHRM",
                location: "Atlanta",
                type: "georgia",
                children: [
                    { name: "J. Myers", title: "HR Business Partner", location: "Atlanta", type: "georgia" },
                    { name: "C. Davis", title: "Regional HR Business Partner", location: "Atlanta", type: "georgia" },
                    { name: "Vacant", title: "HR Coordinator", location: "Atlanta", type: "vacant" }
                ]
            },
            {
                name: "Regional Development (under D. Dixon - Division)",
                title: "Development Teams",
                type: "georgia",
                children: [
                    {
                        name: "K. Hobbs",
                        title: "RPO",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "C. Barron", title: "Account Executive", location: "Atlanta", type: "georgia" }
                        ]
                    },
                    {
                        name: "C. Bingham",
                        title: "RPO",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "Vacant", title: "Account Executive", location: "Atlanta", type: "vacant" }
                        ]
                    },
                    {
                        name: "T. Frazier",
                        title: "RPO",
                        location: "East Point",
                        type: "georgia",
                        children: [
                            { name: "Vacant", title: "Account Executive", location: "East Point", type: "vacant" }
                        ]
                    },
                    {
                        name: "S. Hogan",
                        title: "RPO",
                        location: "Douglasville",
                        type: "georgia",
                        children: [
                            { name: "B. Myers", title: "Account Executive", location: "Douglasville", type: "georgia" }
                        ]
                    },
                    {
                        name: "P. Sewell-Briscoe",
                        title: "RPO",
                        location: "Macon",
                        type: "georgia",
                        children: [
                            { name: "J. Johnson", title: "Account Executive", location: "Macon", type: "georgia" }
                        ]
                    },
                    {
                        name: "M. Hartley",
                        title: "RPO",
                        location: "Savannah",
                        type: "georgia",
                        children: [
                            { name: "Vacant", title: "Account Executive", location: "Savannah", type: "vacant" }
                        ]
                    }
                ]
            },
            {
                name: "Blood Services",
                title: "Blood Services Division",
                type: "georgia",
                children: [
                    {
                        name: "N. Mitchell",
                        title: "Dir Hospital Partnership",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "P. Flint", title: "BS Supervisor", location: "Atlanta", type: "georgia" }
                        ]
                    },
                    {
                        name: "K. Davis",
                        title: "Dir Blood Mobile Operations",
                        location: "Atlanta",
                        type: "georgia"
                    },
                    {
                        name: "C. Thomas",
                        title: "Sr Dir Donor Recruitment",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "M. Mondecar", title: "Donor Recruitment Manager", location: "Atlanta", type: "georgia" }
                        ]
                    }
                ]
            },
            {
                name: "SAF Teams (under K. Gonzalez - Division)",
                title: "Service to Armed Forces",
                type: "georgia",
                children: [
                    {
                        name: "Victoria Hamrick",
                        title: "SAF Director",
                        location: "Atlanta",
                        type: "georgia",
                        children: [
                            { name: "J. Harris", title: "SAF Station Manager", location: "Atlanta Airport", type: "georgia" },
                            { name: "N. Clay", title: "Sr. SAF Specialist", location: "Atlanta North", type: "georgia" },
                            { name: "L. Elmore", title: "Sr. SAF Specialist", location: "Atlanta South", type: "georgia" },
                            { name: "A. Thornburg", title: "Sr. SAF Specialist", location: "Marietta", type: "georgia" }
                        ]
                    },
                    {
                        name: "Jill Deskins",
                        title: "Sr. Volunteer Services Specialist",
                        location: "Columbus",
                        type: "georgia",
                        children: [
                            { name: "J. Haire", title: "SAF Program Manager", location: "Columbus", type: "georgia" },
                            { name: "C. Jeter", title: "SAF Manager", location: "Columbus", type: "georgia" },
                            { name: "Vacant", title: "SAF CDCC", location: "Columbus", type: "vacant" }
                        ]
                    },
                    {
                        name: "M. Smith",
                        title: "SAF Program Manager",
                        location: "Ft Gordon",
                        type: "georgia",
                        children: [
                            { name: "C. Shubrick", title: "SAF Manager", location: "Ft Gordon", type: "georgia" },
                            { name: "Vacant", title: "SAF Specialist", location: "Ft Gordon", type: "vacant" }
                        ]
                    },
                    {
                        name: "T. Perry",
                        title: "SAF Program Manager",
                        location: "Robins AFB",
                        type: "georgia",
                        children: [
                            { name: "A. Gibson", title: "SAF Manager", location: "Robins AFB", type: "georgia" },
                            { name: "C. Black", title: "SAF Coordinator", location: "Robins AFB", type: "georgia" },
                            { name: "Vacant", title: "SAF Coordinator", location: "Robins AFB", type: "vacant" }
                        ]
                    }
                ]
            },
            {
                name: "Communications (under S. Taylor - Division)",
                title: "Communications",
                type: "georgia",
                children: [
                    { name: "J. Copeland", title: "Regional External Comms Manager", location: "Atlanta", type: "georgia" },
                    { name: "Vacant", title: "Regional Comms Manager", location: "Atlanta", type: "vacant" },
                    { name: "L. Brown", title: "Regional External Comms Director", location: "Atlanta", type: "georgia" },
                    { name: "J. Brown", title: "Internal Comms Manager", location: "Atlanta", type: "georgia" }
                ]
            },
            {
                name: "Community Engagement (under C. Edwards - Division)",
                title: "Community & Volunteer",
                type: "georgia",
                children: [
                    { name: "G. Robinson", title: "Sr FSTPM", type: "georgia" },
                    { name: "D. Eichhorn", title: "Sr Division Govt Relations Officer", type: "georgia" },
                    { name: "M. Sapp", title: "Volunteer Mobilization Director", type: "georgia" },
                    { name: "D. Neal", title: "Volunteer Services Business Manager", location: "Atlanta", type: "georgia" },
                    { name: "S. Stephens", title: "Sr Business Engagement Manager", location: "Atlanta", type: "georgia" },
                    { name: "C. Harris", title: "Regional Program Manager", location: "Atlanta", type: "georgia" }
                ]
            }
        ]
    },
    ncflorida: {
        name: "C. Smith",
        title: "Regional Executive",
        location: "Jacksonville",
        type: "ncflorida",
        children: [
            {
                name: "K. Jones",
                title: "Executive Assistant",
                location: "Jacksonville",
                type: "ncflorida"
            },
            {
                name: "W. Carney",
                title: "Chief Dev. Officer",
                location: "Jacksonville",
                type: "ncflorida",
                children: [
                    {
                        name: "A. Kennedy",
                        title: "Sr. RPO",
                        location: "Orlando",
                        type: "ncflorida",
                        children: [
                            { name: "M. Pharazyn", title: "RPO", location: "Orlando", type: "ncflorida" }
                        ]
                    },
                    {
                        name: "R. Resler",
                        title: "Sr. RPO",
                        location: "Tampa",
                        type: "ncflorida",
                        children: [
                            { name: "C. Marasco", title: "RPO", location: "Tampa", type: "ncflorida" },
                            { name: "Z. Thomas", title: "RPO", location: "Jacksonville", type: "ncflorida" }
                        ]
                    },
                    { name: "H. Marchbanks", title: "RPO", location: "Tallahassee", type: "ncflorida" },
                    { name: "D. Roman", title: "Dev Ops Coordinator", type: "ncflorida" }
                ]
            },
            {
                name: "S. Rosario",
                title: "Regional Chief Operating Officer",
                location: "Tampa",
                type: "ncflorida",
                children: [
                    {
                        name: "J. Moran",
                        title: "Executive Director",
                        location: "Orlando",
                        type: "ncflorida",
                        children: [
                            { name: "D. Lindo", title: "Comm Spec III", location: "Orlando", type: "ncflorida" },
                            { name: "J. Judkins", title: "Coordinator", location: "Orlando", type: "ncflorida" }
                        ]
                    },
                    {
                        name: "M. Brown",
                        title: "Executive Director",
                        location: "Tampa Bay",
                        type: "ncflorida",
                        children: [
                            { name: "C. Montoya", title: "Sr. Specialist", location: "Tampa", type: "ncflorida" }
                        ]
                    },
                    {
                        name: "T. Jenkins",
                        title: "Executive Director",
                        location: "Pensacola",
                        type: "ncflorida",
                        children: [
                            { name: "D. Streeter", title: "Rep III", location: "Pensacola", type: "ncflorida" },
                            { name: "Vacant", title: "Coordinator", location: "Pensacola", type: "vacant" }
                        ]
                    },
                    {
                        name: "S. Carraway",
                        title: "Executive Director",
                        location: "Tallahassee",
                        type: "ncflorida",
                        children: [
                            { name: "S. Francois", title: "Coordinator", location: "Tallahassee", type: "ncflorida" },
                            { name: "V. Williams", title: "Sr. Specialist", location: "Tallahassee", type: "ncflorida" }
                        ]
                    },
                    { name: "Vacant", title: "Executive Director", location: "Gainesville", type: "vacant" },
                    { name: "Vacant", title: "Executive Director", location: "Jacksonville", type: "vacant" }
                ]
            },
            {
                name: "J. Walker",
                title: "RVSO",
                location: "Jacksonville",
                type: "ncflorida",
                children: [
                    { name: "S. Williams", title: "Specialist", location: "Jacksonville", type: "ncflorida" },
                    { name: "C. Funkhouser", title: "Specialist", location: "Tampa", type: "ncflorida" },
                    { name: "A. Lin", title: "Rep II", location: "Orlando/Daytona", type: "ncflorida" },
                    { name: "M. Gallagher", title: "Rep III", location: "Tampa", type: "ncflorida" },
                    { name: "Vacant", title: "Rep III", location: "Jacksonville/G'ville", type: "vacant" },
                    { name: "H. Anderson", title: "Rep II", location: "Jacksonville", type: "ncflorida" }
                ]
            },
            {
                name: "K. Watt",
                title: "RDO (interim)",
                type: "ncflorida",
                children: [
                    {
                        name: "M. Holland",
                        title: "Deputy RDO",
                        type: "ncflorida"
                    },
                    {
                        name: "D. McNair",
                        title: "Reg DWE Manager",
                        type: "ncflorida",
                        children: [
                            { name: "A. Young", title: "Reg DWE Specialist", type: "ncflorida" }
                        ]
                    },
                    {
                        name: "M. Donahue",
                        title: "Regional Mass Care Manager",
                        type: "ncflorida"
                    },
                    {
                        name: "J. Clairday",
                        title: "Planning & Situational Awareness Manager",
                        type: "ncflorida"
                    },
                    {
                        name: "Z. Pettis",
                        title: "Regional Client Care Manager",
                        location: "Tampa",
                        type: "ncflorida"
                    },
                    {
                        name: "A. Cullison",
                        title: "DAT Manager",
                        type: "ncflorida"
                    },
                    {
                        name: "M. Boyd",
                        title: "Sr. CDPM 1-4",
                        type: "ncflorida",
                        children: [
                            {
                                name: "A. Cornett",
                                title: "CDPM",
                                location: "Pensacola",
                                type: "ncflorida",
                                children: [
                                    { name: "Vacant", title: "CDPS", location: "Pensacola", type: "vacant" }
                                ]
                            },
                            {
                                name: "K. Bland",
                                title: "CDPM",
                                location: "Tallahassee",
                                type: "ncflorida",
                                children: [
                                    { name: "R. Barkley", title: "CDPS", location: "Tallahassee", type: "ncflorida" }
                                ]
                            },
                            {
                                name: "A. Martain",
                                title: "CDPM",
                                location: "Gainesville",
                                type: "ncflorida",
                                children: [
                                    { name: "Vacant", title: "CDPS", location: "Gainesville", type: "vacant" }
                                ]
                            },
                            {
                                name: "D. Gee",
                                title: "CDPM",
                                location: "Jacksonville",
                                type: "ncflorida"
                            },
                            {
                                name: "M. Giannini",
                                title: "CDPM",
                                location: "Jacksonville",
                                type: "ncflorida",
                                children: [
                                    { name: "Vacant", title: "CDPS", location: "Jacksonville", type: "vacant" },
                                    { name: "Vacant", title: "CDPS", location: "St. Augustine", type: "vacant" }
                                ]
                            },
                            { name: "Vacant", title: "CDPM", location: "Gainesville", type: "vacant" }
                        ]
                    },
                    {
                        name: "J. Latalladi",
                        title: "Sr. CDPM 5-6",
                        type: "ncflorida",
                        children: [
                            {
                                name: "S. Thompson",
                                title: "CDPM",
                                location: "Orlando",
                                type: "ncflorida"
                            },
                            {
                                name: "K. Abel",
                                title: "CDPM",
                                location: "Orlando",
                                type: "ncflorida",
                                children: [
                                    { name: "Vacant", title: "CDPS", location: "Orlando", type: "vacant" },
                                    { name: "R. McGuire", title: "CDPS", location: "Orlando", type: "ncflorida" }
                                ]
                            },
                            {
                                name: "X. Reeves",
                                title: "CDPM",
                                location: "Tampa",
                                type: "ncflorida",
                                children: [
                                    { name: "A. Quinones", title: "CDPS", location: "Tampa", type: "ncflorida" }
                                ]
                            },
                            {
                                name: "S. Poreda",
                                title: "CDPM",
                                location: "Tampa",
                                type: "ncflorida",
                                children: [
                                    { name: "Vacant", title: "CDPS", location: "Tampa", type: "vacant" }
                                ]
                            }
                        ]
                    },
                    {
                        name: "T. Beazer",
                        title: "Sr. CDPM",
                        location: "USVI",
                        type: "ncflorida",
                        children: [
                            { name: "Vacant", title: "CDPM", location: "USVI", type: "vacant" },
                            { name: "S. Hensley", title: "CDPM", location: "USVI", type: "ncflorida" }
                        ]
                    }
                ]
            },
            {
                name: "SAF/Program Teams",
                title: "Service to Armed Forces",
                type: "ncflorida",
                children: [
                    {
                        name: "G. Scrivens",
                        title: "Service to Armed Forces/Program Director",
                        location: "Tampa",
                        type: "ncflorida",
                        children: [
                            { name: "A. Bolton", title: "SAF Manager", location: "Orlando", type: "ncflorida" },
                            { name: "L. Tissicino", title: "Prog. Manager", location: "Jacksonville", type: "ncflorida" },
                            { name: "L. Simms", title: "Mobile Program Manager", type: "ncflorida" },
                            { name: "M. Chavarria", title: "Mobile SAF Spec", location: "Tampa", type: "ncflorida" },
                            { name: "S. Youngren", title: "SAF Specialist", location: "Pensacola", type: "ncflorida" },
                            { name: "D. McMillian", title: "Sr. Specialist", location: "Tallahassee", type: "ncflorida" },
                            { name: "Vacant", title: "Sr. Specialist", location: "Daytona/Orlando", type: "vacant" },
                            { name: "L. Pendergrass", title: "Coordinator", location: "Daytona", type: "ncflorida" }
                        ]
                    }
                ]
            },
            {
                name: "Communications",
                title: "Regional Communications",
                type: "ncflorida",
                children: [
                    { name: "A. Bierfreund", title: "Comm Director", location: "Jacksonville", type: "ncflorida" },
                    { name: "R. Nelson", title: "Comm Spec. III", type: "ncflorida" },
                    { name: "M. Smith", title: "Rep II", location: "USVI", type: "ncflorida" }
                ]
            }
        ]
    },
    sflorida: {
        name: "Krista Coletti",
        title: "Regional Executive",
        location: "Miami",
        type: "sflorida",
        children: [
            {
                name: "Rosemarie Critchfield",
                title: "Executive Assistant",
                location: "Miami",
                type: "sflorida"
            },
            {
                name: "Tzaicel Hernandez",
                title: "RCDO",
                location: "Miami",
                type: "sflorida",
                children: [
                    {
                        name: "Ellen Vaughan",
                        title: "Director of Dev.",
                        location: "Palm Beach",
                        type: "sflorida",
                        children: [
                            { name: "Greg Goodman", title: "RPO-Individual", location: "Palm Beach", type: "sflorida" },
                            { name: "Amy McKie-Billing", title: "RPO-Individual", location: "Palm Beach", type: "sflorida" },
                            { name: "Holly Carotenuto", title: "RPO-Foundations", location: "Palm Beach", type: "sflorida" },
                            { name: "Melissa Mullen", title: "Dev. Specialist (.5)", location: "Palm Beach", type: "sflorida" }
                        ]
                    },
                    { name: "Kevin Moran", title: "RPO-Corporate", location: "Miami", type: "sflorida" },
                    { name: "Meredith da Silva", title: "RPO-Events", location: "Broward", type: "sflorida" },
                    { name: "RonDeena Ross", title: "RPO-Individual", location: "Naples", type: "sflorida" },
                    { name: "Keith Wayne", title: "Grants Coordinator", location: "Miami", type: "sflorida" },
                    { name: "Jeanette Agranoff", title: "Dev. Specialist", location: "Broward", type: "sflorida" },
                    { name: "Heidi Knippel", title: "Sr. Engagement Spc", location: "Broward", type: "sflorida" },
                    { name: "John Cain", title: "Engagement Spc", location: "SW Gulf Coast", type: "sflorida" },
                    { name: "Laura Patrick", title: "Engagement Spc", location: "Winter Haven", type: "sflorida" },
                    { name: "Vacant", title: "Engagement Rep", type: "vacant" }
                ]
            },
            {
                name: "Julie Unwin",
                title: "RCOO",
                location: "Palm Beach",
                type: "sflorida",
                children: [
                    {
                        name: "Traci Mitchell",
                        title: "Executive Director",
                        location: "Palm Beach",
                        type: "sflorida"
                    },
                    {
                        name: "Paula Prendergast",
                        title: "Executive Director",
                        location: "Broward",
                        type: "sflorida"
                    },
                    {
                        name: "Debbie Koch",
                        title: "Executive Director",
                        location: "Miami",
                        type: "sflorida"
                    },
                    {
                        name: "Khris Anderson",
                        title: "Executive Director",
                        location: "SWGCG, Interim",
                        type: "sflorida"
                    },
                    {
                        name: "Tina Sweeten",
                        title: "Executive Director",
                        location: "Winter Haven",
                        type: "sflorida"
                    }
                ]
            },
            {
                name: "Monica Rusconi",
                title: "RDO",
                location: "Miami",
                type: "sflorida",
                children: [
                    {
                        name: "Gary Pelletier",
                        title: "Dep. RDO",
                        location: "Vero Beach",
                        type: "sflorida"
                    },
                    {
                        name: "Rok Anderson",
                        title: "Reg Mass Care Mgr",
                        location: "Broward",
                        type: "sflorida"
                    },
                    {
                        name: "Lizzette Romano",
                        title: "Reg Client Care Mgr",
                        location: "Palm Beach",
                        type: "sflorida"
                    },
                    {
                        name: "Jim Hagen",
                        title: "Reg. DAT Mgr",
                        location: "Vero Beach",
                        type: "sflorida"
                    },
                    {
                        name: "Antonio Camejo",
                        title: "Mgr DWE",
                        location: "Miami",
                        type: "sflorida",
                        children: [
                            { name: "Marie Blum", title: "DWE Specialist", location: "Sarasota", type: "sflorida" }
                        ]
                    },
                    {
                        name: "Kathleen Ward",
                        title: "Reg Planning & Awareness Mgr.",
                        type: "sflorida"
                    },
                    {
                        name: "Zack Stokes",
                        title: "Sr. CDPM",
                        location: "Broward",
                        type: "sflorida",
                        children: [
                            { name: "Nickolyn Crosby", title: "CDPM", location: "Broward", type: "sflorida" },
                            { name: "Steven Ortega", title: "CDPS", location: "Broward", type: "sflorida" }
                        ]
                    },
                    {
                        name: "Katia Foust",
                        title: "CDPM",
                        location: "Miami",
                        type: "sflorida",
                        children: [
                            { name: "Enrique Rivero", title: "CDPS", location: "Miami", type: "sflorida" }
                        ]
                    },
                    {
                        name: "Johan Reyes",
                        title: "CDPM",
                        location: "Palm Beach",
                        type: "sflorida",
                        children: [
                            { name: "Josh Jean", title: "CDPS", location: "Palm Beach", type: "sflorida" }
                        ]
                    },
                    {
                        name: "Matthew Sarlouis",
                        title: "CDPM",
                        location: "Ft. Myers",
                        type: "sflorida",
                        children: [
                            { name: "Nancy Gerwe", title: "CDPS", location: "Sarasota", type: "sflorida" }
                        ]
                    },
                    {
                        name: "Vacant",
                        title: "CDPM",
                        location: "Winter Haven",
                        type: "vacant",
                        children: [
                            { name: "Alex Glen", title: "CDPS", location: "Winter Haven", type: "sflorida" }
                        ]
                    }
                ]
            },
            {
                name: "Ivan Sterpin",
                title: "SAF/IS Director",
                location: "Miami",
                type: "sflorida",
                children: [
                    { name: "Rosimar Freitas", title: "SAF/IS Specialist", location: "Miami", type: "sflorida" }
                ]
            },
            {
                name: "Rudy Chavez",
                title: "RVSO",
                location: "Winter Haven",
                type: "sflorida",
                children: [
                    { name: "Marta Oppenheimer", title: "Sr. Recruitment Spc", location: "Miami", type: "sflorida" },
                    { name: "Colleen Raniere", title: "Sr. Recruitment Spc", location: "Palm Beach", type: "sflorida" }
                ]
            },
            {
                name: "Tiffany Gonzalez",
                title: "Dir Comm",
                location: "Miami",
                type: "sflorida",
                children: [
                    { name: "Dariana Molina", title: "Reg Comm Mgr", location: "Palm Beach", type: "sflorida" },
                    { name: "Stephanie Wesseling", title: "Reg Comm Mgr", location: "Miami", type: "sflorida" }
                ]
            },
            {
                name: "Business Operations",
                title: "Bus Ops Team",
                type: "sflorida",
                children: [
                    { name: "Ruben Ebanks", title: "Bus Ops Specialist", location: "Miami", type: "sflorida" },
                    { name: "Margarita Henao", title: "Bus Ops Specialist (.5)", location: "Miami", type: "sflorida" },
                    { name: "Rene Romano", title: "Bus Ops Specialist (.5)", location: "Palm Beach", type: "sflorida" },
                    { name: "Romaine Davis", title: "Bus Ops Specialist (.5)", location: "Ft. Myers", type: "sflorida" },
                    { name: "E. Cordero-Richardson", title: "Bus Ops Specialist", location: "Winter Haven", type: "sflorida" }
                ]
            }
        ]
    },
    tennessee: {
        name: "J. Sullivan",
        title: "Regional Executive",
        location: "Nashville",
        type: "tennessee",
        children: [
            {
                name: "K. Mostoller",
                title: "Executive Assistant",
                location: "Nashville",
                type: "tennessee"
            },
            {
                name: "L. Vaughn",
                title: "CDO",
                location: "Memphis",
                type: "tennessee",
                children: [
                    {
                        name: "L. Elliott",
                        title: "Dev Director",
                        location: "Nashville",
                        type: "tennessee",
                        children: [
                            { name: "G. Haining", title: "RPO – Individual", location: "Nashville", type: "tennessee" },
                            { name: "M. Van der Voort", title: "RPO - Foundation", location: "Nashville", type: "tennessee" }
                        ]
                    },
                    {
                        name: "P. Miller",
                        title: "Sr. RPO",
                        location: "East TN",
                        type: "tennessee"
                    },
                    {
                        name: "S. Alexander",
                        title: "RPO",
                        location: "Memphis",
                        type: "tennessee"
                    },
                    { name: "T. McGuire-Davis", title: "Grants Coordinator", location: "Memphis", type: "tennessee" },
                    { name: "A. Greene", title: "Events Coordinator", location: "Nashville", type: "tennessee" },
                    { name: "H. Pipes", title: "Dev Specialist", location: "Nashville", type: "tennessee" },
                    { name: "K. Sandlin", title: "Dev Specialist", location: "Nashville", type: "tennessee" }
                ]
            },
            {
                name: "G. King",
                title: "RCOO",
                location: "Chattanooga",
                type: "tennessee",
                children: [
                    {
                        name: "S. Hudson",
                        title: "Sr. Executive Director",
                        location: "Nashville",
                        type: "tennessee",
                        children: [
                            { name: "C. Bow", title: "Field Operations (.5)", location: "Nashville", type: "tennessee" }
                        ]
                    },
                    {
                        name: "J. Mitchell",
                        title: "Executive Director",
                        location: "Murfreesboro",
                        type: "tennessee",
                        children: [
                            { name: "L. Neese", title: "Field Operations (.5)", location: "Murfreesboro", type: "tennessee" },
                            { name: "N. Festervand", title: "VS Specialist (05)", location: "Murfreesboro", type: "tennessee" }
                        ]
                    },
                    {
                        name: "J. Wright",
                        title: "Executive Director",
                        location: "Chattanooga",
                        type: "tennessee",
                        children: [
                            { name: "M. Devlin", title: "Field Operations (.5)", location: "Chattanooga", type: "tennessee" },
                            { name: "C. McDonald", title: "VS Specialist", location: "Chattanooga", type: "tennessee" }
                        ]
                    },
                    {
                        name: "Vacant",
                        title: "Executive Director",
                        location: "Clarksville",
                        type: "vacant"
                    },
                    {
                        name: "D. Day",
                        title: "Executive Director",
                        location: "Kingsport",
                        type: "tennessee",
                        children: [
                            { name: "A. Morris", title: "Sr. VS Specialist", location: "Kingsport", type: "tennessee" }
                        ]
                    },
                    {
                        name: "D. Hicks",
                        title: "Executive Director",
                        location: "Jackson",
                        type: "tennessee",
                        children: [
                            { name: "L. Hatchett", title: "VS Specialist (05)", location: "Jackson", type: "tennessee" },
                            { name: "C. Morman", title: "CAP Manager", location: "Jackson", type: "tennessee" },
                            { name: "B. Houston", title: "CAP Coordinator", location: "Jackson", type: "tennessee" },
                            { name: "L. Peoples", title: "CAP Coordinator", location: "Jackson", type: "tennessee" }
                        ]
                    },
                    {
                        name: "S. Breazeale",
                        title: "Executive Director",
                        location: "Memphis",
                        type: "tennessee"
                    },
                    {
                        name: "S. Hudson",
                        title: "Executive Director",
                        location: "Knoxville",
                        type: "tennessee",
                        children: [
                            { name: "K. Radabaugh", title: "Field Operations (.5)", location: "Knoxville", type: "tennessee" }
                        ]
                    },
                    {
                        name: "S. Williams",
                        title: "Field Operations",
                        location: "Memphis",
                        type: "tennessee"
                    }
                ]
            },
            {
                name: "C. Robins",
                title: "RDO",
                location: "Nashville",
                type: "tennessee",
                children: [
                    {
                        name: "J. Bailley",
                        title: "Deputy RDO",
                        location: "Memphis",
                        type: "tennessee"
                    },
                    {
                        name: "K. Rice",
                        title: "Reg P&SA Manager",
                        location: "Knoxville",
                        type: "tennessee"
                    },
                    {
                        name: "K. Rubens",
                        title: "Client Care Manager",
                        location: "Nashville",
                        type: "tennessee"
                    },
                    {
                        name: "J. Cifre",
                        title: "Mass Care Mgr",
                        location: "Memphis",
                        type: "tennessee"
                    },
                    {
                        name: "R. Teems",
                        title: "Reg DWE Manager",
                        location: "Chattanooga",
                        type: "tennessee",
                        children: [
                            { name: "W. Doyle", title: "DWE Specialist", location: "Memphis", type: "tennessee" }
                        ]
                    },
                    {
                        name: "B. Rhodes",
                        title: "Senior CDPM",
                        location: "Jackson",
                        type: "tennessee",
                        children: [
                            { name: "Vacant", title: "CDPM", location: "Jackson", type: "vacant" }
                        ]
                    },
                    {
                        name: "L. Sloan",
                        title: "CDPM",
                        location: "Memphis",
                        type: "tennessee",
                        children: [
                            { name: "K. Powers", title: "CDPS", location: "Memphis", type: "tennessee" },
                            { name: "D. Hooper", title: "CDPS", location: "Memphis", type: "tennessee" },
                            { name: "L. Brown", title: "CDPS", location: "Memphis", type: "tennessee" }
                        ]
                    },
                    {
                        name: "J. Lovendusky",
                        title: "CDPM",
                        location: "Clarksville",
                        type: "tennessee"
                    },
                    {
                        name: "J. Taylor",
                        title: "CDPM",
                        location: "Murfreesboro",
                        type: "tennessee",
                        children: [
                            { name: "K. Powers", title: "CDPS", location: "Murfreesboro", type: "tennessee" }
                        ]
                    },
                    {
                        name: "C. Filip",
                        title: "CDPM",
                        location: "Kingsport",
                        type: "tennessee",
                        children: [
                            { name: "L. Nelson", title: "CDPS", location: "Kingsport", type: "tennessee" }
                        ]
                    },
                    {
                        name: "K. Lipski",
                        title: "CDPM",
                        location: "Chattanooga",
                        type: "tennessee",
                        children: [
                            { name: "L. Edwards", title: "CDPS", location: "Chattanooga", type: "tennessee" },
                            { name: "Vacant", title: "CDPS", location: "Chattanooga", type: "vacant" }
                        ]
                    },
                    {
                        name: "L. Edwards",
                        title: "CDPM",
                        location: "Knoxville",
                        type: "tennessee",
                        children: [
                            { name: "R. Wardell", title: "CDPS", location: "Knoxville", type: "tennessee" }
                        ]
                    },
                    {
                        name: "H. Pipes",
                        title: "CDPM",
                        location: "Nashville",
                        type: "tennessee",
                        children: [
                            { name: "L. Brocklehurst", title: "CDPS", location: "Nashville", type: "tennessee" },
                            { name: "P. Zulandt", title: "CDPS", location: "Nashville", type: "tennessee" }
                        ]
                    }
                ]
            },
            {
                name: "J. Williams",
                title: "Dir Comm /Mkt",
                location: "Nashville",
                type: "tennessee",
                children: [
                    { name: "R. Wardell", title: "Comm Manager", location: "Nashville", type: "tennessee" }
                ]
            },
            {
                name: "F. Clouse",
                title: "RVSO",
                location: "Nashville",
                type: "tennessee",
                children: [
                    { name: "N. Pace", title: "Sr. VS Specialist", location: "Nashville", type: "tennessee" },
                    { name: "A. Pradhan", title: "Sr. VS Specialist", location: "Memphis", type: "tennessee" },
                    { name: "A. Connors", title: "VS Specialist", location: "Clarksville", type: "tennessee" },
                    { name: "J. Peer", title: "VS Specialist", location: "Knoxville", type: "tennessee" }
                ]
            },
            {
                name: "A. Ware",
                title: "SAF Director",
                location: "Nashville",
                type: "tennessee",
                children: [
                    {
                        name: "Vacant",
                        title: "SAF Program Mng",
                        location: "Ft. Campbell",
                        type: "vacant"
                    },
                    { name: "B. Bergeson", title: "SAF Specialist", location: "Knoxville", type: "tennessee" }
                ]
            },
            {
                name: "Facilities Team",
                title: "Facilities",
                type: "tennessee",
                children: [
                    { name: "B. Hall", title: "Facilities Administrator", location: "Nashville", type: "tennessee" },
                    { name: "B. Mathis", title: "General Maintenance", location: "Nashville", type: "tennessee" },
                    { name: "J. Huff", title: "Fleet Coordinator", location: "Nashville", type: "tennessee" }
                ]
            }
        ]
    },
    alabama: {
        name: "M. Beddingfield",
        title: "Regional Executive",
        location: "Birmingham",
        type: "alabama",
        children: [
            {
                name: "E. Whitt",
                title: "Executive Coordinator",
                location: "Birmingham",
                type: "alabama"
            },
            {
                name: "D. Warren",
                title: "Chief Development Officer",
                location: "Birmingham",
                type: "alabama",
                children: [
                    {
                        name: "M. Williams",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Birmingham",
                        type: "alabama",
                        children: [
                            { name: "L. Phillips", title: "Regional Philanthropy Officer", location: "Birmingham", type: "alabama" },
                            { name: "K. Pitts", title: "Regional Philanthropy Officer", location: "Birmingham", type: "alabama" },
                            { name: "J. Wood", title: "Regional Philanthropy Officer", location: "Birmingham", type: "alabama" },
                            { name: "J. Copeland", title: "Regional Philanthropy Officer", location: "Mobile", type: "alabama" },
                            { name: "K. Tompkins", title: "Regional Philanthropy Officer", location: "Montgomery", type: "alabama" }
                        ]
                    },
                    {
                        name: "L. Hollingsworth",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Jackson",
                        type: "alabama",
                        children: [
                            { name: "T. Goolsby", title: "Regional Philanthropy Officer", location: "Jackson", type: "alabama" },
                            { name: "T. Wright", title: "Regional Philanthropy Officer", location: "Meridian", type: "alabama" },
                            { name: "D. Taylor", title: "Regional Philanthropy Officer", location: "Tupelo", type: "alabama" },
                            { name: "K. Shaw", title: "Regional Philanthropy Officer", location: "Gulfport", type: "alabama" }
                        ]
                    },
                    {
                        name: "L. Gordon",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Huntsville",
                        type: "alabama",
                        children: [
                            { name: "M. Mitchell", title: "Regional Philanthropy Officer", location: "Huntsville", type: "alabama" },
                            { name: "K. Stinson", title: "Regional Philanthropy Officer", location: "Decatur", type: "alabama" },
                            { name: "J. Davis", title: "Regional Philanthropy Officer", location: "Florence", type: "alabama" }
                        ]
                    },
                    {
                        name: "S. Meadows",
                        title: "Sr. Regional Philanthropy Officer",
                        location: "Tuscaloosa",
                        type: "alabama",
                        children: [
                            { name: "W. Smith", title: "Regional Philanthropy Officer", location: "Tuscaloosa", type: "alabama" },
                            { name: "T. Green", title: "Regional Philanthropy Officer", location: "Anniston", type: "alabama" }
                        ]
                    }
                ]
            },
            {
                name: "R. Word",
                title: "Chief Operating Officer ALMS",
                type: "alabama",
                children: [
                    {
                        name: "E. Mooring",
                        title: "Executive Director",
                        location: "Birmingham",
                        type: "alabama",
                        children: [
                            { name: "A. Alexander", title: "Director of Operations", location: "Birmingham", type: "alabama" },
                            { name: "D. Brown", title: "Community Outreach Specialist", location: "Birmingham", type: "alabama" },
                            { name: "J. Smith", title: "Volunteer Coordinator", location: "Birmingham", type: "alabama" }
                        ]
                    },
                    {
                        name: "R. Gardner",
                        title: "Executive Director",
                        location: "Montgomery",
                        type: "alabama",
                        children: [
                            { name: "S. Johnson", title: "Operations Manager", location: "Montgomery", type: "alabama" },
                            { name: "P. Williams", title: "Program Manager", location: "Montgomery", type: "alabama" }
                        ]
                    },
                    {
                        name: "T. Anderson",
                        title: "Executive Director",
                        location: "Mobile",
                        type: "alabama",
                        children: [
                            { name: "M. Davis", title: "Operations Manager", location: "Mobile", type: "alabama" },
                            { name: "R. Thompson", title: "Community Programs Director", location: "Mobile", type: "alabama" }
                        ]
                    },
                    {
                        name: "K. Roberts",
                        title: "Executive Director",
                        location: "Huntsville",
                        type: "alabama",
                        children: [
                            { name: "L. Martin", title: "Operations Manager", location: "Huntsville", type: "alabama" },
                            { name: "D. Wilson", title: "Program Coordinator", location: "Huntsville", type: "alabama" }
                        ]
                    },
                    {
                        name: "J. Patterson",
                        title: "Executive Director",
                        location: "Jackson",
                        type: "alabama",
                        children: [
                            { name: "T. Miller", title: "Operations Manager", location: "Jackson", type: "alabama" },
                            { name: "S. Clark", title: "Community Services Manager", location: "Jackson", type: "alabama" }
                        ]
                    },
                    {
                        name: "M. Henderson",
                        title: "Executive Director",
                        location: "Gulfport",
                        type: "alabama",
                        children: [
                            { name: "R. Lewis", title: "Operations Manager", location: "Gulfport", type: "alabama" },
                            { name: "K. Walker", title: "Emergency Services Coordinator", location: "Gulfport", type: "alabama" }
                        ]
                    }
                ]
            },
            {
                name: "Disaster Team (under R. Lock - Division)",
                title: "Division Disaster Executive",
                type: "alabama",
                children: [
                    {
                        name: "T. Stewart",
                        title: "Regional Disaster Officer",
                        location: "Birmingham",
                        type: "alabama",
                        children: [
                            { name: "D. Harris", title: "Disaster Program Manager", location: "Birmingham", type: "alabama" },
                            { name: "L. Robinson", title: "Mass Care Specialist", location: "Birmingham", type: "alabama" },
                            { name: "J. Thomas", title: "Shelter Manager", location: "Birmingham", type: "alabama" }
                        ]
                    },
                    {
                        name: "S. Martinez",
                        title: "Regional Disaster Officer",
                        location: "Jackson",
                        type: "alabama",
                        children: [
                            { name: "P. Garcia", title: "Disaster Response Coordinator", location: "Jackson", type: "alabama" },
                            { name: "M. Rodriguez", title: "Emergency Services Manager", location: "Jackson", type: "alabama" }
                        ]
                    },
                    {
                        name: "K. White",
                        title: "Disaster Services Director",
                        location: "Mobile",
                        type: "alabama",
                        children: [
                            { name: "R. Hall", title: "Disaster Response Manager", location: "Mobile", type: "alabama" },
                            { name: "T. Young", title: "Logistics Coordinator", location: "Mobile", type: "alabama" }
                        ]
                    }
                ]
            },
            {
                name: "L. Turner",
                title: "Regional HR Director",
                location: "Birmingham",
                type: "alabama",
                children: [
                    { name: "S. Adams", title: "HR Business Partner", location: "Birmingham", type: "alabama" },
                    { name: "M. Campbell", title: "HR Specialist", location: "Birmingham", type: "alabama" }
                ]
            },
            {
                name: "Vacant",
                title: "Regional Communications Director",
                location: "Birmingham",
                type: "vacant"
            }
        ]
    },
    northcarolina: {
        name: "A. Taylor",
        title: "Regional Executive",
        location: "North Carolina",
        type: "northcarolina",
        children: [
            {
                name: "S. Laub",
                title: "Executive Coordinator",
                type: "northcarolina"
            },
            {
                name: "E. Davis",
                title: "CDO",
                location: "Charlotte",
                type: "northcarolina",
                children: [
                    {
                        name: "T. Morrison",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Charlotte",
                        type: "northcarolina",
                        children: [
                            { name: "K. Bennett", title: "Regional Philanthropy Officer", location: "Charlotte", type: "northcarolina" },
                            { name: "D. Collins", title: "Regional Philanthropy Officer", location: "Charlotte", type: "northcarolina" },
                            { name: "R. Hayes", title: "Major Gifts Officer", location: "Charlotte", type: "northcarolina" },
                            { name: "L. Foster", title: "Corporate Partnerships Manager", location: "Charlotte", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "M. Richardson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Raleigh",
                        type: "northcarolina",
                        children: [
                            { name: "S. Parker", title: "Regional Philanthropy Officer", location: "Raleigh", type: "northcarolina" },
                            { name: "J. Edwards", title: "Regional Philanthropy Officer", location: "Durham", type: "northcarolina" },
                            { name: "P. Morris", title: "Regional Philanthropy Officer", location: "Chapel Hill", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "B. Watson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Greensboro",
                        type: "northcarolina",
                        children: [
                            { name: "K. Jenkins", title: "Regional Philanthropy Officer", location: "Greensboro", type: "northcarolina" },
                            { name: "T. Powell", title: "Regional Philanthropy Officer", location: "Winston-Salem", type: "northcarolina" },
                            { name: "M. Rivera", title: "Regional Philanthropy Officer", location: "High Point", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "L. Henderson",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Wilmington",
                        type: "northcarolina",
                        children: [
                            { name: "D. Murphy", title: "Regional Philanthropy Officer", location: "Wilmington", type: "northcarolina" },
                            { name: "R. Cooper", title: "Regional Philanthropy Officer", location: "Jacksonville", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "J. Coleman",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Asheville",
                        type: "northcarolina",
                        children: [
                            { name: "S. Bailey", title: "Regional Philanthropy Officer", location: "Asheville", type: "northcarolina" },
                            { name: "K. Reed", title: "Regional Philanthropy Officer", location: "Hickory", type: "northcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "M. Womble",
                title: "COO",
                location: "Greenville",
                type: "northcarolina",
                children: [
                    {
                        name: "D. Morgan",
                        title: "Executive Director",
                        location: "Charlotte",
                        type: "northcarolina",
                        children: [
                            { name: "L. Price", title: "Operations Manager", location: "Charlotte", type: "northcarolina" },
                            { name: "T. Brooks", title: "Community Services Director", location: "Charlotte", type: "northcarolina" },
                            { name: "R. Sanders", title: "Volunteer Services Manager", location: "Charlotte", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "K. Russell",
                        title: "Executive Director",
                        location: "Raleigh",
                        type: "northcarolina",
                        children: [
                            { name: "M. Perry", title: "Operations Manager", location: "Raleigh", type: "northcarolina" },
                            { name: "S. Long", title: "Program Director", location: "Raleigh", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "P. Barnes",
                        title: "Executive Director",
                        location: "Greensboro",
                        type: "northcarolina",
                        children: [
                            { name: "J. Ross", title: "Operations Manager", location: "Greensboro", type: "northcarolina" },
                            { name: "D. Griffin", title: "Community Programs Manager", location: "Greensboro", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "T. Cox",
                        title: "Executive Director",
                        location: "Wilmington",
                        type: "northcarolina",
                        children: [
                            { name: "R. Ward", title: "Operations Manager", location: "Wilmington", type: "northcarolina" },
                            { name: "K. Howard", title: "Coastal Services Director", location: "Wilmington", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "L. Patterson",
                        title: "Executive Director",
                        location: "Asheville",
                        type: "northcarolina",
                        children: [
                            { name: "M. Fisher", title: "Operations Manager", location: "Asheville", type: "northcarolina" },
                            { name: "S. Gray", title: "Mountain Region Director", location: "Asheville", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "J. Simmons",
                        title: "Executive Director",
                        location: "Greenville",
                        type: "northcarolina",
                        children: [
                            { name: "D. Wallace", title: "Operations Manager", location: "Greenville", type: "northcarolina" },
                            { name: "R. Burns", title: "Eastern NC Program Director", location: "Greenville", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "K. Mason",
                        title: "Regional Blood Services Director",
                        location: "Charlotte",
                        type: "northcarolina",
                        children: [
                            { name: "T. Hunter", title: "Blood Services Manager", location: "Charlotte", type: "northcarolina" },
                            { name: "L. Dixon", title: "Donor Recruitment Manager", location: "Charlotte", type: "northcarolina" },
                            { name: "M. Woods", title: "Mobile Operations Manager", location: "Charlotte", type: "northcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "J. Jarvis",
                title: "RDO",
                type: "northcarolina",
                children: [
                    {
                        name: "S. Freeman",
                        title: "Regional Disaster Officer",
                        location: "Charlotte",
                        type: "northcarolina",
                        children: [
                            { name: "D. Holmes", title: "Disaster Program Manager", location: "Charlotte", type: "northcarolina" },
                            { name: "R. Wagner", title: "Mass Care Specialist", location: "Charlotte", type: "northcarolina" },
                            { name: "K. Boyd", title: "Shelter Operations Manager", location: "Charlotte", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "T. Marshall",
                        title: "Regional Disaster Officer",
                        location: "Raleigh",
                        type: "northcarolina",
                        children: [
                            { name: "L. Knight", title: "Disaster Response Coordinator", location: "Raleigh", type: "northcarolina" },
                            { name: "M. Pierce", title: "Emergency Services Manager", location: "Raleigh", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "P. Hudson",
                        title: "Coastal Disaster Officer",
                        location: "Wilmington",
                        type: "northcarolina",
                        children: [
                            { name: "J. Stone", title: "Hurricane Response Coordinator", location: "Wilmington", type: "northcarolina" },
                            { name: "D. Meyer", title: "Coastal Emergency Manager", location: "Wilmington", type: "northcarolina" }
                        ]
                    },
                    {
                        name: "K. Chapman",
                        title: "Mountain Region Disaster Officer",
                        location: "Asheville",
                        type: "northcarolina",
                        children: [
                            { name: "R. Elliott", title: "Mountain Emergency Coordinator", location: "Asheville", type: "northcarolina" },
                            { name: "S. Lawson", title: "Winter Response Manager", location: "Asheville", type: "northcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "B. Reynolds",
                title: "Regional Communications Director",
                location: "Charlotte",
                type: "northcarolina",
                children: [
                    { name: "T. Graham", title: "External Communications Manager", location: "Charlotte", type: "northcarolina" },
                    { name: "M. Fuller", title: "Digital Communications Specialist", location: "Charlotte", type: "northcarolina" },
                    { name: "L. Owens", title: "Internal Communications Coordinator", location: "Charlotte", type: "northcarolina" }
                ]
            },
            {
                name: "D. Porter",
                title: "Regional HR Director",
                location: "Charlotte",
                type: "northcarolina",
                children: [
                    { name: "K. Wells", title: "HR Business Partner", location: "Charlotte", type: "northcarolina" },
                    { name: "R. Gibson", title: "HR Specialist", location: "Charlotte", type: "northcarolina" },
                    { name: "S. Crawford", title: "Talent Acquisition Manager", location: "Charlotte", type: "northcarolina" }
                ]
            },
            {
                name: "J. Webb",
                title: "Regional IT Director",
                location: "Charlotte",
                type: "northcarolina",
                children: [
                    { name: "M. Duncan", title: "IT Support Manager", location: "Charlotte", type: "northcarolina" },
                    { name: "T. Stevens", title: "Network Administrator", location: "Charlotte", type: "northcarolina" }
                ]
            }
        ]
    },
    southcarolina: {
        name: "Susan Everitt",
        title: "Regional Executive",
        location: "South Carolina",
        type: "southcarolina",
        children: [
            {
                name: "L. Ruggles",
                title: "Executive Coordinator",
                type: "southcarolina"
            },
            {
                name: "S. Ingraham",
                title: "CDO",
                type: "southcarolina",
                children: [
                    {
                        name: "D. Harrison",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Columbia",
                        type: "southcarolina",
                        children: [
                            { name: "K. Daniels", title: "Regional Philanthropy Officer", location: "Columbia", type: "southcarolina" },
                            { name: "R. Simpson", title: "Regional Philanthropy Officer", location: "Columbia", type: "southcarolina" },
                            { name: "M. Tucker", title: "Major Gifts Officer", location: "Columbia", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "T. Lambert",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Charleston",
                        type: "southcarolina",
                        children: [
                            { name: "L. Hayes", title: "Regional Philanthropy Officer", location: "Charleston", type: "southcarolina" },
                            { name: "J. Palmer", title: "Regional Philanthropy Officer", location: "Mount Pleasant", type: "southcarolina" },
                            { name: "S. Spencer", title: "Coastal Philanthropy Manager", location: "Charleston", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "P. Gardner",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Greenville",
                        type: "southcarolina",
                        children: [
                            { name: "D. Mills", title: "Regional Philanthropy Officer", location: "Greenville", type: "southcarolina" },
                            { name: "K. Nichols", title: "Regional Philanthropy Officer", location: "Spartanburg", type: "southcarolina" },
                            { name: "R. Grant", title: "Regional Philanthropy Officer", location: "Anderson", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "M. Carpenter",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Myrtle Beach",
                        type: "southcarolina",
                        children: [
                            { name: "T. Ford", title: "Regional Philanthropy Officer", location: "Myrtle Beach", type: "southcarolina" },
                            { name: "L. Bishop", title: "Regional Philanthropy Officer", location: "Florence", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "J. Weaver",
                        title: "Sr Regional Philanthropy Officer",
                        location: "Rock Hill",
                        type: "southcarolina",
                        children: [
                            { name: "S. Hunt", title: "Regional Philanthropy Officer", location: "Rock Hill", type: "southcarolina" },
                            { name: "D. Riley", title: "Regional Philanthropy Officer", location: "Lancaster", type: "southcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "M. Hesbach",
                title: "COO",
                type: "southcarolina",
                children: [
                    {
                        name: "R. Lawrence",
                        title: "Executive Director",
                        location: "Columbia",
                        type: "southcarolina",
                        children: [
                            { name: "K. Franklin", title: "Operations Manager", location: "Columbia", type: "southcarolina" },
                            { name: "T. Butler", title: "Community Services Director", location: "Columbia", type: "southcarolina" },
                            { name: "M. Harper", title: "Volunteer Coordinator", location: "Columbia", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "L. Montgomery",
                        title: "Executive Director",
                        location: "Charleston",
                        type: "southcarolina",
                        children: [
                            { name: "D. Austin", title: "Operations Manager", location: "Charleston", type: "southcarolina" },
                            { name: "S. Hawkins", title: "Lowcountry Services Director", location: "Charleston", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "J. Alexander",
                        title: "Executive Director",
                        location: "Greenville",
                        type: "southcarolina",
                        children: [
                            { name: "P. West", title: "Operations Manager", location: "Greenville", type: "southcarolina" },
                            { name: "K. Jordan", title: "Upstate Program Director", location: "Greenville", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "T. Robertson",
                        title: "Executive Director",
                        location: "Myrtle Beach",
                        type: "southcarolina",
                        children: [
                            { name: "R. Coleman", title: "Operations Manager", location: "Myrtle Beach", type: "southcarolina" },
                            { name: "M. Bryant", title: "Grand Strand Services Director", location: "Myrtle Beach", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "D. Patterson",
                        title: "Executive Director",
                        location: "Rock Hill",
                        type: "southcarolina",
                        children: [
                            { name: "L. Simmons", title: "Operations Manager", location: "Rock Hill", type: "southcarolina" },
                            { name: "S. Washington", title: "Piedmont Services Director", location: "Rock Hill", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "K. Murray",
                        title: "Regional Blood Services Director",
                        location: "Columbia",
                        type: "southcarolina",
                        children: [
                            { name: "J. Fox", title: "Blood Services Manager", location: "Columbia", type: "southcarolina" },
                            { name: "T. Holland", title: "Donor Recruitment Manager", location: "Columbia", type: "southcarolina" },
                            { name: "R. Shaw", title: "Mobile Operations Manager", location: "Columbia", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "M. Ellis",
                        title: "Regional Health & Safety Director",
                        location: "Columbia",
                        type: "southcarolina",
                        children: [
                            { name: "D. Fisher", title: "Training Manager", location: "Columbia", type: "southcarolina" },
                            { name: "L. Burke", title: "Health Services Coordinator", location: "Columbia", type: "southcarolina" },
                            { name: "K. Owens", title: "Safety Education Specialist", location: "Columbia", type: "southcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "T. Reid",
                title: "RDO",
                type: "southcarolina",
                children: [
                    {
                        name: "P. Armstrong",
                        title: "Regional Disaster Officer",
                        location: "Columbia",
                        type: "southcarolina",
                        children: [
                            { name: "J. Cunningham", title: "Disaster Program Manager", location: "Columbia", type: "southcarolina" },
                            { name: "S. Meyer", title: "Mass Care Specialist", location: "Columbia", type: "southcarolina" },
                            { name: "D. Walsh", title: "Shelter Manager", location: "Columbia", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "K. Hansen",
                        title: "Coastal Disaster Officer",
                        location: "Charleston",
                        type: "southcarolina",
                        children: [
                            { name: "R. Matthews", title: "Hurricane Response Coordinator", location: "Charleston", type: "southcarolina" },
                            { name: "T. Pierce", title: "Coastal Emergency Manager", location: "Charleston", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "L. Bradley",
                        title: "Upstate Disaster Officer",
                        location: "Greenville",
                        type: "southcarolina",
                        children: [
                            { name: "M. Ryan", title: "Disaster Response Coordinator", location: "Greenville", type: "southcarolina" },
                            { name: "J. Kelly", title: "Emergency Services Manager", location: "Greenville", type: "southcarolina" }
                        ]
                    },
                    {
                        name: "D. Stephens",
                        title: "Grand Strand Disaster Officer",
                        location: "Myrtle Beach",
                        type: "southcarolina",
                        children: [
                            { name: "S. Webb", title: "Coastal Response Coordinator", location: "Myrtle Beach", type: "southcarolina" },
                            { name: "K. Dunn", title: "Tourism Area Emergency Manager", location: "Myrtle Beach", type: "southcarolina" }
                        ]
                    }
                ]
            },
            {
                name: "R. Lawson",
                title: "Regional Communications Director",
                location: "Columbia",
                type: "southcarolina",
                children: [
                    { name: "T. Greene", title: "External Communications Manager", location: "Columbia", type: "southcarolina" },
                    { name: "M. Boyd", title: "Digital Media Specialist", location: "Columbia", type: "southcarolina" },
                    { name: "L. Chambers", title: "Internal Communications Coordinator", location: "Columbia", type: "southcarolina" }
                ]
            },
            {
                name: "J. Newman",
                title: "Regional Finance Director",
                location: "Columbia",
                type: "southcarolina",
                children: [
                    { name: "D. Watts", title: "Finance Manager", location: "Columbia", type: "southcarolina" },
                    { name: "K. Fleming", title: "Budget Analyst", location: "Columbia", type: "southcarolina" },
                    { name: "S. Harvey", title: "Accounting Specialist", location: "Columbia", type: "southcarolina" }
                ]
            },
            {
                name: "P. Douglas",
                title: "Regional HR Director",
                location: "Columbia",
                type: "southcarolina",
                children: [
                    { name: "M. Stone", title: "HR Business Partner", location: "Columbia", type: "southcarolina" },
                    { name: "R. Baldwin", title: "HR Specialist", location: "Columbia", type: "southcarolina" },
                    { name: "T. Moss", title: "Talent Acquisition Specialist", location: "Columbia", type: "southcarolina" }
                ]
            },
            {
                name: "L. Norton",
                title: "Regional IT Director",
                location: "Columbia",
                type: "southcarolina",
                children: [
                    { name: "J. Logan", title: "IT Support Manager", location: "Columbia", type: "southcarolina" },
                    { name: "D. Cross", title: "Systems Administrator", location: "Columbia", type: "southcarolina" }
                ]
            }
        ]
    }
};