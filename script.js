// Global variables
let currentZoom = 1;
let isDragging = false;
let startX, startY, scrollLeft, scrollTop;
let expandedNodes = new Set();
let totalNodesCount = 0;
let currentRegionFilter = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    renderOrgChart(orgData);
    setupEventListeners();
    updateStats();
    hideLoadingOverlay();
    animateChart();
});

// Create floating particles in background
function createParticles() {
    const particlesBg = document.getElementById('particles-bg');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 1}px;
            height: ${Math.random() * 4 + 1}px;
            background: rgba(237, 27, 46, ${Math.random() * 0.5 + 0.2});
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
            box-shadow: 0 0 10px rgba(237, 27, 46, 0.5);
        `;
        particlesBg.appendChild(particle);
    }
    
    // Add CSS animation for floating
    if (!document.querySelector('#particleAnimation')) {
        const style = document.createElement('style');
        style.id = 'particleAnimation';
        style.textContent = `
            @keyframes float {
                0% { transform: translateY(100vh) translateX(-50px) rotate(0deg); opacity: 0; }
                10% { opacity: 1; }
                90% { opacity: 1; }
                100% { transform: translateY(-100vh) translateX(50px) rotate(360deg); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
}

// Render the org chart
function renderOrgChart(data, parentElement = null, level = 0) {
    const container = parentElement || document.getElementById('orgChart');
    
    if (!parentElement) {
        container.innerHTML = '';
        totalNodesCount = 0;
        expandedNodes.clear();
    }
    
    const node = createNode(data, level);
    container.appendChild(node);
    
    if (data.children && data.children.length > 0) {
        const childrenContainer = document.createElement('div');
        childrenContainer.className = 'node-children';
        node.appendChild(childrenContainer);
        
        data.children.forEach((child, index) => {
            setTimeout(() => {
                renderOrgChart(child, childrenContainer, level + 1);
            }, index * 50);
        });
        
        // Add initial expanded state for top levels
        if (level < 2) {
            expandedNodes.add(node.dataset.nodeId);
        } else {
            node.classList.add('collapsed');
        }
    }
    
    totalNodesCount++;
}

// Create a node element
function createNode(data, level) {
    const node = document.createElement('div');
    node.className = `node ${data.type || 'staff'}`;
    node.dataset.nodeId = `node-${Math.random().toString(36).substr(2, 9)}`;
    node.dataset.region = data.region || 'all';
    node.dataset.level = level;
    
    const content = document.createElement('div');
    content.className = 'node-content';
    
    // Add 3D rotation on mouse move
    content.addEventListener('mousemove', (e) => {
        const rect = content.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        const rotateX = (y - 0.5) * 10;
        const rotateY = (x - 0.5) * 10;
        content.style.transform = `translateY(-5px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    
    content.addEventListener('mouseleave', () => {
        content.style.transform = 'translateY(0) rotateX(0) rotateY(0)';
    });
    
    // Add content
    const title = document.createElement('div');
    title.className = 'node-title';
    title.textContent = data.title || '';
    
    const name = document.createElement('div');
    name.className = 'node-name';
    name.textContent = data.name || '';
    
    if (data.subtitle) {
        const subtitle = document.createElement('div');
        subtitle.className = 'node-location';
        subtitle.textContent = data.subtitle;
        content.appendChild(subtitle);
    }
    
    content.appendChild(title);
    content.appendChild(name);
    
    if (data.location) {
        const location = document.createElement('div');
        location.className = 'node-location';
        location.textContent = data.location;
        content.appendChild(location);
    }
    
    node.appendChild(content);
    
    // Add toggle button if has children
    if (data.children && data.children.length > 0) {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'toggle-btn';
        toggleBtn.textContent = level < 2 ? '-' : '+';
        toggleBtn.onclick = (e) => {
            e.stopPropagation();
            toggleNode(node);
        };
        content.appendChild(toggleBtn);
    }
    
    // Add click to show details
    content.onclick = () => showNodeDetails(data);
    
    return node;
}

// Toggle node expansion
function toggleNode(node) {
    const isExpanded = !node.classList.contains('collapsed');
    const toggleBtn = node.querySelector('.toggle-btn');
    
    if (isExpanded) {
        node.classList.add('collapsed');
        toggleBtn.textContent = '+';
        expandedNodes.delete(node.dataset.nodeId);
        
        // Animate collapse
        const children = node.querySelector('.node-children');
        if (children) {
            children.style.animation = 'collapseChildren 0.3s ease-out';
            setTimeout(() => {
                children.style.display = 'none';
            }, 300);
        }
    } else {
        node.classList.remove('collapsed');
        toggleBtn.textContent = '-';
        expandedNodes.add(node.dataset.nodeId);
        
        // Animate expand
        const children = node.querySelector('.node-children');
        if (children) {
            children.style.display = 'flex';
            children.style.animation = 'expandChildren 0.3s ease-out';
        }
    }
    
    updateStats();
}

// Show node details in tooltip
function showNodeDetails(data) {
    const tooltip = document.getElementById('tooltip');
    tooltip.innerHTML = `
        <h3>${data.name}</h3>
        <p><strong>${data.title}</strong></p>
        ${data.location ? `<p>📍 ${data.location}</p>` : ''}
        ${data.subtitle ? `<p>${data.subtitle}</p>` : ''}
        <p style="margin-top: 10px; font-size: 0.9em; color: rgba(255,255,255,0.6);">
            Click to view more details
        </p>
    `;
    tooltip.classList.add('visible');
    
    setTimeout(() => {
        tooltip.classList.remove('visible');
    }, 3000);
}

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchBox = document.getElementById('search');
    searchBox.addEventListener('input', (e) => {
        searchNodes(e.target.value);
    });
    
    // Expand/Collapse All
    document.getElementById('expandAll').addEventListener('click', expandAll);
    document.getElementById('collapseAll').addEventListener('click', collapseAll);
    
    // Reset View
    document.getElementById('resetView').addEventListener('click', resetView);
    
    // Region Filter
    document.getElementById('regionFilter').addEventListener('change', (e) => {
        filterByRegion(e.target.value);
    });
    
    // Zoom controls
    document.getElementById('zoomIn').addEventListener('click', () => zoom(0.1));
    document.getElementById('zoomOut').addEventListener('click', () => zoom(-0.1));
    
    // Pan functionality
    setupPanAndDrag();
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            if (e.key === '=' || e.key === '+') {
                e.preventDefault();
                zoom(0.1);
            } else if (e.key === '-') {
                e.preventDefault();
                zoom(-0.1);
            } else if (e.key === '0') {
                e.preventDefault();
                resetView();
            }
        }
    });
    
    // Tooltip positioning
    document.addEventListener('mousemove', (e) => {
        const tooltip = document.getElementById('tooltip');
        if (tooltip.classList.contains('visible')) {
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.style.top = `${e.clientY + 10}px`;
        }
    });
}

// Search functionality
function searchNodes(query) {
    const nodes = document.querySelectorAll('.node');
    const searchTerm = query.toLowerCase();
    
    // Clear previous highlights
    nodes.forEach(node => {
        node.querySelector('.node-content').classList.remove('highlight');
    });
    
    if (searchTerm) {
        nodes.forEach(node => {
            const content = node.textContent.toLowerCase();
            if (content.includes(searchTerm)) {
                const nodeContent = node.querySelector('.node-content');
                nodeContent.classList.add('highlight');
                
                // Expand parent nodes if collapsed
                let parent = node.parentElement;
                while (parent) {
                    if (parent.classList.contains('node')) {
                        parent.classList.remove('collapsed');
                        const toggleBtn = parent.querySelector('.toggle-btn');
                        if (toggleBtn) toggleBtn.textContent = '-';
                    }
                    parent = parent.parentElement;
                }
                
                // Scroll into view
                node.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }
}

// Expand all nodes
function expandAll() {
    showLoadingOverlay();
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node, index) => {
        setTimeout(() => {
            if (node.querySelector('.toggle-btn')) {
                node.classList.remove('collapsed');
                const toggleBtn = node.querySelector('.toggle-btn');
                if (toggleBtn) toggleBtn.textContent = '-';
                expandedNodes.add(node.dataset.nodeId);
                
                const children = node.querySelector('.node-children');
                if (children) {
                    children.style.display = 'flex';
                }
            }
            
            if (index === nodes.length - 1) {
                updateStats();
                hideLoadingOverlay();
            }
        }, index * 10);
    });
}

// Collapse all nodes
function collapseAll() {
    const nodes = document.querySelectorAll('.node');
    nodes.forEach((node) => {
        if (parseInt(node.dataset.level) > 1) {
            node.classList.add('collapsed');
            const toggleBtn = node.querySelector('.toggle-btn');
            if (toggleBtn) toggleBtn.textContent = '+';
            expandedNodes.delete(node.dataset.nodeId);
            
            const children = node.querySelector('.node-children');
            if (children) {
                children.style.display = 'none';
            }
        }
    });
    updateStats();
}

// Filter by region
function filterByRegion(region) {
    currentRegionFilter = region;
    const nodes = document.querySelectorAll('.node');
    
    nodes.forEach(node => {
        if (region === 'all' || node.dataset.region === region || node.dataset.region === 'all') {
            node.style.display = 'inline-block';
            node.style.opacity = '1';
        } else {
            node.style.opacity = '0.2';
        }
    });
    
    document.getElementById('selectedRegion').textContent = 
        region === 'all' ? 'All' : region.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

// Zoom functionality
function zoom(delta) {
    currentZoom = Math.max(0.5, Math.min(2, currentZoom + delta));
    const chart = document.getElementById('orgChart');
    chart.style.transform = `scale(${currentZoom})`;
    document.getElementById('zoomLevel').textContent = `${Math.round(currentZoom * 100)}%`;
    updateMiniMap();
}

// Reset view
function resetView() {
    currentZoom = 1;
    const chart = document.getElementById('orgChart');
    const container = document.getElementById('chartContainer');
    
    chart.style.transform = 'scale(1)';
    container.scrollTo({
        top: 0,
        left: (container.scrollWidth - container.clientWidth) / 2,
        behavior: 'smooth'
    });
    
    document.getElementById('zoomLevel').textContent = '100%';
    document.getElementById('regionFilter').value = 'all';
    filterByRegion('all');
    updateMiniMap();
}

// Setup pan and drag
function setupPanAndDrag() {
    const container = document.getElementById('chartContainer');
    
    container.addEventListener('mousedown', (e) => {
        if (e.target === container || e.target.closest('.org-chart')) {
            isDragging = true;
            container.style.cursor = 'grabbing';
            startX = e.pageX - container.offsetLeft;
            startY = e.pageY - container.offsetTop;
            scrollLeft = container.scrollLeft;
            scrollTop = container.scrollTop;
        }
    });
    
    container.addEventListener('mouseleave', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mouseup', () => {
        isDragging = false;
        container.style.cursor = 'grab';
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const y = e.pageY - container.offsetTop;
        const walkX = (x - startX) * 1.5;
        const walkY = (y - startY) * 1.5;
        container.scrollLeft = scrollLeft - walkX;
        container.scrollTop = scrollTop - walkY;
        updateMiniMap();
    });
}

// Update statistics
function updateStats() {
    document.getElementById('totalNodes').textContent = totalNodesCount;
    document.getElementById('expandedNodes').textContent = expandedNodes.size;
}

// Update mini map
function updateMiniMap() {
    const container = document.getElementById('chartContainer');
    const miniViewport = document.querySelector('.mini-viewport');
    
    const scaleX = 200 / container.scrollWidth;
    const scaleY = 150 / container.scrollHeight;
    
    const viewportWidth = (container.clientWidth / container.scrollWidth) * 200;
    const viewportHeight = (container.clientHeight / container.scrollHeight) * 150;
    const viewportLeft = (container.scrollLeft / container.scrollWidth) * 200;
    const viewportTop = (container.scrollTop / container.scrollHeight) * 150;
    
    miniViewport.style.width = `${viewportWidth}px`;
    miniViewport.style.height = `${viewportHeight}px`;
    miniViewport.style.left = `${viewportLeft}px`;
    miniViewport.style.top = `${viewportTop}px`;
}

// Show/hide loading overlay
function showLoadingOverlay() {
    document.getElementById('loadingOverlay').classList.add('active');
}

function hideLoadingOverlay() {
    setTimeout(() => {
        document.getElementById('loadingOverlay').classList.remove('active');
    }, 500);
}

// Animate chart on load
function animateChart() {
    const chart = document.getElementById('orgChart');
    chart.style.animation = 'chartAppear 1s ease-out';
    
    // Add CSS animation if not exists
    if (!document.querySelector('#chartAnimation')) {
        const style = document.createElement('style');
        style.id = 'chartAnimation';
        style.textContent = `
            @keyframes chartAppear {
                from {
                    opacity: 0;
                    transform: scale(0.9) rotateX(10deg);
                }
                to {
                    opacity: 1;
                    transform: scale(1) rotateX(0);
                }
            }
            @keyframes expandChildren {
                from {
                    opacity: 0;
                    transform: scaleY(0);
                    transform-origin: top;
                }
                to {
                    opacity: 1;
                    transform: scaleY(1);
                }
            }
            @keyframes collapseChildren {
                from {
                    opacity: 1;
                    transform: scaleY(1);
                    transform-origin: top;
                }
                to {
                    opacity: 0;
                    transform: scaleY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Start mini map updates
    setInterval(updateMiniMap, 100);
}