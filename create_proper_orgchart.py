#!/usr/bin/env python3
"""
Create a proper org chart that matches the PDF layout exactly
Using graphviz for precise control over layout
"""

import json

def create_mermaid_chart():
    """Create org chart using Mermaid.js which renders beautifully"""
    
    html = """<!DOCTYPE html>
<html>
<head>
    <title>North/Central Florida - Organization Chart</title>
    <script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
    <script>mermaid.initialize({startOnLoad:true, theme:'default', flowchart:{curve:'basis'}});</script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f5f5f5;
            padding: 20px;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
            overflow-x: auto;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .mermaid {
            text-align: center;
        }
        /* Custom node styling */
        .node rect {
            stroke-width: 2px !important;
        }
        .node.division rect {
            fill: #ff6b6b !important;
            stroke: #c92a2a !important;
        }
        .node.executive rect {
            fill: #4dabf7 !important;
            stroke: #1864ab !important;
        }
        .node.chief rect {
            fill: #69db7c !important;
            stroke: #2b8a3e !important;
        }
        .node.director rect {
            fill: #9775fa !important;
            stroke: #5f3dc4 !important;
        }
        .node.manager rect {
            fill: #ffd43b !important;
            stroke: #e67700 !important;
        }
        .node text {
            fill: white !important;
            font-size: 11px !important;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>North/Central Florida Regional Organization</h1>
        
        <div class="mermaid">
graph TD
    %% Division Level
    DVP[Division VP<br/>A. Trefethen]:::division
    
    %% Regional Executive Level
    DVP --> RE[Regional Executive<br/>C. Smith<br/>Jacksonville]:::executive
    DVP -.-> DFVP[DFVP<br/>D. Dixon]:::dotted
    DVP -.-> DFR[Dir. Division Fundraising<br/>V. Barnett]:::dotted
    DVP -.-> DCOO[DCOO<br/>L. Mims]:::dotted
    DVP -.-> DSAF[Div. SAF<br/>K. Gonzales]:::dotted
    DVP -.-> DCD[Div. Comm. Dir<br/>C. Edwards]:::dotted
    DVP -.-> DVSE[DVSE<br/>S. Taylor]:::dotted
    
    RE --> EA[Executive Assistant<br/>K. Jones<br/>Jacksonville]
    
    %% Direct Reports to Regional Executive
    RE --> CDO[Chief Dev. Officer<br/>W. Carney<br/>Jacksonville]:::chief
    RE --> RCOO[Regional Chief Operating Officer<br/>S. Rosario<br/>Tampa]:::chief
    RE --> RVSO[RVSO<br/>J. Walker<br/>Jacksonville]:::chief
    RE --> RDO[RDO interim<br/>K. Watt]:::chief
    DSAF -.-> SAF[SAF/Program Director<br/>G. Scrivens<br/>Tampa]:::director
    DCD -.-> COMM[Comm Director<br/>A. Bierfreund<br/>Jacksonville]:::director
    
    %% Development Team under W. Carney
    CDO --> AK[Sr. RPO<br/>A. Kennedy<br/>Orlando]:::manager
    AK --> MP[RPO<br/>M. Pharazyn<br/>Orlando]
    CDO --> RR[Sr. RPO<br/>R. Resler<br/>Tampa]:::manager
    RR --> CM[RPO<br/>C. Marasco<br/>Tampa]
    RR --> ZT[RPO<br/>Z. Thomas<br/>Jacksonville]
    CDO --> HM[RPO<br/>H. Marchbanks<br/>Tallahassee]
    CDO --> DR[Dev Ops Coordinator<br/>D. Roman]
    
    %% Executive Directors under S. Rosario
    RCOO --> JM[Executive Director<br/>J. Moran<br/>Orlando]:::director
    RCOO --> MB[Executive Director<br/>M. Brown<br/>Tampa Bay]:::director
    RCOO --> TJ[Executive Director<br/>T. Jenkins<br/>Pensacola]:::director
    RCOO --> SC[Executive Director<br/>S. Carraway<br/>Tallahassee]:::director
    RCOO --> V1[Executive Director<br/>Vacant<br/>Gainesville]:::vacant
    RCOO --> V2[Executive Director<br/>Vacant<br/>Jacksonville]:::vacant
    
    %% Staff under Executive Directors
    JM --> SW[Specialist<br/>S. Williams<br/>Jacksonville]
    JM --> JJ[Coordinator<br/>J. Judkins<br/>Orlando]
    MB --> CF[Specialist<br/>C. Funkhouser<br/>Tampa]
    TJ --> SF[Coordinator<br/>S. Francois<br/>Tallahassee]
    SC --> CM2[Sr. Specialist<br/>C. Montoya<br/>Tampa]
    
    %% Volunteer Services under J. Walker
    RVSO --> SVS[Supervisor VS]
    SVS --> DM[Sr. Specialist<br/>D. McMillian<br/>Tallahassee]
    RVSO --> AL[Rep II<br/>A. Lin<br/>Orlando/Daytona]
    RVSO --> MG[Rep III<br/>M. Gallagher<br/>Tampa]
    RVSO --> HA[Rep II<br/>H. Anderson<br/>Jacksonville]
    RVSO --> V3[Rep III<br/>Vacant<br/>Jacksonville/Gville]:::vacant
    
    %% SAF Team under G. Scrivens
    SAF --> AB[SAF Manager<br/>A. Bolton<br/>Orlando]
    SAF --> LS[Mobile Program Manager<br/>L. Simms]
    SAF --> SY[SAF Specialist<br/>S. Youngren<br/>Pensacola]
    SAF --> LT[Prog. Manager<br/>L. Tissicino<br/>Jacksonville]
    SAF --> MCH[Mobile SAF Spec<br/>M. Chavarria<br/>Tampa]
    SAF --> LP[Coordinator<br/>L. Pendergrass<br/>Daytona]
    
    %% Communications under A. Bierfreund
    COMM --> DL[Comm Spec III<br/>D. Lindo<br/>Orlando]
    COMM --> RN[Comm Spec. III<br/>R. Nelson]
    
    %% Style definitions
    classDef division fill:#e74c3c,stroke:#c0392b,stroke-width:3px,color:#fff
    classDef executive fill:#3498db,stroke:#2980b9,stroke-width:3px,color:#fff
    classDef chief fill:#27ae60,stroke:#229954,stroke-width:2px,color:#fff
    classDef director fill:#8e44ad,stroke:#7d3c98,stroke-width:2px,color:#fff
    classDef manager fill:#f39c12,stroke:#e67e22,stroke-width:2px,color:#fff
    classDef dotted fill:#95a5a6,stroke:#7f8c8d,stroke-width:2px,stroke-dasharray: 5 5,color:#fff
    classDef vacant fill:#ecf0f1,stroke:#95a5a6,stroke-width:2px,stroke-dasharray: 5 5,color:#7f8c8d
        </div>
    </div>
</body>
</html>"""
    
    with open('ncflorida-mermaid.html', 'w') as f:
        f.write(html)
    
    print("Created ncflorida-mermaid.html")

