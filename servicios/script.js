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
