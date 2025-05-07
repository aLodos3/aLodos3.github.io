// Mejora del modal y slider de diplomas
window.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const images = document.querySelectorAll('.carousel-image');
    const modal = document.getElementById('diplomas-modal');
    const closeModal = document.querySelector('.close-modal');
    const viewAllButton = document.getElementById('view-all-diplomas');
    const modalImagesContainer = document.querySelector('.modal-images');

    let currentIndex = 0;
    let intervalId;

    // Configurar el carrusel para cambiar la imagen cada 3 segundos
    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        const offset = -currentIndex * images[0].clientWidth;
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos

    // Pausar el slider al pasar el mouse sobre el carrusel
    carouselImages.addEventListener('mouseover', () => clearInterval(intervalId));
    carouselImages.addEventListener('mouseout', () => intervalId = setInterval(showNextImage, 3000));

    // Abrir modal
    viewAllButton.addEventListener('click', () => {
        console.log('Botón "Ver Todos" clicado'); // Log en consola
        modal.classList.add('show');

        // Generar dinámicamente 6 diplomas en el modal
        modalImagesContainer.innerHTML = '';
        for (let i = 0; i < 6; i++) {
            const img = document.createElement('img');
            img.src = 'img/certificado.jpg';
            img.alt = `Diploma ${i + 1}`;
            img.classList.add('modal-image');
            modalImagesContainer.appendChild(img);

            // Ampliar imagen al hacer clic
            img.addEventListener('click', () => {
                const newWindow = window.open();
                newWindow.document.write(`<img src="${img.src}" style="width: 100%; height: auto;">`);
            });
        }
    });

    // Cerrar modal
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
    });

    // Ensure all close-modal buttons close the modal
    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.remove('show');
        });
    });

    // Asegurarse de que el modal se cierre al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
});