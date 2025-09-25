// Red Cross Organizational Data
const orgData = {
    name: "Anna Trefethen",
    title: "Vice President",
    subtitle: "SE & Caribbean Division",
    location: "Headquarters",
    type: "executive",
    children: [
        {
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
                        }
                    ]
                },
                {
                    name: "S. Taylor",
                    title: "DVSE",
                    type: "manager",
                    children: [
                        {
                            name: "Jill Deskins",
                            title: "Sr. Volunteer Services Specialist",
                            location: "Columbus",
                            type: "staff"
                        },
                        {
                            name: "Alicia Studds", 
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
                                    name: "David Mainella",
                                    title: "Executive Director",
                                    location: "Columbus",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "M. Beddingfield",
            title: "Regional Executive",
            location: "Birmingham",
            type: "executive",
            region: "alabama-mississippi",
            children: [
                {
                    name: "D. Warren",
                    title: "Chief Development Officer",
                    location: "Birmingham",
                    type: "manager",
                    children: [
                        {
                            name: "M. Williams",
                            title: "Sr. Regional Philanthropy Officer",
                            location: "Birmingham",
                            type: "staff"
                        },
                        {
                            name: "B. Nicholson",
                            title: "Regional Philanthropy Officer",
                            location: "Flowood",
                            type: "staff"
                        },
                        {
                            name: "E. Sham",
                            title: "Regional Philanthropy Officer - Foundations",
                            location: "Gulfport",
                            type: "staff"
                        }
                    ]
                },
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
                        }
                    ]
                },
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
                        }
                    ]
                },
                {
                    name: "A. Rowland",
                    title: "Communications Director",
                    location: "Birmingham",
                    type: "manager",
                    children: [
                        {
                            name: "D. Rauch",
                            title: "Communications Manager",
                            location: "Birmingham",
                            type: "staff"
                        }
                    ]
                },
                {
                    name: "R. Lock",
                    title: "Division Disaster Executive",
                    type: "executive",
                    children: [
                        {
                            name: "B. Cuber",
                            title: "Regional Disaster Officer (Interim)",
                            type: "manager",
                            children: [
                                {
                                    name: "B. Devaney",
                                    title: "Regional Client Care Manager",
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
                                    name: "C. Beauchamp",
                                    title: "Disaster Workforce Engagement Manager",
                                    type: "staff"
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "North Carolina",
            type: "executive",
            region: "north-carolina",
            children: [
                {
                    name: "Regional Executive",
                    title: "North Carolina Region",
                    type: "manager",
                    children: [
                        {
                            name: "Operations Team",
                            title: "NC Operations",
                            type: "staff"
                        },
                        {
                            name: "Development Team",
                            title: "NC Development",
                            type: "staff"
                        },
                        {
                            name: "Volunteer Services",
                            title: "NC Volunteer Services",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "South Carolina",
            type: "executive",
            region: "south-carolina",
            children: [
                {
                    name: "Regional Executive",
                    title: "South Carolina Region",
                    type: "manager",
                    children: [
                        {
                            name: "Operations Team",
                            title: "SC Operations",
                            type: "staff"
                        },
                        {
                            name: "Development Team",
                            title: "SC Development",
                            type: "staff"
                        },
                        {
                            name: "Disaster Services",
                            title: "SC Disaster Services",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "Tennessee",
            type: "executive",
            region: "tennessee",
            children: [
                {
                    name: "Regional Executive",
                    title: "Tennessee Region",
                    type: "manager",
                    children: [
                        {
                            name: "Operations Team",
                            title: "TN Operations",
                            type: "staff"
                        },
                        {
                            name: "Development Team",
                            title: "TN Development",
                            type: "staff"
                        },
                        {
                            name: "Community Services",
                            title: "TN Community Services",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "Puerto Rico",
            type: "executive",
            region: "puerto-rico",
            children: [
                {
                    name: "Regional Executive",
                    title: "Puerto Rico Region",
                    type: "manager",
                    children: [
                        {
                            name: "Operations Team",
                            title: "PR Operations",
                            type: "staff"
                        },
                        {
                            name: "Disaster Response",
                            title: "PR Disaster Response",
                            type: "staff"
                        },
                        {
                            name: "Community Outreach",
                            title: "PR Community Outreach",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "South Florida",
            type: "executive",
            region: "south-florida",
            children: [
                {
                    name: "Regional Executive",
                    title: "South Florida Region",
                    type: "manager",
                    children: [
                        {
                            name: "Miami Operations",
                            title: "Miami-Dade Operations",
                            type: "staff"
                        },
                        {
                            name: "Broward Operations",
                            title: "Broward County Operations",
                            type: "staff"
                        },
                        {
                            name: "Keys Operations",
                            title: "Florida Keys Operations",
                            type: "staff"
                        }
                    ]
                }
            ]
        },
        {
            name: "Regional Leadership",
            title: "North Central Florida",
            type: "executive",
            region: "north-central-florida",
            children: [
                {
                    name: "Regional Executive",
                    title: "North Central Florida Region",
                    type: "manager",
                    children: [
                        {
                            name: "Jacksonville Operations",
                            title: "Jacksonville Operations",
                            type: "staff"
                        },
                        {
                            name: "Orlando Operations",
                            title: "Orlando Operations",
                            type: "staff"
                        },
                        {
                            name: "Tampa Operations",
                            title: "Tampa Bay Operations",
                            type: "staff"
                        }
                    ]
                }
            ]
        }
    ]
};