// Project Data
const projects = [
    {
        name: 'VIVIENDA UNIFAMILIAR GRECA',
        area: 80,
        address: 'Camino de Cuchilla Grande - Paraná, Entre Ríos',
        client: 'Greca José Enrique',
        period: 'Abril 2007 - Noviembre 2007',
        status: 'completed',
        type: 'residential',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GONZÁLEZ',
        area: 55,
        address: 'José Ramón Ursini Nº 1906 - Paraná, Entre Ríos',
        client: 'González María Silvia',
        period: 'Octubre 2010 - Abril 2011',
        status: 'completed',
        type: 'residential',
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    },
    // Add more projects here...
];

// State Management
let currentPage = 1;
const projectsPerPage = 9;
let filteredProjects = [...projects];

// DOM Elements
const projectsGrid = document.getElementById('projectsGrid');
const emptyState = document.getElementById('emptyState');
const searchInput = document.getElementById('searchInput');
const statusFilter = document.getElementById('statusFilter');
const typeFilter = document.getElementById('typeFilter');
const prevPageBtn = document.getElementById('prevPage');
const nextPageBtn = document.getElementById('nextPage');
const pageInfo = document.getElementById('pageInfo');

// Helper Functions
function getProjectStatusText(status) {
    return status === 'completed' ? 'Completado' : 'En Construcción';
}

function getProjectTypeText(type) {
    const types = {
        residential: 'Residencial',
        commercial: 'Comercial',
        government: 'Gubernamental'
    };
    return types[type] || type;
}

function createProjectCard(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.name}" class="project-image">
            <div class="project-content">
                <h3 class="project-title">${project.name}</h3>
                <div class="project-info">
                    <div class="info-item">
                        📍 ${project.address}
                    </div>
                    <div class="info-item">
                        👤 ${project.client}
                    </div>
                    <div class="info-item">
                        📅 ${project.period}
                    </div>
                    ${project.area ? `
                        <div class="info-item">
                            🏗️ ${project.area} m² construidos
                        </div>
                    ` : ''}
                </div>
                <div class="tags">
                    <span class="tag tag-status">
                        ${getProjectStatusText(project.status)}
                    </span>
                    <span class="tag tag-type">
                        ${getProjectTypeText(project.type)}
                    </span>
                </div>
            </div>
        </div>
    `;
}

function updatePagination() {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    pageInfo.textContent = `Página ${currentPage} de ${totalPages}`;
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
}

function renderProjects() {
    const startIndex = (currentPage - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;
    const currentProjects = filteredProjects.slice(startIndex, endIndex);

    if (currentProjects.length === 0) {
        projectsGrid.style.display = 'none';
        emptyState.style.display = 'block';
    } else {
        projectsGrid.style.display = 'grid';
        emptyState.style.display = 'none';
        projectsGrid.innerHTML = currentProjects.map(createProjectCard).join('');
    }

    updatePagination();
}

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const statusValue = statusFilter.value;
    const typeValue = typeFilter.value;

    filteredProjects = projects.filter(project => {
        const matchesSearch = 
            project.name.toLowerCase().includes(searchTerm) ||
            project.client.toLowerCase().includes(searchTerm) ||
            project.address.toLowerCase().includes(searchTerm);
        const matchesStatus = statusValue === 'all' || project.status === statusValue;
        const matchesType = typeValue === 'all' || project.type === typeValue;
        
        return matchesSearch && matchesStatus && matchesType;
    });

    currentPage = 1;
    renderProjects();
}

// Event Listeners
searchInput.addEventListener('input', filterProjects);
statusFilter.addEventListener('change', filterProjects);
typeFilter.addEventListener('change', filterProjects);

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderProjects();
    }
});

nextPageBtn.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderProjects();
    }
});

// Initial render
renderProjects();