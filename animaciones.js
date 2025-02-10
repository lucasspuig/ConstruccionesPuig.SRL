
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
