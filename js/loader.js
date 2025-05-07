// Loader
document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Espera a que todo el contenido esté completamente cargado
    window.addEventListener('load', () => {
        // Simula carga con delay de 2 segundos
        setTimeout(() => {
            // Oculta el loader con animación (CSS)
            loader.classList.add('hidden');
            // Muestra el contenido principal
            content.classList.remove('hidden');
            // Lanza animaciones personalizadas
            initializeAnimations();
        }, 2000);
    });

    function initializeAnimations() {
        // Activa animaciones en los elementos con clase .fade-in
        const fadeInElements = document.querySelectorAll('.fade-in');
        fadeInElements.forEach((el, i) => {
            setTimeout(() => {
                el.classList.add('visible');
            }, 100 * i);
        });

        // Puedes agregar más animaciones personalizadas aquí
    }
});
