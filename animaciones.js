
//animacion para el titulo de proyectos
document.addEventListener("DOMContentLoaded", () => {
    const titulo = document.querySelector("h1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                titulo.classList.add("visible"); // Agrega la clase cuando el título está en pantalla
            }
        });
    }, {
        threshold: 0.6 // Se activa cuando el 50% del título es visible
    });

    observer.observe(titulo);
});

//animaciones para la carta de proyectos
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".project-card1");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible"); // Agrega la clase cuando la carta está en pantalla
            }
        });
    }, {
        threshold: 0.4// Se activa cuando el 30% de la carta es visible
    });

    cards.forEach(card => observer.observe(card));
});

//animacion para el boton "ver mas " de proyectos
document.addEventListener("DOMContentLoaded", () => {
    const boton = document.querySelector(".ver-mas-btn");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                boton.classList.add("visible"); // Activa la animación
            }
        });
    }, {
        threshold: 0.6 // Se activa cuando el 60% del botón es visible
    });

    observer.observe(boton);
});


//fotter
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer-content");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.classList.add("visible"); // Activa la animación
            }
        });
    }, {
        threshold: 0.8 // Se activa cuando el 50% del footer es visible
    });

    observer.observe(footer);
});
 

//contador 
document.addEventListener("DOMContentLoaded", () => {
    const statItems = document.querySelectorAll(".stat-item");

    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("visible");
                }, index * 300); // Aumenta el delay para que aparezcan una por una
            }
        });
    }, {
        threshold: 0.4 // Se activa cuando el 40% del elemento es visible
    });

    statItems.forEach(item => observer.observe(item));
});



//boton ver mas

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        document.querySelector('.ver-mas-btn').classList.add('visible');
    }, 100);
});



       

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



//animaciones asesorias//
  document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".asesorias-header");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                header.classList.add("visible");
                observer.unobserve(header); // Deja de observar una vez activado
            }
        });
    }, { threshold: 0.9 });

    observer.observe(header);
});
///animaciones asesoria///
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".asesoria-card");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target); // Deja de observar una vez activado
            }
        });
    }, { threshold: 0.8 });

    cards.forEach(card => observer.observe(card));
});
