// DOM Elements
const totalRoutesEl = document.getElementById('total-routes');
const completedRoutesEl = document.getElementById('completed-routes');
const pendingRoutesEl = document.getElementById('pending-routes');
const progressPercentageEl = document.getElementById('progress-percentage');
const teamGridEl = document.getElementById('team-grid');
const categoryBoxesEl = document.getElementById('category-boxes');
const categoryFilterEl = document.getElementById('category-filter');
const statusFilterEl = document.getElementById('status-filter');
const teamFilterEl = document.getElementById('team-filter');
const searchInputEl = document.getElementById('search-input');

// Category information
const categoryInfo = {
  corePagesRoutes: {
    title: 'Core Pages',
    icon: 'fa-home'
  },
  capabilityRoutes: {
    title: 'Capability Routes',
    icon: 'fa-cogs'
  },
  technologyRoutes: {
    title: 'Technology Routes',
    icon: 'fa-microchip'
  },
  awsServicesRoutes: {
    title: 'AWS Services',
    icon: 'fa-cloud'
  },
  awsSdpRoutes: {
    title: 'AWS SDP Offerings',
    icon: 'fa-server'
  },
  productRoutes: {
    title: 'Products',
    icon: 'fa-box'
  },
  caseStudyRoutes: {
    title: 'Case Studies',
    icon: 'fa-file-alt'
  },
  redirectsRoutes: {
    title: 'Redirects',
    icon: 'fa-exchange-alt'
  },
  specialHandlersRoutes: {
    title: 'Special Handlers',
    icon: 'fa-tools'
  }
};

// Initialize the dashboard
function initDashboard() {
  // Populate team filter dropdown
  populateTeamFilter();
  
  // Calculate and display overall stats
  updateOverallStats();
  
  // Render team progress cards
  renderTeamProgress();
  
  // Render category boxes
  renderCategoryBoxes();
  
  // Add event listeners for filters
  addEventListeners();
}

// Populate team filter dropdown
function populateTeamFilter() {
  migrationData.teamMembers.forEach(member => {
    const option = document.createElement('option');
    option.value = member.name;
    option.textContent = member.name;
    teamFilterEl.appendChild(option);
  });
}

// Calculate and display overall stats
function updateOverallStats() {
  let totalRoutes = 0;
  let completedRoutes = 0;
  
  // Count routes from all categories
  for (const category in migrationData) {
    if (category === 'teamMembers') continue;
    
    const routes = migrationData[category];
    totalRoutes += routes.length;
    completedRoutes += routes.filter(route => route.status === 'Done').length;
  }
  
  const pendingRoutes = totalRoutes - completedRoutes;
  const progressPercentage = Math.round((completedRoutes / totalRoutes) * 100);
  
  // Update DOM elements with counts
  totalRoutesEl.textContent = totalRoutes;
  completedRoutesEl.textContent = completedRoutes;
  pendingRoutesEl.textContent = pendingRoutes;
  progressPercentageEl.textContent = `${progressPercentage}%`;
}

