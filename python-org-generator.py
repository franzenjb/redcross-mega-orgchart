#!/usr/bin/env python3
"""
Smart Org Chart Generator for Red Cross
Uses Graphviz for professional PDF/PNG output from CSV data
Based on your IAP implementation but simplified for general use
"""

import csv
import json
import sys
from graphviz import Digraph
import pandas as pd
from pathlib import Path

def load_from_csv(filename):
    """
    Load org chart data from CSV file
    Expected columns: ID, Name, Title, ReportsTo, Location (optional), Category (optional)
    """
    data = []
    with open(filename, 'r') as f:
        reader = csv.DictReader(f)
        for row in reader:
            if row.get('Name'):  # Only include rows with names
                data.append({
                    'id': row.get('ID', ''),
                    'name': row.get('Name', ''),
                    'title': row.get('Title', ''),
                    'reportsTo': row.get('ReportsTo', ''),
                    'location': row.get('Location', ''),
                    'category': row.get('Category', 'Default')
                })
    return data

def load_from_excel(filename):
    """Load org chart data from Excel file"""
    df = pd.read_excel(filename)
    data = []
    
    for _, row in df.iterrows():
        if pd.notna(row.get('Name', '')):
            data.append({
                'id': str(row.get('ID', '')),
                'name': str(row.get('Name', '')),
                'title': str(row.get('Title', '')),
                'reportsTo': str(row.get('ReportsTo', '')) if pd.notna(row.get('ReportsTo', '')) else '',
                'location': str(row.get('Location', '')) if pd.notna(row.get('Location', '')) else '',
                'category': str(row.get('Category', 'Default')) if pd.notna(row.get('Category', '')) else 'Default'
            })
    return data

def create_org_chart(data, title="Organization Chart", output_format='pdf', output_file='org_chart'):
    """
    Create a professional org chart using Graphviz
    """
    # Create a new directed graph
    dot = Digraph(comment=title, format=output_format)
    
    # Configure graph attributes
    dot.attr(rankdir='TB')  # Top to Bottom
    dot.attr('graph', bgcolor='white', splines='ortho', nodesep='0.8', ranksep='1.2')
    dot.attr('node', shape='box', style='rounded,filled', fontname='Arial', fontsize='11', margin='0.2')
    dot.attr('edge', color='#666666', arrowsize='0.8')
    
    # Define colors for different categories/regions
    colors = {
        'Executive': '#1a472a',  # Dark green
        'Director': '#2e7d32',   # Green
        'Manager': '#4caf50',    # Light green
        'Specialist': '#81c784', # Lighter green
        'Coordinator': '#a5d6a7', # Pale green
        'Georgia': '#e3f2fd',    # Light blue
        'Alabama': '#fce4ec',    # Light pink
        'Tennessee': '#f3e5f5',  # Light purple
        'North Carolina': '#fff3e0',  # Light orange
        'South Carolina': '#ffebee',  # Light red
        'Florida N/C': '#e8f5e9',  # Light green
        'Florida South': '#e0f2f1',  # Light teal
        'Puerto Rico': '#e0f7fa',  # Light cyan
        'Default': '#f5f5f5'     # Light gray
    }
    
    # Determine text color based on background
    def get_text_color(bg_color):
        dark_colors = ['#1a472a', '#2e7d32', '#4caf50']
        return 'white' if bg_color in dark_colors else 'black'
    
    # Build hierarchy to determine levels
    hierarchy = {}
    for person in data:
        if person['reportsTo']:
            if person['reportsTo'] not in hierarchy:
                hierarchy[person['reportsTo']] = []
            hierarchy[person['reportsTo']].append(person['id'])
    
    # Add nodes
    for person in data:
        # Create HTML-like label
        label = f'''<<TABLE BORDER="0" CELLBORDER="0" CELLSPACING="1">
        <TR><TD><B>{person['title']}</B></TD></TR>
        <TR><TD><B><FONT POINT-SIZE="12">{person['name']}</FONT></B></TD></TR>'''
        
        if person.get('location'):
            label += f'''<TR><TD><FONT POINT-SIZE="9"><I>{person['location']}</I></FONT></TD></TR>'''
        
        label += '</TABLE>>'
        
        # Determine color based on category or title
        fill_color = colors.get(person.get('category', ''), colors['Default'])
        
        # Check title for level-based coloring
        title_lower = person['title'].lower()
        if 'executive' in title_lower or 'ceo' in title_lower:
            fill_color = colors['Executive']
        elif 'director' in title_lower or 'chief' in title_lower:
            fill_color = colors['Director']
        elif 'manager' in title_lower:
            fill_color = colors['Manager']
        elif 'specialist' in title_lower:
            fill_color = colors['Specialist']
        elif 'coordinator' in title_lower:
            fill_color = colors['Coordinator']
        
        text_color = get_text_color(fill_color)
        
        # Add node
        dot.node(person['id'], label=label, fillcolor=fill_color, fontcolor=text_color)
    
    # Add edges (reporting relationships)
    for person in data:
        if person.get('reportsTo'):
            # Check if supervisor exists
            supervisor_exists = any(p['id'] == person['reportsTo'] for p in data)
            if supervisor_exists:
                dot.edge(person['reportsTo'], person['id'])
    
    # Add title
    dot.attr(label=f'\\n{title}\\n', fontsize='16', labelloc='t', fontname='Arial Bold')
    
    # Render the chart
    dot.render(output_file, cleanup=True, view=False)
    print(f"✅ Org chart saved as {output_file}.{output_format}")
    
    # Also save the source
    with open(f"{output_file}.gv", 'w') as f:
        f.write(dot.source)
    print(f"✅ Graphviz source saved as {output_file}.gv")

