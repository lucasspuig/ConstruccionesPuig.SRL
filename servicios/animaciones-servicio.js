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
 