def create_simple_hierarchical():
    """Create a simple, clean hierarchical chart that exactly matches the PDF"""
    
    html = """<!DOCTYPE html>
<html>
<head>
    <title>North/Central Florida - Clean Org Chart</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }
        
        body {
            font-family: Arial, sans-serif;
            font-size: 11px;
            background: white;
            padding: 20px;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 18px;
        }
        
        .chart {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            overflow-x: auto;
        }
        
        .level {
            display: flex;
            justify-content: center;
            margin: 20px 0;
            width: 100%;
        }
        
        .node {
            border: 2px solid #000;
            background: white;
            padding: 5px 8px;
            margin: 0 5px;
            text-align: center;
            min-width: 90px;
            max-width: 150px;
        }
        
        .node.dotted {
            border-style: dashed;
            border-color: #666;
        }
        
        .node.vacant {
            border-style: dashed;
            color: #999;
        }
        
        .title {
            font-size: 10px;
            margin-bottom: 2px;
        }
        
        .name {
            font-weight: bold;
            font-size: 11px;
        }
        
        .location {
            font-size: 9px;
            color: #666;
            margin-top: 2px;
        }
        
        .branch {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 0 10px;
        }
        
        .team {
            border: 1px solid #ddd;
            background: #f9f9f9;
            padding: 10px;
            margin: 10px;
            border-radius: 4px;
        }
        
        .team-header {
            font-weight: bold;
            text-align: center;
            margin-bottom: 10px;
            font-size: 12px;
            color: #333;
        }
        
        .team-members {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 5px;
        }
        
        .connector {
            width: 2px;
            height: 20px;
            background: #000;
            margin: 0 auto;
        }
        
        .connector.dotted {
            background: repeating-linear-gradient(
                to bottom,
                #666,
                #666 3px,
                transparent 3px,
                transparent 6px
            );
        }
        
        .horizontal-line {
            height: 2px;
            background: #000;
            width: 100%;
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>North/Central Florida</h1>
    
    <div class="chart">
        <!-- Division VP -->
        <div class="level">
            <div class="node">
                <div class="title">Division VP</div>
                <div class="name">A. Trefethen</div>
            </div>
        </div>
        
        <div class="connector"></div>
        
        <!-- Regional Executive Level with Division Support -->
        <div class="level">
            <div class="branch">
                <div class="team">
                    <div class="team-header">Division Support (Dotted Line)</div>
                    <div class="team-members">
                        <div class="node dotted">
                            <div class="title">DFVP</div>
                            <div class="name">D. Dixon</div>
                        </div>
                        <div class="node dotted">
                            <div class="title">Dir. Division<br/>Fundraising</div>
                            <div class="name">V. Barnett</div>
                        </div>
                        <div class="node dotted">
                            <div class="title">DCOO</div>
                            <div class="name">L. Mims</div>
                        </div>
                        <div class="node dotted">
                            <div class="title">Div. SAF</div>
                            <div class="name">K. Gonzales</div>
                        </div>
                        <div class="node dotted">
                            <div class="title">Div. Comm. Dir</div>
                            <div class="name">C. Edwards</div>
                        </div>
                        <div class="node dotted">
                            <div class="title">DVSE</div>
                            <div class="name">S. Taylor</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="branch">
                <div class="node" style="border-width: 3px;">
                    <div class="title">Regional Executive</div>
                    <div class="name">C. Smith</div>
                    <div class="location">Jacksonville</div>
                </div>
                <div class="connector"></div>
                <div class="node">
                    <div class="title">Executive Assistant</div>
                    <div class="name">K. Jones</div>
                    <div class="location">Jacksonville</div>
                </div>
            </div>
        </div>
        
        <div class="connector"></div>
        
        <!-- Direct Reports Level -->
        <div class="level">
            <!-- W. Carney and his team -->
            <div class="branch">
                <div class="node">
                    <div class="title">Chief Dev. Officer</div>
                    <div class="name">W. Carney</div>
                    <div class="location">Jacksonville</div>
                </div>
                <div class="connector"></div>
                <div class="team">
                    <div class="team-header">Development Team</div>
                    <div class="team-members">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <div class="node">
                                <div class="title">Sr. RPO</div>
                                <div class="name">A. Kennedy</div>
                                <div class="location">Orlando</div>
                            </div>
                            <div class="connector" style="height: 10px;"></div>
                            <div class="node">
                                <div class="title">RPO</div>
                                <div class="name">M. Pharazyn</div>
                                <div class="location">Orlando</div>
                            </div>
                        </div>
                        
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <div class="node">
                                <div class="title">Sr. RPO</div>
                                <div class="name">R. Resler</div>
                                <div class="location">Tampa</div>
                            </div>
                            <div class="connector" style="height: 10px;"></div>
                            <div style="display: flex; gap: 5px;">
                                <div class="node">
                                    <div class="title">RPO</div>
                                    <div class="name">C. Marasco</div>
                                    <div class="location">Tampa</div>
                                </div>
                                <div class="node">
                                    <div class="title">RPO</div>
                                    <div class="name">Z. Thomas</div>
                                    <div class="location">Jacksonville</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="node">
                            <div class="title">RPO</div>
                            <div class="name">H. Marchbanks</div>
                            <div class="location">Tallahassee</div>
                        </div>
                        
                        <div class="node">
                            <div class="title">Dev Ops<br/>Coordinator</div>
                            <div class="name">D. Roman</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- S. Rosario and Executive Directors -->
            <div class="branch">
                <div class="node">
                    <div class="title">Regional Chief<br/>Operating Officer</div>
                    <div class="name">S. Rosario</div>
                    <div class="location">Tampa</div>
                </div>
                <div class="connector"></div>
                <div class="team">
                    <div class="team-header">Executive Directors</div>
                    <div class="team-members">
                        <div class="node">
                            <div class="title">Executive Director</div>
                            <div class="name">J. Moran</div>
                            <div class="location">Orlando</div>
                        </div>
                        <div class="node">
                            <div class="title">Executive Director</div>
                            <div class="name">M. Brown</div>
                            <div class="location">Tampa Bay</div>
                        </div>
                        <div class="node">
                            <div class="title">Executive Director</div>
                            <div class="name">T. Jenkins</div>
                            <div class="location">Pensacola</div>
                        </div>
                        <div class="node">
                            <div class="title">Executive Director</div>
                            <div class="name">S. Carraway</div>
                            <div class="location">Tallahassee</div>
                        </div>
                        <div class="node vacant">
                            <div class="title">Executive Director</div>
                            <div class="name">Vacant</div>
                            <div class="location">Gainesville</div>
                        </div>
                        <div class="node vacant">
                            <div class="title">Executive Director</div>
                            <div class="name">Vacant</div>
                            <div class="location">Jacksonville</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- J. Walker and Volunteer Services -->
            <div class="branch">
                <div class="node">
                    <div class="title">RVSO</div>
                    <div class="name">J. Walker</div>
                    <div class="location">Jacksonville</div>
                </div>
                <div class="connector"></div>
                <div class="team">
                    <div class="team-header">Volunteer Services</div>
                    <div class="team-members">
                        <div class="node">
                            <div class="title">Supervisor VS</div>
                        </div>
                        <div class="node">
                            <div class="title">Rep II</div>
                            <div class="name">A. Lin</div>
                            <div class="location">Orlando/Daytona</div>
                        </div>
                        <div class="node">
                            <div class="title">Rep III</div>
                            <div class="name">M. Gallagher</div>
                            <div class="location">Tampa</div>
                        </div>
                        <div class="node">
                            <div class="title">Rep II</div>
                            <div class="name">H. Anderson</div>
                            <div class="location">Jacksonville</div>
                        </div>
                        <div class="node vacant">
                            <div class="title">Rep III</div>
                            <div class="name">Vacant</div>
                            <div class="location">Jacksonville/G'ville</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- SAF and Communications linked to Division roles -->
        <div class="level">
            <div class="branch">
                <div class="node dotted">
                    <div class="title">SAF/Program Director</div>
                    <div class="name">G. Scrivens</div>
                    <div class="location">Tampa</div>
                </div>
                <div class="connector dotted"></div>
                <div class="team">
                    <div class="team-header">SAF Team</div>
                    <div class="team-members">
                        <div class="node">
                            <div class="title">SAF Manager</div>
                            <div class="name">A. Bolton</div>
                            <div class="location">Orlando</div>
                        </div>
                        <div class="node">
                            <div class="title">Mobile Program<br/>Manager</div>
                            <div class="name">L. Simms</div>
                        </div>
                        <div class="node">
                            <div class="title">SAF Specialist</div>
                            <div class="name">S. Youngren</div>
                            <div class="location">Pensacola</div>
                        </div>
                        <div class="node">
                            <div class="title">Prog. Manager</div>
                            <div class="name">L. Tissicino</div>
                            <div class="location">Jacksonville</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="branch">
                <div class="node dotted">
                    <div class="title">Comm Director</div>
                    <div class="name">A. Bierfreund</div>
                    <div class="location">Jacksonville</div>
                </div>
                <div class="connector dotted"></div>
                <div class="team">
                    <div class="team-header">Communications</div>
                    <div class="team-members">
                        <div class="node">
                            <div class="title">Comm Spec III</div>
                            <div class="name">D. Lindo</div>
                            <div class="location">Orlando</div>
                        </div>
                        <div class="node">
                            <div class="title">Comm Spec. III</div>
                            <div class="name">R. Nelson</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>"""
    
    with open('ncflorida-clean.html', 'w') as f:
        f.write(html)
    
    print("Created ncflorida-clean.html")

if __name__ == "__main__":
    create_mermaid_chart()
    create_simple_hierarchical()
    print("Generated two different org chart approaches")