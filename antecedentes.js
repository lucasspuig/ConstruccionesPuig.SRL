// Project Data
const projects = [
    {
        name: 'REPARACIONES GENERALES EN JUZGADO DE PAZ ORO VERDE',
        
        address: 'Oro Verde, Entre Ríos',
        client: 'Superior Tribunal de Justicia',
        period: 'Agosto 2023 - Finalizada',
        status: 'completed',
        type: 'government',
        image: './assest/juzgado de paz oro verde.jfif'
    },
    {
        name: 'PINTURA FACHADA EDIFICIO TRIBUNALES',
        
        address: 'Paraná, Entre Ríos',
        client: 'Superior Tribunal de Justicia',
        period: 'Enero 2024 - Finalizada',
        status: 'completed',
        type: 'government',
        image: './assest/fachadapoderjudicial.jfif'
    },
    {
        name: 'REFACCIONES EN MUSEO DE LA CIUDAD/ UNIDAD EJECUTORA MUNICIPAL',
        
        address: 'Paraná, Entre Ríos',
        client: 'Municipalidad de Paraná',
        period: 'Enero 2023 - Finalizada',
        status: 'completed',
        type: 'government',
        image: "./assest/museofachada.jfif"
    },

    {
        name: 'REFUNCIONALIZACIÓN PARA MERCADO MULTIPLICAR “C.I.C FLORESTA” ',
        
        address: 'Paraná, Entre Ríos',
        client: 'Municipalidad de Paraná',
        period: 'Agosto 2022 - Finalizada',
        status: 'completed',
        type: 'government',
        image: './assest/cic.jfif'
    },
    {
        name: 'CONSTRUCCIÓN DE SALÓN DE USOS MÚLTIPLES EN ZONA VECINAL OESTE ',
        
        address: 'Paraná, Entre Ríos',
        client: 'Municipalidad de Paraná',
        period: 'Octubre 2022 - Finalizada',
        status: 'completed',
        type: 'government',
        image: './assest/sum costanera oeste.jfif'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR L - T',
        area: 270,
        address: 'San Luis 335 - Paraná, Entre Ríos',
        client: ' Leiss Fabian, Tome Erica',
        period: 'Marzo 2022 - Enero 2024',
        status: 'completed',
        type: 'residential',
        image: './assest/fachadaprincipalsanluis.jfif"'
    },

    {
        name: 'REMODELACIÓN Y CONSTRUCCIÓN DE BAÑOS EN JARDÍN MATERNAL “GAUCHITOS DE LA VIRGEN DEL LUJAN”',
        
        address: 'Paraná, Entre Ríos',
        client: 'Municipalidad de Paraná',
        period: 'Diciembre 2023 - Marzo 2024',
        status: 'completed',
        type: 'government',
        image: './assest/GAUCHITObaños.jfif'
    },


    {
        name: 'INTERVENCIÓN COLUMNAS ALA OESTE Y RECOMPOSICIÓN DE DINTELES VIGAS DE MAMPOSTERÍA',
        
        address: 'Paraná, Entre Ríos',
        client: 'Facultad de Ciencias Económicas',
        period: 'Marzo 2022',
        status: 'completed',
        type: 'government',
        image: './assest/columnas1.jfif'
    },
    {
        name: '1° ETAPA REPARACIÓN DE TECHOS Y BALCONES, AJUSTES DE DESAGUES PLUVIALES, NUEVA VEREDA SEDE CENTRAL COPNAF -EX HOTEL CENTRAL',
        
        address: 'Corrientes 190 esq. Uruguay - Paraná, Entre Ríos',
        
        period: 'Diciembre 2024 - En construcción',
        status: 'in-progress',
        type: 'government',
        image: ''
    },
    {
        name: 'REMODELACIÓN DE LOS BAÑOS DE PLANTA BAJA EN SEDE PARANÁ DE UCA ',
        
        address: 'Paraná, Entre Ríos',
        client: 'Universidad Católica Argentina',
        period: 'Enero 2025 - En construcción',
        status: 'in-progress',
        type: 'government',
        image: ''
    },
    {
        name: 'PINTURA PATIO INTERNO EN SEDE PARANÁ DE UCA ',
        
        address: 'Paraná, Entre Ríos',
        client: 'Universidad Católica Argentina',
        period: 'Enero 2025 - En construcción',
        status: 'En Construcción',
        type: 'government',
        image: './assest/pinturapatiointernouca.jfif'
    },
    {
        name: 'VIVIENDA TRILLIZAS',
        area: 160,
        address: 'Isla Soledad 2320 - Paraná, Entre Ríos',
        client: 'Leiss - Tome',
        period: ' Febrero 2021',
        status: 'completed',
        type: 'residential',
        image: './assest/trillizas.jfif'
    },
    {
        name: 'REMODELACIÓN DE OFICINAS SEGUNDO PISO - EDIFICIO TRIBUNALES PARANÁ',
        address: 'Paraná, Entre Ríos',
        client: 'Tribunales',
        period: 'Agosto 2017',
        status: 'completed',
        type: 'government',
        image: './assest/tribunalessala.jfif'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GRECA',
        area: 80,
        address: 'Camino de Cuchilla Grande - Paraná, Entre Ríos',
        client: 'Greca José Enrique',
        period: 'Abril 2007 - Noviembre 2007',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GONZÁLEZ',
        area: 55,
        address: 'José Ramón Ursini Nº 1906 - Paraná, Entre Ríos',
        client: 'González María Silvia',
        period: 'Octubre 2010 - Abril 2011',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDAS UNIFAMILIARES OJEDA',
        area: 90,
        address: 'Basabilbaso 1052 - Paraná, Entre Ríos.',
        client: 'Ojeda Emilio',
        period: 'Octubre 2009 - Abril 2010',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GONCEBATT - SCHMIDT',
        area: 52,
        address: 'Av. J. Lino Churruarin Nº 1572 - Paraná, Entre Ríos.',
        client: 'Goncebatt Marina Soledad, Schmidt Franco Matías',
        period: 'Mayo 2011 - Diciembre 2011.',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR HEIT - SPAHN',
        area:  165 ,
        address: 'Calle Pública 1538 Nº 475 - Paraná, Entre Ríos',
        client: 'Heit Miguel Eugenio, Spahn Silvia Gisela.',
        period: 'Agosto 2010 - Abril 2011',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR ZIRPOLI - RAMIREZ',
        area: 120,
        address: 'Juan Romualdo Báez Nº 1257 - Paraná, Entre Ríos',
        client: 'Zirpoli Miguel Ángel, Ramírez Adriana Verónica',
        period: 'Octubre 2012 - Abril 2013',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR CARBO - NESA',
        area: 160,
        address: 'Calle Pública 1580 Nº 2753 - Paraná, Entre Ríos',
        client: ' Carbo Sebastián, Nesa María Celeste',
        period: 'Junio 2012 - Enero 2014',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GEIST',
        area:  60,
        address: 'Las Dalias 30 - Oro Verde, Entre Ríos',
        client: 'Geist Matías Leonardo',
        period: 'Noviembre 2013 - Mayo 2014',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR SOSA',
        area: 60,
        address: 'Calle Pública 1506 Nº 1513 - Paraná, Entre Ríos',
        client: 'Sosa Cristian Andrés',
        period: 'Septiembre 2012 - Marzo 2013',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR OSMAN - ACOSTA',
        area: 60,
        address: 'Antonio Bonell Nº 887 - Paraná, Entre Ríos',
        client: 'Osman Nicolás Gabriel, Acosta María Salome',
        period: 'Diciembre 2013 - Julio 2014',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR SARLI - PRIETO',
        area: 165,
        address: 'Av. Zanni 1100 Lote 32 - Paraná, Entre Ríos',
        client: 'Sarli Scesa Gerardo Daniel, Prieto Antonella',
        period: 'Abril 2013 - Diciembre 2013',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR BENÍTEZ',
        area: 70 ,
        address: 'Ciudad del Federal 163 - Colonia Avellaneda, Entre Ríos',
        client: ': Benítez María Florencia, De Carlo Giovann',
        period: ' Diciembre 2014 - Octubre 2015',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR CARABALLO',
        area: 70,
        address: 'Las Torcazas S/N - Colonia Avellaneda, Entre Ríos',
        client: 'Caravallo Hugo Héctor',
        period: 'Noviembre 2014 - Julio 2015',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR ENRIQUE',
        area: 83,
        address: 'Roque Saez Peña esq. Chile - San Benito, Entre Ríos',
        client: 'Enrique Javier Fernando Antonio',
        period: 'Agosto 2015',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR TUYARET',
        area: 57,
        address: 'Juan Chiriviro y Las Azaleas - Colonia Avellaneda, Entre Ríos',
        client: 'Tuyaret Valeria',
        period: 'Junio 2015 - Enero 2016',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR GANDOLFO',
        area: 75,
        address: 'Calle Pública 1610 Nº 3748 - Paraná, Entre Ríos',
        client: 'Gandolfo German Eduardo',
        period: 'Noviembre 2015 ',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR DIAZ VERGARA',
        area: 70,
        address: 'Juan Domingo Perón Nº 267 - Colonia Avellaneda, Entre Ríos',
        client: 'Díaz Vergara Iván Josué',
        period: ' Agosto 2015',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR DIAZ COMA ',
        area: 50,
        address: 'Av. Zaba Hernandez y Concordia - San Benito, Entre Ríos',
        client: 'Comas Cancio Eliana Sofía',
        period: 'Febrero 2016',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'VIVIENDA UNIFAMILIAR CESARI',
        area: 60,
        address: 'Pte. Alfonsin S/N - San Benito, Entre Ríos',
        client: 'Cesari Franco',
        period: 'Mayo 2016',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'TRATAMIENTO DE FACHADA DE SALA DE EXPOSICIONES - COMPLEJO SOCIAL - TÚNEL SUBFLUVIAL',
        address: 'Paraná, Entre Ríos',
        client: 'Túnel Subfluvial',
        period: ' Marzo 2017',
        status: 'completed',
        type: 'government',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'LOCAL COMERCIAL ALMAFUERTE',
        area: 55,
        address: 'Almafuerte 896 - Paraná, Entre Ríos',
        client: 'Loyber Francisco',
        period: 'Enero 2017',
        status: 'completed',
        type: 'commercial',
        image: './assest/azullogopuig.png'
    },

    {
        name: 'VIVIENDA UNIFAMILIAR VICENTIN',
        area: 120,
        address: 'Calle Pública S/N - Paraná, Entre Ríos',
        client: 'Vicentin Sebastian',
        period: 'Marzo 2017',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'TRABAJOS DE REPARACIONES VARIAS EN JUZGADO DE PAZ DE VILLA ALCARAZ',
        
        address: 'Villa Alcaraz, Entre Ríos',
        client: 'Juzgado de Paz',
        period: 'Noviembre 2017',
        status: 'completed',
        type: 'government',
        image: './assest/azullogopuig.png'
    },
    {
        name: 'REMODELACIÓN OFICINAS VARIAS SEGUNDO PISO -  SALA DE AUDIENCIAS CIVIL Y COMERCIAL ',
        
        address: 'Paraná, Entre Ríos.',
        client: 'Tribunales',
        period: 'Diciembre 2018',
        status: 'completed',
        type: 'government',
        image: './assest/azullogopuig.png'
    },
  
    {
        name: 'VIVIENDA UNIFAMILIAR RODRIGUEZ',
        area: 200,
        address: 'Roustan 2560 - Paraná, Entre Ríos',
        client: ': Rodriguez Valeria',
        period: 'Marzo 2020',
        status: 'completed',
        type: 'residential',
        image: './assest/azullogopuig.png'
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