def create_sample_csv():
    """Create a sample CSV file for testing"""
    sample_data = [
        ['ID', 'Name', 'Title', 'ReportsTo', 'Location', 'Category'],
        ['ceo', 'C. Smith', 'Regional Executive', '', 'Jacksonville', 'Florida N/C'],
        ['cdo', 'W. Carney', 'Chief Development Officer', 'ceo', 'Jacksonville', 'Florida N/C'],
        ['coo', 'S. Rosario', 'Chief Operating Officer', 'ceo', 'Jacksonville', 'Florida N/C'],
        ['rdo', 'K. Watt', 'Regional Disaster Officer', 'ceo', 'Jacksonville', 'Florida N/C'],
        ['dev1', 'M. Brown', 'Sr Dir of Development', 'cdo', 'Jacksonville', 'Florida N/C'],
        ['dev2', 'J. Moran', 'Dir Major Gifts', 'cdo', 'Jacksonville', 'Florida N/C'],
        ['dev3', 'T. Sweeten', 'Dir Annual Giving', 'cdo', 'Jacksonville', 'Florida N/C'],
        ['hr', 'M. Wilson', 'HR Director', 'coo', 'Jacksonville', 'Florida N/C'],
        ['it', 'J. Chen', 'IT Manager', 'coo', 'Jacksonville', 'Florida N/C'],
        ['deputy', 'M. Holland', 'Deputy RDO', 'rdo', '', 'Florida N/C'],
        ['cdpm1', 'D. McNair', 'Reg DWE Manager', 'rdo', '', 'Florida N/C'],
        ['cdpm2', 'M. Donahue', 'Regional Mass Care Manager', 'rdo', '', 'Florida N/C'],
        ['cdpm3', 'J. Clairday', 'Planning & Situational Awareness Manager', 'rdo', '', 'Florida N/C'],
    ]
    
    with open('sample_org_data.csv', 'w', newline='') as f:
        writer = csv.writer(f)
        writer.writerows(sample_data)
    
    print("✅ Sample CSV created: sample_org_data.csv")
    return 'sample_org_data.csv'

def main():
    """Main function to run the org chart generator"""
    import argparse
    
    parser = argparse.ArgumentParser(description='Generate org charts from CSV/Excel data')
    parser.add_argument('input', nargs='?', help='Input CSV or Excel file')
    parser.add_argument('--format', default='pdf', choices=['pdf', 'png', 'svg'], 
                       help='Output format (default: pdf)')
    parser.add_argument('--output', default='org_chart', help='Output filename (without extension)')
    parser.add_argument('--title', default='Organization Chart', help='Chart title')
    parser.add_argument('--sample', action='store_true', help='Create and use sample data')
    
    args = parser.parse_args()
    
    # Handle sample data
    if args.sample or not args.input:
        input_file = create_sample_csv()
    else:
        input_file = args.input
    
    # Check if file exists
    if not Path(input_file).exists():
        print(f"❌ Error: File '{input_file}' not found")
        sys.exit(1)
    
    # Load data based on file extension
    if input_file.endswith('.csv'):
        data = load_from_csv(input_file)
    elif input_file.endswith(('.xlsx', '.xls')):
        try:
            data = load_from_excel(input_file)
        except ImportError:
            print("❌ Error: pandas and openpyxl required for Excel files")
            print("   Install with: pip install pandas openpyxl")
            sys.exit(1)
    else:
        print(f"❌ Error: Unsupported file type. Use CSV or Excel.")
        sys.exit(1)
    
    if not data:
        print("❌ Error: No data found in file")
        sys.exit(1)
    
    print(f"📊 Loaded {len(data)} positions from {input_file}")
    
    # Generate the chart
    create_org_chart(data, title=args.title, output_format=args.format, output_file=args.output)
    
    print(f"\n✨ Done! Open {args.output}.{args.format} to view your org chart")

if __name__ == "__main__":
    main()