// Complete organizational data extracted from all PDFs
const orgData = {
    name: "Anna Trefethen",
    title: "Vice President",
    location: "SE & Caribbean Division",
    type: "division",
    children: [
        // Georgia Region - Complete Structure
        {
            name: "Alicia Doherty",
            title: "Regional Chief Executive Officer",
            location: "Atlanta",
            type: "georgia",
            children: [
                {
                    name: "D. Dixon",
                    title: "DFVP",
                    type: "georgia",
                    children: [
                        {
                            name: "V. Barnett",
                            title: "Director of Division Fundraising",
                            location: "Atlanta",
                            type: "georgia",
                            children: [
                                { name: "J. Douglas", title: "GCG Representative", location: "Atlanta", type: "georgia" },
                                { name: "T. Malaney", title: "EVSPM", location: "Atlanta", type: "georgia" },
                                { name: "S. Siddique", title: "Major Gifts Officer", location: "Atlanta", type: "georgia" },
                                { name: "M. Clark", title: "Major Gifts Officer", location: "Atlanta", type: "georgia" },
                                { name: "K. Myers", title: "Major Gifts Officer", location: "Atlanta", type: "georgia" },
                                { name: "L. Taylor", title: "MGO GCG Representative", location: "Atlanta", type: "georgia" },
                                { name: "G. Goldberg", title: "Division Stewardship Officer", location: "Atlanta", type: "georgia" },
                                { name: "H. Leighton-Armour", title: "VP Campaigns", location: "Atlanta", type: "georgia" },
                                { name: "P. Pajonas", title: "Division Giving Manager", location: "Atlanta", type: "georgia" },
                                { name: "A. Brannon", title: "Division Regional Philanthropy Officer", location: "Atlanta", type: "georgia" }
                            ]
                        },
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
                            name: "Vacant",
                            title: "RPO",
                            location: "Columbus",
                            type: "vacant",
                            children: [
                                { name: "M. Salley", title: "Account Executive", location: "Columbus", type: "georgia" }
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
                            name: "Vacant",
                            title: "RPO",
                            location: "Jonesboro",
                            type: "vacant",
                            children: [
                                { name: "Vacant", title: "Account Executive", location: "Jonesboro", type: "vacant" }
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
                        },
                        {
                            name: "Vacant",
                            title: "RPO",
                            location: "Tifton",
                            type: "vacant",
                            children: [
                                { name: "R. Dye", title: "Account Executive", location: "Tifton", type: "georgia" }
                            ]
                        }
                    ]
                },
                {
                    name: "Katrina Gonzalez",
                    title: "Div SAF Director",
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
                            name: "Vacant",
                            title: "SAF Program Manager",
                            location: "Ft Stewart",
                            type: "vacant",
                            children: [
                                { name: "S. Schumacher", title: "SAF Manager", location: "Ft Stewart", type: "georgia" },
                                { name: "Vacant", title: "SAF CDCC", location: "Ft Stewart", type: "vacant" }
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
                    name: "S. Taylor",
                    title: "DVSE",
                    type: "georgia",
                    children: [
                        { name: "J. Copeland", title: "Regional External Comms Manager", location: "Atlanta", type: "georgia" },
                        { name: "Vacant", title: "Regional Comms Manager", location: "Atlanta", type: "vacant" },
                        { name: "L. Brown", title: "Regional External Comms Director", location: "Atlanta", type: "georgia" },
                        { name: "J. Brown", title: "Internal Comms Manager", location: "Atlanta", type: "georgia" }
                    ]
                },
                {
                    name: "C. Edwards",
                    title: "DCD",
                    type: "georgia",
                    children: [
                        { name: "G. Robinson", title: "Sr FSTPM", type: "georgia" },
                        { name: "D. Eichhorn", title: "Sr Division Govt Relations Officer", type: "georgia" },
                        { name: "M. Sapp", title: "Volunteer Mobilization Director", type: "georgia" },
                        { name: "D. Neal", title: "Volunteer Services Business Manager", location: "Atlanta", type: "georgia" },
                        { name: "S. Stephens", title: "Sr Business Engagement Manager", location: "Atlanta", type: "georgia" },
                        { name: "C. Harris", title: "Regional Program Manager", location: "Atlanta", type: "georgia" }
                    ]
                },
                {
                    name: "L. Mims",
                    title: "DCOO",
                    type: "georgia",
                    children: [
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
                            name: "Vacant",
                            title: "Disaster Action Team Manager",
                            location: "Atlanta",
                            type: "vacant"
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
                        }
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
                }
            ]
        },
        // Alabama/Mississippi Region - Complete Structure
        {
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
                    name: "R. Lock",
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
                    name: "Vacant",
                    title: "Regional Communications Director",
                    location: "Birmingham",
                    type: "vacant"
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
                }
            ]
        },
        // North Carolina Region - Complete Structure
        {
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
        // South Carolina Region - Complete Structure
        {
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
    ]
};