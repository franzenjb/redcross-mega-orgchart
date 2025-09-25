// Complete Red Cross Organizational Data with ALL Names and Positions
const orgData = {
    name: "Anna Trefethen",
    title: "Vice President",
    subtitle: "SE & Caribbean Division",
    type: "executive",
    children: [
        {
            // GEORGIA REGION - COMPLETE
            name: "Alicia Doherty",
            title: "Regional Chief Executive Officer",
            location: "Atlanta",
            type: "executive",
            region: "georgia",
            children: [
                {
                    name: "D. Dixon",
                    title: "DFVP",
                    type: "manager",
                    children: [
                        {
                            name: "V. Barnett",
                            title: "Director of Division Fundraising",
                            type: "manager"
                        }
                    ]
                },
                {
                    name: "Katrina Gonzalez",
                    title: "Div SAF Director",
                    type: "manager",
                    children: [
                        {
                            name: "Victoria Hamrick",
                            title: "SAF Director",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Jill Deskins",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Columbus",
                            type: "staff"
                        },
                        {
                            name: "Katie Davis",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Savannah",
                            type: "staff"
                        },
                        {
                            name: "Michele Walton",
                            title: "SAF Program Manager",
                            location: "Ft Moore",
                            type: "staff"
                        },
                        {
                            name: "Vacant",
                            title: "SAF Program Manager",
                            location: "Ft Stewart",
                            type: "staff"
                        },
                        {
                            name: "Allison Flexner",
                            title: "SAF Program Manager",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Samuel Day",
                            title: "SAF Program Specialist",
                            location: "Augusta",
                            type: "staff"
                        },
                        {
                            name: "Abigail Jenkins",
                            title: "SAF Program Specialist",
                            location: "Ft Eisenhower",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "S. Taylor",
                    title: "DVSE",
                    type: "manager",
                    children: [
                        {
                            name: "Alicia Studds",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Augusta",
                            type: "staff"
                        },
                        {
                            name: "Kimloy Adlam",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "LaKenya Drayton",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Barry Hundley",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Tina Dean",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Keith Parron",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Macon",
                            type: "staff"
                        },
                        {
                            name: "Steve Dantzler",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Savannah",
                            type: "staff"
                        },
                        {
                            name: "Carrie Jones",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Augusta",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "C. Edwards",
                    title: "DCD",
                    type: "manager",
                    children: [
                        {
                            name: "Katie Zwerk",
                            title: "Regional Communications Director",
                            type: "manager"
                        },
                        {
                            name: "Chris Carpentino",
                            title: "Regional Communications Manager",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Carrie Friend",
                            title: "Regional Communications Manager",
                            location: "Macon",
                            type: "staff"
                        },
                        {
                            name: "Jalen Lewis",
                            title: "Development Communication Manager",
                            type: "staff"
                        },
                        {
                            name: "Emerald Best",
                            title: "Executive Assistant",
                            location: "Atlanta",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "L. Mims",
                    title: "DCOO",
                    type: "manager",
                    children: [
                        {
                            name: "Carla Dillard Homer",
                            title: "RCOO Atlanta",
                            type: "manager",
                            children: [
                                {
                                    name: "Nicholas King",
                                    title: "Executive Director",
                                    location: "Atlanta",
                                    type: "staff"
                                },
                                {
                                    name: "Holly Long",
                                    title: "Executive Director",
                                    location: "Savannah",
                                    type: "staff"
                                },
                                {
                                    name: "LaShawn Brady",
                                    title: "Executive Director",
                                    location: "LaGrange",
                                    type: "staff"
                                },
                                {
                                    name: "Dottie Cook",
                                    title: "Executive Director",
                                    location: "Augusta",
                                    type: "staff"
                                },
                                {
                                    name: "Emerald Best",
                                    title: "Executive Director",
                                    location: "Rome",
                                    type: "staff"
                                },
                                {
                                    name: "Tracy Willis-Kight",
                                    title: "Executive Director",
                                    location: "Watkinsville",
                                    type: "staff"
                                },
                                {
                                    name: "Antonea Stuckey",
                                    title: "Executive Director",
                                    location: "Valdosta",
                                    type: "staff"
                                },
                                {
                                    name: "David Mainella",
                                    title: "Executive Director",
                                    location: "Columbus",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Business Operations Team",
                            title: "Business Operations",
                            type: "manager",
                            children: [
                                {
                                    name: "Kimberly Lane",
                                    title: "Business Ops Specialist",
                                    location: "Atlanta",
                                    type: "staff"
                                },
                                {
                                    name: "Ne'kea Walton",
                                    title: "Business Ops Specialist",
                                    location: "Atlanta",
                                    type: "staff"
                                },
                                {
                                    name: "Maria Center",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Rome",
                                    type: "staff"
                                },
                                {
                                    name: "Thomas Fairley",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Augusta",
                                    type: "staff"
                                },
                                {
                                    name: "Patti Leopard",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Gainesville",
                                    type: "staff"
                                },
                                {
                                    name: "Jennifer Edsell",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Columbus",
                                    type: "staff"
                                },
                                {
                                    name: "Greg Brown",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Macon",
                                    type: "staff"
                                },
                                {
                                    name: "Sherrelle Mitchell",
                                    title: "Business Ops Coordinator -.5",
                                    location: "Savannah",
                                    type: "staff"
                                },
                                {
                                    name: "Tim Carlson",
                                    title: "Business Ops Coordinator - .5",
                                    location: "Valdosta",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Facilities Team",
                            title: "Facilities & Maintenance",
                            type: "manager",
                            children: [
                                {
                                    name: "JP Burkhalter",
                                    title: "Facility Lead",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Iris Siano",
                                    title: "Fleet Coordinator",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Nicholas King",
                                    title: "Fleet Coordinator",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Steve Dantzler",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Cydnee Keller",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Roosevelt Valree",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Victoria Hamrick",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Barbara Fontaine",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Althea Wooden",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Samuel Day",
                                    title: "General Maintenance Tech",
                                    location: "Douglasville",
                                    type: "staff"
                                },
                                {
                                    name: "Erika Anderson",
                                    title: "General Maintenance Tech",
                                    location: "Atlanta",
                                    type: "staff"
                                },
                                {
                                    name: "Patti Duckworth",
                                    title: "General Maintenance Tech",
                                    location: "Savannah",
                                    type: "staff"
                                },
                                {
                                    name: "Allen Brandau",
                                    title: "General Maintenance Tech",
                                    location: "Atlanta",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Development Team",
                    title: "Development",
                    type: "manager",
                    children: [
                        {
                            name: "David Mainella",
                            title: "Regional CDO",
                            location: "Atlanta",
                            type: "manager"
                        },
                        {
                            name: "Suzanne Lawler",
                            title: "Regional CDO",
                            location: "Atlanta",
                            type: "manager"
                        },
                        {
                            name: "Joe Vella",
                            title: "RPO",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Antonea Stuckey",
                            title: "RPO",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Tracy Willis-Kight",
                            title: "RPO",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Carrie Friend",
                            title: "RPO",
                            location: "Savannah",
                            type: "staff"
                        },
                        {
                            name: "Tim Carlson",
                            title: "RPO",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Morgan Cantrell",
                            title: "RPO",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Ivan Ponder",
                            title: "RPO",
                            location: "Savannah",
                            type: "staff"
                        },
                        {
                            name: "Carrie Jones",
                            title: "Development Director",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Jennifer Edsell",
                            title: "Development Specialist",
                            location: "Columbus",
                            type: "staff"
                        },
                        {
                            name: "Johnny Williams",
                            title: "Development Specialist",
                            location: "Columbus",
                            type: "staff"
                        },
                        {
                            name: "Allison Flexner",
                            title: "Development Communication Manager",
                            type: "staff"
                        },
                        {
                            name: "Stephenie Perry",
                            title: "Grants Specialist",
                            location: "Rome",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "Adelaide Kirk",
                    title: "Regional Disaster Officer",
                    location: "Columbus",
                    type: "executive",
                    children: [
                        {
                            name: "Jeremy McLendon",
                            title: "Deputy Regional Disaster Officer",
                            location: "Atlanta",
                            type: "manager"
                        },
                        {
                            name: "Kelly Crane",
                            title: "Sr. Community Disaster Program Manager",
                            type: "manager"
                        },
                        {
                            name: "Brooks Spangler",
                            title: "Sr. Community Disaster Program Manager",
                            type: "manager"
                        },
                        {
                            name: "Kelly Sharon",
                            title: "Regional DAT Manager",
                            location: "Atlanta",
                            type: "manager"
                        },
                        {
                            name: "Paul Brown",
                            title: "Regional Mass Care Manager",
                            location: "Athens",
                            type: "manager"
                        },
                        {
                            name: "Patrick Seger",
                            title: "Regional Client Care Manager",
                            location: "Calhoun",
                            type: "manager"
                        },
                        {
                            name: "Cheryl Edwards",
                            title: "Regional Client Care Specialist",
                            location: "Valdosta",
                            type: "staff"
                        },
                        {
                            name: "Katie Eckardt",
                            title: "Regional Planning & Situational Awareness Manager",
                            location: "Watkinsville",
                            type: "manager"
                        },
                        {
                            name: "Aaron Fisher",
                            title: "Disaster Workforce Engagement Mgr",
                            location: "Atlanta",
                            type: "manager"
                        },
                        {
                            name: "Daniel Brackett",
                            title: "Disaster Workforce Engagement Specialist",
                            location: "Atlanta",
                            type: "staff"
                        },
                        {
                            name: "Bill O'Neill",
                            title: "Community Disaster Program Manager",
                            location: "Atlanta East",
                            type: "staff"
                        },
                        {
                            name: "Mikkita Dean",
                            title: "Community Disaster Program Manager",
                            location: "Atlanta West",
                            type: "staff"
                        },
                        {
                            name: "Bill Allocca",
                            title: "Community Disaster Program Specialist",
                            location: "Atlanta West",
                            type: "staff"
                        },
                        {
                            name: "Genevieve Chavez",
                            title: "Community Disaster Program Manager",
                            location: "South Central",
                            type: "staff"
                        },
                        {
                            name: "Peggy Bentz",
                            title: "Community Disaster Program Specialist",
                            location: "South Central",
                            type: "staff"
                        },
                        {
                            name: "Mike Riemann",
                            title: "Community Disaster Program Manager",
                            location: "Northeast",
                            type: "staff"
                        },
                        {
                            name: "Vacant",
                            title: "Community Disaster Program Manager",
                            location: "Northwest",
                            type: "staff"
                        },
                        {
                            name: "Virgil Watkins",
                            title: "Community Disaster Program Manager",
                            location: "Central Midwest",
                            type: "staff"
                        },
                        {
                            name: "Vacant",
                            title: "Community Disaster Program Specialist",
                            location: "Central Midwest",
                            type: "staff"
                        },
                        {
                            name: "Amber Jordan",
                            title: "Community Disaster Program Manager",
                            location: "Southwest",
                            type: "staff"
                        },
                        {
                            name: "Michael Gaffney",
                            title: "Community Disaster Program Specialist",
                            location: "Southwest",
                            type: "staff"
                        },
                        {
                            name: "Ryan Martindale-George",
                            title: "Community Disaster Program Manager",
                            location: "East Central",
                            type: "staff"
                        },
                        {
                            name: "Quincy Parks",
                            title: "Community Disaster Program Specialist",
                            location: "East Central",
                            type: "staff"
                        },
                        {
                            name: "Rhonda Ruesch",
                            title: "Community Disaster Program Manager",
                            location: "Southeast",
                            type: "staff"
                        },
                        {
                            name: "Vacant",
                            title: "Community Disaster Program Specialist",
                            location: "Southeast",
                            type: "staff"
                        },
                        {
                            name: "Elizabeth Quintero",
                            title: "Diverse Community Disaster Program Manager DCIP",
                            location: "Atlanta",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            // ALABAMA/MISSISSIPPI REGION - COMPLETE
            name: "M. Beddingfield",
            title: "Regional Executive",
            location: "Birmingham",
            type: "executive",
            region: "alabama-mississippi",
            children: [
                {
                    name: "E. Whitt",
                    title: "Executive Coordinator",
                    location: "Birmingham",
                    type: "staff"
                },
                {
                    name: "D. Dixon",
                    title: "Division Fundraising Vice President",
                    type: "manager",
                    children: [
                        {
                            name: "V. Barnett",
                            title: "Division Development Director",
                            type: "manager"
                        }
                    ]
                },
                {
                    name: "D. Warren",
                    title: "Chief Development Officer",
                    location: "Birmingham",
                    type: "manager",
                    children: [
                        {
                            name: "M. Williams",
                            title: "Sr. Regional Philanthropy Officer - AL",
                            location: "Birmingham",
                            type: "staff"
                        },
                        {
                            name: "B. Nicholson",
                            title: "Regional Philanthropy Officer - MS",
                            location: "Flowood",
                            type: "staff"
                        },
                        {
                            name: "E. Sham",
                            title: "Regional Philanthropy Officer - Foundations",
                            location: "Gulfport",
                            type: "staff"
                        },
                        {
                            name: "J. Lindsey",
                            title: "Development Specialist",
                            location: "Birmingham",
                            type: "staff"
                        },
                        {
                            name: "A. Lane",
                            title: "Grants Specialist",
                            location: "Gulfport",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "Katrina Gonzalez",
                    title: "Division Director SAF & IS",
                    type: "manager",
                    children: [
                        {
                            name: "C. Munro",
                            title: "SAF & IS US Regional Director",
                            type: "manager"
                        },
                        {
                            name: "D. Samuels",
                            title: "SAF Manager",
                            location: "Mobile",
                            type: "staff"
                        },
                        {
                            name: "S. Woodville",
                            title: "SAF Specialist",
                            location: "Meridian",
                            type: "staff"
                        },
                        {
                            name: "H. Kuroda",
                            title: "SAF Specialist Mobile",
                            location: "Huntsville",
                            type: "staff"
                        },
                        {
                            name: "H. Hoffman",
                            title: "SAF Manager Mobile",
                            location: "Gulfport",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "S. Taylor",
                    title: "Division Volunteer Services Officer",
                    type: "manager",
                    children: [
                        {
                            name: "D. Jackson",
                            title: "Regional VSO",
                            location: "Birmingham",
                            type: "manager",
                            children: [
                                {
                                    name: "T. Burks",
                                    title: "Sr. Recruitment Specialist",
                                    location: "Decatur",
                                    type: "staff"
                                },
                                {
                                    name: "S. Zuiderhoek",
                                    title: "Recruitment Specialist",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "S. Green",
                                    title: "Sr. Recruitment Specialist",
                                    location: "Flowood",
                                    type: "staff"
                                },
                                {
                                    name: "M. Duvall",
                                    title: "Recruitment Specialist",
                                    location: "Pascagoula",
                                    type: "staff"
                                },
                                {
                                    name: "M. Bowers",
                                    title: "Recruitment Specialist",
                                    location: "Tupelo",
                                    type: "staff"
                                },
                                {
                                    name: "C. Battersby",
                                    title: "Sr. Engagement Spec",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "L. Mims",
                                    title: "Engagement Specialist",
                                    location: "Montgomery",
                                    type: "staff"
                                },
                                {
                                    name: "H. Hauck",
                                    title: "Volunteer Services Supervisor",
                                    location: "Hattiesburg",
                                    type: "staff"
                                },
                                {
                                    name: "A. Cottrell",
                                    title: "Engagement Specialist",
                                    location: "Flowood",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "L. Mims",
                    title: "Division COO",
                    type: "manager",
                    children: [
                        {
                            name: "R. Word",
                            title: "Chief Operating Officer ALMS",
                            type: "manager",
                            children: [
                                {
                                    name: "J. McCarty",
                                    title: "ED SE-MS",
                                    location: "Gulfport",
                                    type: "staff"
                                },
                                {
                                    name: "K. Anderson",
                                    title: "ED N-AL",
                                    location: "Huntsville",
                                    type: "staff"
                                },
                                {
                                    name: "T. Washington",
                                    title: "ED Central W-AL",
                                    location: "Tuscaloosa",
                                    type: "staff"
                                },
                                {
                                    name: "K. Hodges",
                                    title: "ED S-AL",
                                    location: "Mobile",
                                    type: "staff"
                                },
                                {
                                    name: "L. Johnson",
                                    title: "ED Central E-AL",
                                    location: "Montgomery",
                                    type: "staff"
                                },
                                {
                                    name: "K. Grist",
                                    title: "ED N-MS",
                                    location: "Tupelo",
                                    type: "staff"
                                },
                                {
                                    name: "T. Jeuitt",
                                    title: "ED SW-MS",
                                    location: "Flowood",
                                    type: "staff"
                                },
                                {
                                    name: "A. Rygiel",
                                    title: "ED Mid-AL",
                                    location: "Birmingham",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Business Operations",
                            title: "Business Operations Team",
                            type: "manager",
                            children: [
                                {
                                    name: "M. Urech",
                                    title: "Sr Bus Ops Specialist",
                                    location: "Birmingham, Mid AL",
                                    type: "staff"
                                },
                                {
                                    name: "L. Willoughby",
                                    title: "Bus Ops Specialist",
                                    location: "SE MS & South AL",
                                    type: "staff"
                                },
                                {
                                    name: "A. Crow",
                                    title: "Bus Ops Specialist",
                                    location: "North AL & N MS",
                                    type: "staff"
                                },
                                {
                                    name: "B. Davis",
                                    title: "Bus Ops Specialist",
                                    location: "SW MS & CW AL",
                                    type: "staff"
                                },
                                {
                                    name: "VACANT",
                                    title: "Bus Ops Specialist",
                                    location: "CE AL",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Facilities & Fleet",
                            title: "Facilities Team",
                            type: "manager",
                            children: [
                                {
                                    name: "V. Nguala",
                                    title: "Fleet Coordinator",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "P. Gridler",
                                    title: "General Maintenance Tech",
                                    location: "Mobile",
                                    type: "staff"
                                },
                                {
                                    name: "A. Wilson",
                                    title: "General Maintenance Tech",
                                    location: "Birmingham",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "C. Edwards",
                    title: "Division Communications",
                    type: "manager",
                    children: [
                        {
                            name: "A. Rowland",
                            title: "Communications Director",
                            location: "Birmingham",
                            type: "manager"
                        },
                        {
                            name: "D. Rauch",
                            title: "Communications Manager",
                            location: "Birmingham",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "J. Brown",
                    title: "State Relations Officer",
                    location: "Mississippi",
                    type: "staff"
                },
                {
                    name: "R. Lock",
                    title: "Division Disaster Executive",
                    type: "executive",
                    children: [
                        {
                            name: "B. Cuber (Interim)",
                            title: "Regional Disaster Officer",
                            type: "manager",
                            children: [
                                {
                                    name: "VACANT",
                                    title: "Deputy Regional Disaster Officer",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Regional Mass Care Manager",
                                    type: "staff"
                                },
                                {
                                    name: "I. Diaz",
                                    title: "Regional Planning & Situational Awareness Mgr",
                                    type: "staff"
                                },
                                {
                                    name: "L. Mayes",
                                    title: "Regional Preparedness Manager",
                                    type: "staff"
                                },
                                {
                                    name: "B. Devaney",
                                    title: "Regional Client Care Manager",
                                    type: "staff"
                                },
                                {
                                    name: "C. Beauchamp",
                                    title: "Disaster Workforce Engagement Manager",
                                    type: "staff"
                                },
                                {
                                    name: "E. Gibson",
                                    title: "Disaster Workforce Engagement Specialist",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "M. Chatman",
                            title: "Sr. Community Disaster Program Manager",
                            location: "Flowood",
                            type: "manager",
                            children: [
                                {
                                    name: "K. Reed",
                                    title: "Community Disaster Program Mgr",
                                    location: "Flowood",
                                    type: "staff"
                                },
                                {
                                    name: "M. Storgaard",
                                    title: "Community Disaster Program Mgr",
                                    location: "Meridian",
                                    type: "staff"
                                },
                                {
                                    name: "Z. Anderson",
                                    title: "Community Disaster Program Mgr",
                                    location: "Hattiesburg",
                                    type: "staff"
                                },
                                {
                                    name: "M. Johnson",
                                    title: "Community Disaster Program Mgr",
                                    location: "Greenville",
                                    type: "staff"
                                },
                                {
                                    name: "M. Wiley",
                                    title: "Community Disaster Program Mgr",
                                    location: "Columbus",
                                    type: "staff"
                                },
                                {
                                    name: "P. Blanchard",
                                    title: "Community Disaster Program Mgr",
                                    location: "Tupelo",
                                    type: "staff"
                                },
                                {
                                    name: "T. Tripp",
                                    title: "Community Disaster Program Mgr",
                                    location: "Vicksburg",
                                    type: "staff"
                                },
                                {
                                    name: "VACANT",
                                    title: "Community Disaster Program Mgr",
                                    location: "Gulfport",
                                    type: "staff"
                                },
                                {
                                    name: "VACANT",
                                    title: "Community Disaster Program Mgr",
                                    location: "Natchez",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "C. Barrett",
                            title: "Sr. Community Disaster Program Mgr",
                            location: "Birmingham",
                            type: "manager",
                            children: [
                                {
                                    name: "M. Brown",
                                    title: "Community Disaster Program Specialist",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "S. Holcomb",
                                    title: "Community Disaster Program Mgr",
                                    location: "Jasper",
                                    type: "staff"
                                },
                                {
                                    name: "D. Looney",
                                    title: "Community Disaster Program Mgr",
                                    location: "Birmingham",
                                    type: "staff"
                                },
                                {
                                    name: "T. Spalding",
                                    title: "Community Disaster Program Mgr",
                                    location: "Decatur",
                                    type: "staff"
                                },
                                {
                                    name: "W. Battles",
                                    title: "Community Disaster Program Mgr",
                                    location: "Gadsden/Virtual",
                                    type: "staff"
                                },
                                {
                                    name: "A. Pruitt",
                                    title: "Community Disaster Program Mgr",
                                    location: "Anniston",
                                    type: "staff"
                                },
                                {
                                    name: "S. Crutcher",
                                    title: "Community Disaster Program Mgr",
                                    location: "Huntsville",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "J. Brewton",
                            title: "Sr. Community Disaster Program Mgr",
                            location: "Montgomery",
                            type: "manager",
                            children: [
                                {
                                    name: "D. Woods",
                                    title: "Community Disaster Program Mgr",
                                    location: "Montgomery",
                                    type: "staff"
                                },
                                {
                                    name: "T. Creech",
                                    title: "Community Disaster Program Mgr",
                                    location: "Dothan",
                                    type: "staff"
                                },
                                {
                                    name: "J. Hilliard",
                                    title: "Community Disaster Program Mgr",
                                    location: "Mobile",
                                    type: "staff"
                                },
                                {
                                    name: "J. Hodge",
                                    title: "Community Disaster Program Mgr",
                                    location: "Selma",
                                    type: "staff"
                                },
                                {
                                    name: "B. Phelan",
                                    title: "Community Disaster Program Mgr",
                                    location: "Mobile",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "S. Randolph",
                            title: "Community Disaster Risk Reduction MGR-AL",
                            type: "manager",
                            children: [
                                {
                                    name: "M. Wheeler",
                                    title: "Community Disaster Risk Reduction Coordinator-AL",
                                    type: "staff"
                                },
                                {
                                    name: "A. Crooks",
                                    title: "Community Disaster Risk Reduction Coordinator-AL",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "A. Jones",
                            title: "Community Disaster Risk Reduction MGR-MS",
                            type: "manager",
                            children: [
                                {
                                    name: "R. Crowe",
                                    title: "Community Disaster Risk Reduction Coordinator-MS",
                                    type: "staff"
                                },
                                {
                                    name: "S. Young",
                                    title: "Community Disaster Risk Reduction Coordinator-MS",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            // NORTH CAROLINA REGION - COMPLETE
            name: "A. Taylor",
            title: "Regional Executive",
            location: "North Carolina",
            type: "executive",
            region: "north-carolina",
            children: [
                {
                    name: "S. Laub",
                    title: "Executive Coord",
                    type: "staff"
                },
                {
                    name: "V. Barnett",
                    title: "Director of Division Fundraising",
                    type: "manager"
                },
                {
                    name: "D. Dixon",
                    title: "DFVP",
                    type: "manager"
                },
                {
                    name: "K. Gonzalez",
                    title: "Div SAF",
                    type: "manager",
                    children: [
                        {
                            name: "L. Bolen",
                            title: "SAF Director",
                            location: "Charlotte",
                            type: "manager"
                        },
                        {
                            name: "Vacant",
                            title: "SAF Mobile Manager",
                            location: "Charlotte",
                            type: "staff"
                        },
                        {
                            name: "T. Allen",
                            title: "SAF Specialist (temp)",
                            location: "Ft. Bragg",
                            type: "staff"
                        },
                        {
                            name: "N. Holt",
                            title: "SAF Mobile Manager",
                            location: "Fort Bragg",
                            type: "staff"
                        },
                        {
                            name: "K. Ketterhagen",
                            title: "SAF Mobile Spec",
                            location: "Jacksonville",
                            type: "staff"
                        },
                        {
                            name: "A. Sowynn",
                            title: "SAF Mobile Manager (deployed)",
                            location: "Fort Bragg",
                            type: "staff"
                        },
                        {
                            name: "Vacant",
                            title: "SAF Mobile Manager",
                            location: "Jacksonville",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "S. Taylor",
                    title: "DVSE",
                    type: "manager",
                    children: [
                        {
                            name: "M. Grady-Wheatley",
                            title: "RVSO",
                            location: "Greenville",
                            type: "manager",
                            children: [
                                {
                                    name: "E. Grant",
                                    title: "Sr Recruitment Spc",
                                    location: "NENC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "A. Korb",
                                    title: "Sr Recruitment Spc",
                                    location: "SP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Sr Recruitment Spc",
                                    location: "BRP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "K. Grant",
                                    title: "Sr Recruiter Diverse Communities",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "K. Collins",
                                    title: "Sr Recruitment Spc",
                                    location: "WNC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "C. Wells",
                                    title: "Sr Recruitment Spc",
                                    location: "Sandhills Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "S. Stewart",
                                    title: "Spvr Engagement",
                                    location: "Greensboro",
                                    type: "staff"
                                },
                                {
                                    name: "C. Hitengoku",
                                    title: "Sr Engagement Spc",
                                    location: "GTAC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "J. Prosser",
                                    title: "Sr Engagement Spc",
                                    location: "PT Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "C. Nelson",
                                    title: "Sr Engagement Spc",
                                    location: "CMA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "J. Hedstrom",
                                    title: "Sr Engagement Spc",
                                    location: "CF Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Sr Recruiter Diverse Communities",
                                    location: "Charlotte",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "C. Edwards",
                    title: "DCD",
                    type: "manager",
                    children: [
                        {
                            name: "K. Flynn",
                            title: "Comms Director",
                            location: "Durham",
                            type: "manager"
                        },
                        {
                            name: "K. Connolly",
                            title: "Comm Manager",
                            location: "Charlotte",
                            type: "staff"
                        },
                        {
                            name: "S. Hayes",
                            title: "Comm Manager",
                            location: "Charlotte",
                            type: "staff"
                        },
                        {
                            name: "D. Allison",
                            title: "Comm Manager",
                            location: "Raleigh",
                            type: "staff"
                        },
                        {
                            name: "T. Wong",
                            title: "Comm Manager",
                            location: "Raleigh",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "L. Mims",
                    title: "DCOO",
                    type: "manager",
                    children: [
                        {
                            name: "M. Womble",
                            title: "COO",
                            location: "Greenville",
                            type: "manager",
                            children: [
                                {
                                    name: "S. Crunkleton",
                                    title: "Executive Director",
                                    location: "Monroe",
                                    type: "staff"
                                },
                                {
                                    name: "J. Johnson",
                                    title: "Executive Director",
                                    location: "Raleigh",
                                    type: "staff"
                                },
                                {
                                    name: "T. Forrester",
                                    title: "Executive Director",
                                    location: "Greenville",
                                    type: "staff"
                                },
                                {
                                    name: "P. Harris",
                                    title: "Executive Director",
                                    location: "Fayetteville",
                                    type: "staff"
                                },
                                {
                                    name: "D. Allison",
                                    title: "Executive Director",
                                    location: "Wilmington",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Executive Director",
                                    location: "Greensboro",
                                    type: "staff"
                                },
                                {
                                    name: "S. Loudermelt",
                                    title: "Executive Director",
                                    location: "Hickory",
                                    type: "staff"
                                },
                                {
                                    name: "J. Gudzunas",
                                    title: "Executive Director",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "J. Goldberg",
                                    title: "Executive Director",
                                    location: "Asheville",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "D. Cranfield",
                            title: "Regional Manager Facilities & Fleet",
                            location: "Charlotte",
                            type: "manager",
                            children: [
                                {
                                    name: "B. Edwards",
                                    title: "Regional Lead Facilities Specialist",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "S. Riley",
                                    title: "Fleet Coordinator",
                                    location: "Durham",
                                    type: "staff"
                                },
                                {
                                    name: "S. Peake",
                                    title: "Fleet Coordinator",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "W. Routh",
                                    title: "Bus Ops Specialist",
                                    location: "Greensboro",
                                    type: "staff"
                                },
                                {
                                    name: "N. Filer",
                                    title: "Bus Ops Coordinator",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "M. Farmer",
                                    title: "Bus Ops Specialist",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "C. Nelson",
                                    title: "Bus Ops Specialist",
                                    location: "Raleigh",
                                    type: "staff"
                                },
                                {
                                    name: "T. Jones",
                                    title: "Bus Ops Coord (.5)",
                                    location: "Greenville",
                                    type: "staff"
                                },
                                {
                                    name: "A. Gurung",
                                    title: "Bus Ops Coord (.5)",
                                    location: "Fayetteville",
                                    type: "staff"
                                },
                                {
                                    name: "S. Starovoytov",
                                    title: "Maint Tech",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "G. Mckann",
                                    title: "Maint Tech",
                                    location: "Durham",
                                    type: "staff"
                                },
                                {
                                    name: "M. Johnson",
                                    title: "Maint Tech",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "T. Labinski",
                                    title: "Maint Tech",
                                    location: "Charlotte",
                                    type: "staff"
                                },
                                {
                                    name: "J. McConnell",
                                    title: "Maint Tech",
                                    location: "Asheville",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "E. Davis",
                    title: "CDO",
                    location: "Charlotte",
                    type: "manager",
                    children: [
                        {
                            name: "A. Kieber-Emmons",
                            title: "Dir of Dev",
                            location: "Durham",
                            type: "manager"
                        },
                        {
                            name: "J. Sharp",
                            title: "RPO Individual",
                            location: "Asheville",
                            type: "staff"
                        },
                        {
                            name: "M. Douglas",
                            title: "RPO Individual",
                            location: "Durham",
                            type: "staff"
                        },
                        {
                            name: "J. Mills",
                            title: "Sr. RPO Individual",
                            location: "Charlotte",
                            type: "staff"
                        },
                        {
                            name: "L. Godwin",
                            title: "RPO Foundations",
                            location: "Wilmington",
                            type: "staff"
                        },
                        {
                            name: "S. McFadden",
                            title: "Sr. RPO Corporate",
                            location: "Greensboro",
                            type: "staff"
                        },
                        {
                            name: "V. Battle",
                            title: "RPO Corporate",
                            location: "Raleigh",
                            type: "staff"
                        },
                        {
                            name: "R. Richards",
                            title: "Sr. RPO Corporate",
                            location: "Charlotte",
                            type: "staff"
                        },
                        {
                            name: "S. Chapman",
                            title: "Event Specialist",
                            location: "Raleigh",
                            type: "staff"
                        },
                        {
                            name: "J. Sharpe",
                            title: "Grants Specialist",
                            location: "Raleigh",
                            type: "staff"
                        },
                        {
                            name: "J. DiRusso",
                            title: "Dev. Specialist",
                            location: "Charlotte",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "J. Jarvis",
                    title: "RDO",
                    type: "executive",
                    children: [
                        {
                            name: "M. McDonald",
                            title: "Deputy RDO",
                            location: "Jacksonville",
                            type: "manager"
                        },
                        {
                            name: "K. Marshall",
                            title: "DWE Manager",
                            type: "manager"
                        },
                        {
                            name: "D. Bradley",
                            title: "DWE Specialist",
                            type: "staff"
                        },
                        {
                            name: "T. Shealy",
                            title: "Reg. DAT Manager",
                            type: "manager"
                        },
                        {
                            name: "M. Lykins",
                            title: "Reg. Mass Care Mgr",
                            type: "manager"
                        },
                        {
                            name: "K. Long",
                            title: "Reg. Client Care Mgr",
                            type: "manager"
                        },
                        {
                            name: "K. Devoe",
                            title: "Reg. Planning & Situational Awareness Mgr",
                            type: "manager"
                        },
                        {
                            name: "A. Mines",
                            title: "Sr. DPM",
                            location: "Asheville",
                            type: "manager",
                            children: [
                                {
                                    name: "S. Nason",
                                    title: "Community DPM",
                                    location: "CMA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "D. Rickles",
                                    title: "Community DPS",
                                    location: "CMA Chapter",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Vacant",
                            title: "Sr. DPM",
                            type: "manager"
                        },
                        {
                            name: "Community Disaster Teams",
                            title: "Community Disaster Program",
                            type: "manager",
                            children: [
                                {
                                    name: "Jon McCollum",
                                    title: "Community DPM",
                                    location: "PT Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Community DPS",
                                    location: "PT Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "W. Cannon",
                                    title: "Community DPM",
                                    location: "SP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "C. Hill",
                                    title: "Community DPS",
                                    location: "SP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "V. Hess",
                                    title: "Community DPM",
                                    location: "BRP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "A. May",
                                    title: "Community DPS",
                                    location: "BRP Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "M. Shields",
                                    title: "Community DPM",
                                    location: "WNC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "B. Pierce",
                                    title: "Community DPS",
                                    location: "WNC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "S. Sanders",
                                    title: "Community DPM",
                                    location: "GTA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "A. Banks",
                                    title: "Community DPS",
                                    location: "GTA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "J. O'Reilly",
                                    title: "Community DPM",
                                    location: "CFA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "K. Reyna",
                                    title: "Community DPS",
                                    location: "CFA Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "D. Jones",
                                    title: "Community DPM",
                                    location: "NENC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "N. Junquera",
                                    title: "Community DPS",
                                    location: "NENC Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "C. Foster",
                                    title: "Community DPM",
                                    location: "Sandhills Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "Vacant",
                                    title: "Community DPS",
                                    location: "Sandhills Chapter",
                                    type: "staff"
                                },
                                {
                                    name: "A. Sargent",
                                    title: "Community DPS",
                                    location: "Sandhills Chapter",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            // SOUTH CAROLINA REGION - COMPLETE
            name: "Susan Everitt",
            title: "Regional Executive",
            location: "South Carolina",
            type: "executive",
            region: "south-carolina",
            children: [
                {
                    name: "L. Ruggles",
                    title: "Executive Coord",
                    type: "staff"
                },
                {
                    name: "V. Barnett",
                    title: "Director of Division Fundraising",
                    type: "manager"
                },
                {
                    name: "D. Dixon",
                    title: "DFVP",
                    type: "manager"
                },
                {
                    name: "K. Gonzalez",
                    title: "Div SAF",
                    type: "manager",
                    children: [
                        {
                            name: "(I) K. Davis",
                            title: "SAF/IS Director",
                            type: "manager"
                        },
                        {
                            name: "Vacant",
                            title: "SAF/IS Program Mgr",
                            location: "SC West",
                            type: "staff"
                        },
                        {
                            name: "A. Kale",
                            title: "SAF/IS Program Mgr",
                            location: "SC East",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "S. Taylor",
                    title: "DVSE",
                    type: "manager",
                    children: [
                        {
                            name: "L. Miller-Wills",
                            title: "RVSO",
                            type: "manager",
                            children: [
                                {
                                    name: "K. Stewart",
                                    title: "Recruitment Spc",
                                    location: "Greenville/Columbia",
                                    type: "staff"
                                },
                                {
                                    name: "H. Mathews",
                                    title: "Sr. Recruitment Spc",
                                    location: "Myrtle Beach",
                                    type: "staff"
                                },
                                {
                                    name: "L. Hough",
                                    title: "Sr. Recruitment Spc",
                                    location: "Charleston",
                                    type: "staff"
                                },
                                {
                                    name: "K. Eller",
                                    title: "Sr. Engagement Spc",
                                    location: "Greenville",
                                    type: "staff"
                                },
                                {
                                    name: "S. Johnson",
                                    title: "Sr. Engagement Spc",
                                    location: "Charleston",
                                    type: "staff"
                                },
                                {
                                    name: "A. Feraci",
                                    title: "Sr. Engagement Spc",
                                    location: "Columbia",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "C. Edwards",
                    title: "DCD",
                    type: "manager",
                    children: [
                        {
                            name: "M. McMahon",
                            title: "Dir Comm",
                            type: "manager"
                        },
                        {
                            name: "N. Gibson",
                            title: "Comm Mgr",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "L. Mims",
                    title: "DCOO",
                    type: "manager",
                    children: [
                        {
                            name: "M. Hesbach",
                            title: "COO",
                            type: "manager",
                            children: [
                                {
                                    name: "J. Raichel",
                                    title: "Executive Director",
                                    location: "Greenville",
                                    type: "staff"
                                },
                                {
                                    name: "M. Silsby",
                                    title: "Executive Director",
                                    location: "Charleston",
                                    type: "staff"
                                },
                                {
                                    name: "D. Teasdell",
                                    title: "Executive Director",
                                    location: "Columbia",
                                    type: "staff"
                                },
                                {
                                    name: "K. Byrd",
                                    title: "Executive Director",
                                    location: "Florence",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Business Operations",
                            title: "Business Ops Team",
                            type: "manager",
                            children: [
                                {
                                    name: "M. Smith",
                                    title: "Bus Ops Spc",
                                    location: "Columbia",
                                    type: "staff"
                                },
                                {
                                    name: "J. Harrington",
                                    title: "Bus Ops Spc",
                                    location: "Columbia",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "Maintenance Team",
                            title: "General Maintenance",
                            type: "manager",
                            children: [
                                {
                                    name: "J. Rivers",
                                    title: "Gen Maint Tech",
                                    location: "Columbia",
                                    type: "staff"
                                },
                                {
                                    name: "B. Jeffcoat",
                                    title: "Gen Maint Tech",
                                    location: "Columbia",
                                    type: "staff"
                                }
                            ]
                        },
                        {
                            name: "J. Johnson",
                            title: "Fleet Coord",
                            location: "Charleston",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "S. Ingraham",
                    title: "CDO",
                    type: "manager",
                    children: [
                        {
                            name: "W. Pearson",
                            title: "Philanthropy Officer",
                            location: "Columbia",
                            type: "staff"
                        },
                        {
                            name: "L. Dunn",
                            title: "Philanthropy Officer",
                            location: "Columbia",
                            type: "staff"
                        },
                        {
                            name: "J. Nesbitt",
                            title: "Philanthropy Officer",
                            location: "Columbia",
                            type: "staff"
                        },
                        {
                            name: "A. Dillon",
                            title: "Philanthropy Officer",
                            location: "Greenville",
                            type: "staff"
                        },
                        {
                            name: "K. Lilly",
                            title: "Philanthropy Officer",
                            location: "Charleston",
                            type: "staff"
                        },
                        {
                            name: "K. Longe",
                            title: "Spec Events Spec",
                            location: "Columbia",
                            type: "staff"
                        },
                        {
                            name: "M. Riley",
                            title: "Dev Specialist",
                            type: "staff"
                        },
                        {
                            name: "A. Pearson",
                            title: "Grants Spec",
                            location: "Greenville",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "Ryan Lock",
                    title: "DDE",
                    type: "executive"
                },
                {
                    name: "T. Reid",
                    title: "RDO",
                    type: "executive",
                    children: [
                        {
                            name: "K. Anderson",
                            title: "DWE",
                            type: "manager"
                        },
                        {
                            name: "M. Huppmann",
                            title: "Mass Care Mgr",
                            type: "manager"
                        },
                        {
                            name: "B. Marett",
                            title: "Client Care Mgr",
                            type: "manager"
                        },
                        {
                            name: "B. Mills",
                            title: "DAT Mgr",
                            type: "manager"
                        },
                        {
                            name: "R. Horne",
                            title: "Planning & Situational Awareness Mgr",
                            type: "manager"
                        },
                        {
                            name: "M. Ellison",
                            title: "Sr. CDPM",
                            type: "manager",
                            children: [
                                {
                                    name: "G. Jennings",
                                    title: "CDPM Central",
                                    type: "staff"
                                },
                                {
                                    name: "M. Mollenhauer",
                                    title: "CDPS Central",
                                    type: "staff"
                                },
                                {
                                    name: "L. Lynskey",
                                    title: "CDPM Lowcountry",
                                    type: "staff"
                                },
                                {
                                    name: "T. Musselman",
                                    title: "CDPS Lowcountry",
                                    type: "staff"
                                },
                                {
                                    name: "N. King",
                                    title: "CDPM Eastern",
                                    type: "staff"
                                },
                                {
                                    name: "S. Taylor",
                                    title: "CDPS Eastern",
                                    type: "staff"
                                },
                                {
                                    name: "S. Sample",
                                    title: "CDPM Upstate",
                                    type: "staff"
                                },
                                {
                                    name: "S. Eldridge",
                                    title: "CDPS Upstate",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};