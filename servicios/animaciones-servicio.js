// Función para cargar CSS dinámicamente
function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
}

document.addEventListener("DOMContentLoaded", () => {
    // Cargar los archivos CSS necesarios
    loadCSS('./vistamobile.css');
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css');
    loadCSS('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    loadCSS('https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css');
    
    // Marcar el body como cargado
    document.body.classList.add('loaded');

    // Animación del título principal con retraso inicial
    const titleSpans = document.querySelectorAll('.titulos h1 span');
    titleSpans.forEach((span, index) => {
        // Retraso inicial de 0.5s + 0.04s por cada letra
        span.style.animationDelay = `${0.5 + (index * 0.04)}s`;
        span.classList.add('fade-in-letter');
    });

    // Animación del subtítulo
    const subtitleSpans = document.querySelectorAll('.subtip span');
    subtitleSpans.forEach((span, index) => {
        // El subtítulo comienza 1.5s después del inicio
        span.style.animationDelay = `${1.5 + (index * 0.05)}s`;
        span.classList.add('fade-in-subtitle');
    });

    // Asegurarse de que las comas tengan la misma animación
    document.querySelectorAll('.titulos h1 span').forEach(span => {
        if (span.textContent.includes(',')) {
            span.style.marginRight = '0.3em';
        }
    });

    // Animación de servicios al hacer scroll
    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.classList.contains('servicios-impar')) {
                    const images = entry.target.querySelectorAll('img');
                    images.forEach((img, index) => {
                        img.style.transitionDelay = `${index * 0.2}s`;
                        img.classList.add('visible');
                    });
                }
                observer.unobserve(entry.target);
            }
        });
    };

    // Observer para elementos que se animan al hacer scroll
    const scrollObserver = new IntersectionObserver(animateOnScroll, {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    });

    // Observar secciones de servicios
    document.querySelectorAll('.servicios-impar').forEach(section => {
        scrollObserver.observe(section);
        // Preparar imágenes para animación
        section.querySelectorAll('img').forEach(img => {
            img.classList.add('fade-in');
        });
    });

    // Animación del footer
    const footerObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                const elements = entry.target.children;
                Array.from(elements).forEach((el, index) => {
                    el.style.animationDelay = `${index * 0.2}s`;
                    el.classList.add('fade-in-up');
                });
            }
        });
    }, {
        threshold: 0.5
    });

    const footer = document.querySelector('.footer-content');
    if (footer) footerObserver.observe(footer);

    // Animación suave para los iconos de servicios
    document.querySelectorAll('.icono-serv').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(10deg)';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Animación de entrada para imágenes de servicios
    const serviceSections = document.querySelectorAll('.servicios-impar');
    
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const images = entry.target.querySelectorAll('.imagenen-serv, .imagenen-serv1');
                images.forEach((img, index) => {
                    img.classList.add('image-visible');
                });
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    serviceSections.forEach(section => {
        const images = section.querySelectorAll('.imagenen-serv, .imagenen-serv1');
        images.forEach(img => {
            img.classList.add('image-hidden');
        });
        sectionObserver.observe(section);
    });

    // Animación del menú móvil
    const menuBtn = document.querySelector('.nav__menu');
    const navLinks = document.querySelector('.nav__link');
    const closeBtn = document.querySelector('.nav__close');

    if (menuBtn && navLinks && closeBtn) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.add('nav__link--show');
            document.body.style.overflow = 'hidden';
        });

        closeBtn.addEventListener('click', () => {
            navLinks.classList.remove('nav__link--show');
            document.body.style.overflow = '';
        });
    }
});

