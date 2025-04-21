(function () {
    const openButton = document.querySelector('.nav__menu'); // Botón para abrir el menú
    const menu = document.querySelector('.nav__link--menu'); // Menú de navegación
    const closeButton = document.querySelector('.nav__close'); // Botón para cerrar el menú
    const menuLinks = document.querySelectorAll('.nav__link--menu a'); // Enlaces dentro del menú

    if (openButton && menu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show'); // Muestra el menú
        });
    }

    if (closeButton && menu) {
        closeButton.addEventListener('click', () => {
            menu.classList.remove('nav__link--show'); // Oculta el menú
        });
    }

    // Cierra el menú al hacer clic en un enlace, excepto si es un dropdown
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (!e.target.closest('.dropdown')) { 
                menu.classList.remove('nav__link--show');
            }
        });
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !openButton.contains(e.target)) {
            menu.classList.remove('nav__link--show');
        }
    });

})();




document.addEventListener("DOMContentLoaded", function () {
    let lastScrollY = window.scrollY;
    const nav = document.querySelector(".nav");

    window.addEventListener("scroll", () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            // Si el usuario baja, ocultamos la barra de navegación
            nav.classList.add("nav--hidden");
        } else {
            // Si el usuario sube, mostramos la barra y agregamos el fondo oscuro
            nav.classList.remove("nav--hidden");
            nav.classList.add("nav--scrolled");
        }

        // Si está en la parte superior, quitamos el fondo oscuro
        if (currentScrollY === 0) {
            nav.classList.remove("nav--scrolled");
        }

        lastScrollY = currentScrollY;
    });
});


const dropdownTriggers = document.querySelectorAll('.dropdown__trigger');

dropdownTriggers.forEach(trigger => {
    trigger.addEventListener('click', e => {
        e.preventDefault();
        const parent = trigger.closest('.dropdown');
        parent.classList.toggle('active');
    });
});


