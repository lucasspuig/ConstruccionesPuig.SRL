(function() {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link--menu');
    const closeMenu = document.querySelector('.nav__close');
    const dropdowns = document.querySelectorAll('.dropdown');
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    // Función para cerrar el menú
    const closeNavMenu = () => {
        menu.classList.remove('nav__link--show');
    };

    // Menu toggle
    if (openButton && menu && closeMenu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show');
        });

        closeMenu.addEventListener('click', closeNavMenu);

        // Cerrar menú cuando se hace clic en cualquier enlace excepto los del dropdown
        menu.querySelectorAll('a').forEach(link => {
            if (!link.closest('.dropdown')) { // Si el enlace no está dentro de un dropdown
                link.addEventListener('click', closeNavMenu);
            }
        });
    }

    // Dropdown toggle on mobile
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown__trigger');
        const dropdownLinks = dropdown.querySelectorAll('.dropdown__menu a');
        
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }

        // Cerrar el menú solo cuando se hace clic en un enlace final del dropdown
        dropdownLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    closeNavMenu();
                }
            });
        });
    });

    // Hide/show nav on scroll
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) {
            nav.style.transform = 'translateY(-100%)';
        } else {
            nav.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });
})();
