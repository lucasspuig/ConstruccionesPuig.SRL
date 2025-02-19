
    // Espera a que la página se cargue completamente
    window.addEventListener('load', function () {
        const logo = document.querySelector('.logosecundario');
        logo.style.animation = 'fadeInUp 2s forwards'; // Inicia la animación al cargar
    });


    const filtersContainer = document.querySelector('.filters-container');

    // Función para comprobar si un elemento está en la vista
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top < window.innerHeight && // Está en la parte visible de la ventana
            rect.bottom >= 0 // No ha salido completamente por la parte inferior
        );
    }

    // Función para animar la sección de filtros al hacer scroll
    function animateFiltersOnScroll() {
        if (isElementInViewport(filtersContainer)) {
            filtersContainer.classList.add('show'); // Activa la animación
            window.removeEventListener('scroll', animateFiltersOnScroll); // Desactiva el evento una vez que la animación se ha activado
        }
    }

    // Añadir el evento de scroll
    window.addEventListener('scroll', animateFiltersOnScroll);
    
    // Llama a la función una vez para comprobar si está visible al cargar
    animateFiltersOnScroll();



    // Add to script.js

// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector('.theme-toggle i');
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      icon.classList.remove('fa-sun');
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }
  
  // Function to set initial theme
  function setInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    const icon = document.querySelector('.theme-toggle i');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-mode');
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
    } else {
      icon.classList.add('fa-moon');
    }
  }
  
  // Add event listener when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    setInitialTheme();
  });