// Render team progress cards
function renderTeamProgress() {
  teamGridEl.innerHTML = '';
  
  migrationData.teamMembers.forEach(member => {
    const { name, tasks, completed, pending } = member;
    const progressPercentage = Math.round((completed / tasks) * 100);
    
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <div class="team-name">
        ${name} <span class="progress-percentage">${progressPercentage}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-bar-fill" style="width: ${progressPercentage}%;"></div>
      </div>
      <div class="progress-details">
        <span>Completed: ${completed}</span>
        <span>Pending: ${pending}</span>
      </div>
    `;
    
    teamGridEl.appendChild(teamCard);
  });
}

// Render category boxes
function renderCategoryBoxes() {
  categoryBoxesEl.innerHTML = '';
  
  for (const category in migrationData) {
    if (category === 'teamMembers') continue;
    
    const routes = migrationData[category];
    if (!routes || routes.length === 0) continue;
    
    const info = categoryInfo[category];
    const completedRoutes = routes.filter(route => route.status === 'Done').length;
    const pendingRoutes = routes.length - completedRoutes;
    const progressPercentage = Math.round((completedRoutes / routes.length) * 100);
    
    const categoryBox = document.createElement('div');
    categoryBox.className = 'category-box';
    categoryBox.dataset.category = category;
    
    categoryBox.innerHTML = `
      <div class="category-header">
        <div class="category-title">
          <i class="fas ${info.icon}"></i> ${info.title}
        </div>
        <div class="category-stats">
          <div class="category-stat">
            <i class="fas fa-check"></i> ${completedRoutes}
          </div>
          <div class="category-stat">
            <i class="fas fa-clock"></i> ${pendingRoutes}
          </div>
          <div class="category-stat">
            <i class="fas fa-chart-line"></i> ${progressPercentage}%
          </div>
        </div>
      </div>
      <div class="task-list">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Route</th>
              <th>Status</th>
              <th>Assigned To</th>
            </tr>
          </thead>
          <tbody>
            ${routes.map(route => `
              <tr data-id="${route.id}" data-status="${route.status}" data-assigned="${route.assignedTo}">
                <td>${route.id}</td>
                <td title="${route.notes}">${route.route}</td>
                <td><span class="status-badge status-${route.status.toLowerCase()}">${route.status}</span></td>
                <td>${route.assignedTo}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
    
    categoryBoxesEl.appendChild(categoryBox);
  }
}

// Add event listeners for filters
function addEventListeners() {
  // Search input
  searchInputEl.addEventListener('input', filterRoutes);
  
  // Category filter
  categoryFilterEl.addEventListener('change', filterRoutes);
  
  // Status filter
  statusFilterEl.addEventListener('change', filterRoutes);
  
  // Team filter
  teamFilterEl.addEventListener('change', filterRoutes);
}

// Filter routes based on search and filter selections
function filterRoutes() {
  const searchTerm = searchInputEl.value.toLowerCase();
  const categoryFilter = categoryFilterEl.value;
  const statusFilter = statusFilterEl.value;
  const teamFilter = teamFilterEl.value;
  
  // Show all category boxes initially
  document.querySelectorAll('.category-box').forEach(box => {
    box.style.display = 'block';
  });
  
  // Filter by category if needed
  if (categoryFilter !== 'all') {
    document.querySelectorAll('.category-box').forEach(box => {
      if (box.dataset.category !== categoryFilter) {
        box.style.display = 'none';
      }
    });
  }
  
  // Filter individual routes within visible category boxes
  document.querySelectorAll('.category-box:not([style*="display: none"]) tbody tr').forEach(row => {
    let shouldShow = true;
    
    // Filter by status
    if (statusFilter !== 'all' && row.dataset.status !== statusFilter) {
      shouldShow = false;
    }
    
    // Filter by team member
    if (teamFilter !== 'all' && !row.dataset.assigned.includes(teamFilter)) {
      shouldShow = false;
    }
    
    // Filter by search term
    if (searchTerm !== '') {
      const rowText = row.textContent.toLowerCase();
      if (!rowText.includes(searchTerm)) {
        shouldShow = false;
      }
    }
    
    // Show or hide the row
    row.style.display = shouldShow ? '' : 'none';
  });
  
  // Hide empty categories (where all routes are filtered out)
  document.querySelectorAll('.category-box:not([style*="display: none"])').forEach(box => {
    const visibleRows = box.querySelectorAll('tbody tr:not([style*="display: none"])');
    if (visibleRows.length === 0) {
      box.style.display = 'none';
    }
  });
  
  // Highlight search matches if there's a search term
  if (searchTerm) {
    highlightSearchMatches(searchTerm);
  }
}

// Highlight search term matches in the table
function highlightSearchMatches(term) {
  document.querySelectorAll('.category-box:not([style*="display: none"]) tbody tr:not([style*="display: none"]) td').forEach(cell => {
    const originalText = cell.innerHTML;
    
    // Skip cells that already have HTML (like status badges)
    if (originalText.includes('<span class="status-badge')) return;
    
    const highlightedText = originalText.replace(
      new RegExp(term, 'gi'),
      match => `<mark>${match}</mark>`
    );
    
    cell.innerHTML = highlightedText;
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initDashboard);