(function() {
    const openButton = document.querySelector('.nav__menu');
    const menu = document.querySelector('.nav__link--menu');
    const closeMenu = document.querySelector('.nav__close');
    const dropdowns = document.querySelectorAll('.dropdown');
    const nav = document.querySelector('.nav');
    let lastScrollY = window.scrollY;

    // Menu toggle
    if (openButton && menu && closeMenu) {
        openButton.addEventListener('click', () => {
            menu.classList.add('nav__link--show');
        });

        closeMenu.addEventListener('click', () => {
            menu.classList.remove('nav__link--show');
        });
    }

    // Dropdown toggle on mobile
    dropdowns.forEach(dropdown => {
        const trigger = dropdown.querySelector('.dropdown__trigger');
        
        if (trigger) {
            trigger.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
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
