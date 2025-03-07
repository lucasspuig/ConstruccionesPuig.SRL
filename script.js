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
        if (entry.isIntersecting && !entry.target.hasAttribute('data-animated')) {
            animateNumbers(entry.target);
            entry.target.setAttribute('data-animated', 'true');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(stat => {
    observerStats.observe(stat);
});

function animateNumbers(element) {
    const target = parseInt(element.getAttribute('data-target') || element.textContent);
    const duration = 3000; // Duration in milliseconds
    const startTime = performance.now();
    const startValue = 0;
    
    function easeOutQuad(t) {
        return t * (2 - t);
    }
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);
        
        element.textContent = currentValue.toLocaleString() + '+';
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target.toLocaleString() + '+';
        }
    }
    
    requestAnimationFrame(updateNumber);
}



// Efecto Hover en Tarjetas de Proyecto
document.querySelectorAll('.project-card1').forEach(card => {
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
        const title = button.closest('.project-content1').querySelector('.project-title1').textContent;
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


// Cuando abres el menú
document.querySelector('.hamburger').addEventListener('click', function() {
    document.body.classList.toggle('menu-open');
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;

    const mailtoLink = `mailto:construccionespuig@hotmail.com?subject=Nuevo mensaje de ${nombre}&body=Nombre: ${nombre}%0D%0AEmail: ${email}%0D%0AMensaje: ${mensaje}`;
    const whatsappLink = `https://wa.me/5493434194377?text=Nombre: ${encodeURIComponent(nombre)}%0AEmail: ${encodeURIComponent(email)}%0AMensaje: ${encodeURIComponent(mensaje)}`;

    // Primera alerta para elegir el método
    const result = await Swal.fire({
        title: '¿Cómo prefieres contactarnos?',
        text: 'Elige el medio que te resulte más cómodo',
        icon: 'question',
        showDenyButton: true,
        confirmButtonText: 'WhatsApp',
        confirmButtonColor: '#25D366',
        denyButtonText: 'Email',
        denyButtonColor: '#EA4335',
    });

    if (result.isConfirmed) {
        // Alerta antes de abrir WhatsApp
        await Swal.fire({
            title: 'Conectando con WhatsApp',
            text: 'Te redirigiremos a WhatsApp para enviar tu mensaje',
            icon: 'info',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        });
        window.open(whatsappLink);
    } else if (result.isDenied) {
        // Alerta antes de abrir el cliente de email
        await Swal.fire({
            title: 'Abriendo tu correo',
            text: 'Te redirigiremos a tu cliente de email para enviar el mensaje',
            icon: 'info',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false
        });
        window.location.href = mailtoLink;
    }
    
    this.reset();
});