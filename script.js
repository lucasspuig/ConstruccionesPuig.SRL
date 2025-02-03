// Inicializar AOS
AOS.init({
    duration: 1000,
    once: true
});

// Navegación Móvil Mejorada
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
    
    navItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
        }
    });
});

// Cerrar menú móvil al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    }
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



document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li a');

    // Toggle mobile menu
    function toggleMobileMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');

        // Animate nav items
        navLinksItems.forEach((link, index) => {
            if (navLinks.classList.contains('active')) {
                link.parentElement.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1 + 0.3}s`;
            } else {
                link.parentElement.style.animation = '';
            }
        });
    }

    // Hamburger click event
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent event from bubbling
        toggleMobileMenu();
    });

    // Close menu when a nav link is clicked
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset animations
            navLinksItems.forEach(item => {
                item.parentElement.style.animation = '';
            });
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Reset animations
            navLinksItems.forEach(item => {
                item.parentElement.style.animation = '';
            });
        }
    });

    // Prevent menu from closing when clicking inside nav
    navLinks.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});