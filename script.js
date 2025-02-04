// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});


// Scroll Suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        const offset = 80;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
        
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Efecto Parallax en Hero
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
    
    // Agregar clase scrolled a nav
    const nav = document.querySelector('nav');
    if (scrolled > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Animación de Números en Estadísticas
const observerStats = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    observerStats.observe(stat);
});

function animateNumbers(element) {
    const target = parseInt(element.textContent);
    let current = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    function updateNumber() {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateNumber();
}

// Formulario de Contacto
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        alert('Mensaje enviado con éxito!');
        contactForm.reset();
    });
}

// Efecto Hover en Tarjetas de Proyecto
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
    });
});




  // Carousel functionality
    // Configuración del carrusel
    document.querySelectorAll('.carousel-container').forEach(carousel => {
        const images = carousel.querySelector('.carousel-images');
        const imageCount = images.children.length;
        let currentIndex = 0;
        let intervalId;

        // Crear indicadores
        const indicators = carousel.querySelector('.carousel-indicators');
        for (let i = 0; i < imageCount; i++) {
        const indicator = document.createElement('button');
        indicator.className = 'indicator' + (i === 0 ? ' active' : '');
        indicator.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetInterval();
        });
        indicators.appendChild(indicator);
        }

        function updateCarousel() {
        images.style.transform = `translateX(-${currentIndex * 100}%)`;
        // Actualizar indicadores
        carousel.querySelectorAll('.indicator').forEach((ind, i) => {
            ind.classList.toggle('active', i === currentIndex);
        });
        }

        function nextSlide() {
        currentIndex = (currentIndex + 1) % imageCount;
        updateCarousel();
        }

        function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 6000);
        }

        // Iniciar carrusel automático
        resetInterval();

        // Pausar el carrusel al pasar el mouse
        carousel.addEventListener('mouseenter', () => clearInterval(intervalId));
        carousel.addEventListener('mouseleave', resetInterval);
    });

    // Funcionalidad del modal (se mantiene igual)
    const modal = document.querySelector('.modal');
    const modalTitle = modal.querySelector('.modal-title');
    const modalDescription = modal.querySelector('.modal-description');
    const closeModal = modal.querySelector('.close-modal');

    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', () => {
        const title = button.closest('.project-content').querySelector('.project-title').textContent;
        const description = button.getAttribute('data-description');
        
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
        modal.style.display = 'none';
        }
    });

    // Select DOM elements
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle menu
    function toggleMenu() {
    // Toggle active classes
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
    
    // Toggle body scroll
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    // Event Listeners
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    links.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
    const isClickInside = navLinks.contains(e.target) || hamburger.contains(e.target);
    
    if (!isClickInside && navLinks.classList.contains('active')) {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
    }
    });