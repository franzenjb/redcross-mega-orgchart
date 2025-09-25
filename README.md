# Red Cross Mega Org Chart

An ultra-cool interactive organizational chart visualization for the American Red Cross SE & Caribbean Division.

## Features

### Interactive Visualization
- **3D Transformations**: Nodes respond to mouse movements with realistic 3D rotations
- **Glassmorphism Design**: Modern frosted glass effect with blur and transparency
- **Particle Background**: Animated floating particles for dynamic visual appeal
- **Smooth Animations**: Every interaction is beautifully animated

### Navigation & Controls
- **Expand/Collapse**: Click toggle buttons to show or hide branches
- **Smart Search**: Real-time search with automatic expansion of parent nodes
- **Region Filter**: Filter by specific regions (Georgia, Alabama/Mississippi, etc.)
- **Zoom Controls**: Zoom in/out with buttons or keyboard shortcuts (Ctrl/Cmd +/-)
- **Pan & Drag**: Click and drag to navigate the chart
- **Mini Map**: Overview of the entire chart with viewport indicator

### Data Visualization
- **Multi-Region Support**: Combines all regional organizational structures
- **Role Hierarchy**: Visual distinction between executives, managers, and staff
- **Location Information**: Shows office locations for personnel
- **Real-time Statistics**: Live counters for total positions and expanded nodes

### Keyboard Shortcuts
- `Ctrl/Cmd + +`: Zoom in
- `Ctrl/Cmd + -`: Zoom out
- `Ctrl/Cmd + 0`: Reset view

## Technology Stack
- Pure HTML5, CSS3, and JavaScript
- No external dependencies
- Mobile-responsive design
- GitHub Pages deployment

## Live Demo

Visit: [https://franzenjb.github.io/redcross-mega-orgchart/](https://franzenjb.github.io/redcross-mega-orgchart/)

## Local Development

1. Clone the repository:
```bash
git clone https://github.com/franzenjb/redcross-mega-orgchart.git
```

2. Open `index.html` in your browser

That's it! No build process or dependencies required.

## Structure

```
redcross-mega-orgchart/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── orgData.js          # Organizational data structure
└── README.md           # Documentation
```

## Customization

### Adding New Regions
Edit `orgData.js` and add new region objects to the children array:

```javascript
{
    name: "Regional Leadership",
    title: "New Region",
    type: "executive",
    region: "new-region",
    children: [...]
}
```

### Styling
Modify CSS variables in `styles.css`:

```css
:root {
    --primary: #ED1B2E;      /* Red Cross red */
    --secondary: #6B1F23;     /* Dark red */
    --accent: #FF6B6B;        /* Light red */
}
```

## Performance

- Optimized animations using CSS transforms
- Efficient DOM manipulation
- Lazy rendering for large datasets
- Hardware-accelerated graphics

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT License - Feel free to use and modify for your organization!

---

Created with passion for the American Red Cross