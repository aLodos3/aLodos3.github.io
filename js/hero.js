// Mejora de la sección hero
window.addEventListener('DOMContentLoaded', () => {
    const heroIcons = document.querySelectorAll('.hero-icons i');

    heroIcons.forEach(icon => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'rotate(360deg)';
            icon.style.transition = 'transform 0.5s ease';
        });

        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'rotate(0deg)';
        });
    });

    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', () => {
        alert('¡Hola! Soy un Fullstack Developer disponible para proyectos.');
    });
});