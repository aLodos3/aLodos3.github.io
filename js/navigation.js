// navigation.js

// Mejora de los efectos de navegación con transiciones suaves
window.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const header = document.getElementById('header');

    // Smooth scrolling al hacer clic en los enlaces de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - header.offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Resaltar el enlace activo en función de la sección visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const link = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);

            if (entry.isIntersecting) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }, {
        root: null,
        rootMargin: '-50% 0px -50% 0px',
        threshold: 0
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Efecto de mostrar/ocultar el header al hacer scroll
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = window.scrollY;
    });

    // Transición suave para mostrar/ocultar el header
    header.style.transition = 'transform 0.3s ease-in-out';
});

// Lógica para el botón de hamburguesa y el menú móvil
window.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });
});
