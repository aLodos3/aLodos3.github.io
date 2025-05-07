// Añadir SweetAlert al enviar el formulario
window.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevenir el envío por defecto

        // Mostrar alerta de confirmación
        Swal.fire({
            title: '¡Mensaje enviado!',
            text: 'Gracias por contactarme. Te responderé lo antes posible.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            contactForm.submit(); // Enviar el formulario después de la confirmación
        });
    });
});