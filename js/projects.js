// projects.js

function initProjects() {
    const modals = document.querySelectorAll('.project-modal');
    const openBtns = document.querySelectorAll('[data-project]');
    const closeBtns = document.querySelectorAll('.close-modal');
  
    openBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-project');
        document.getElementById(targetId)?.classList.add('active');
      });
    });
  
    closeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('.project-modal')?.classList.remove('active');
      });
    });
  
    // Opcional: cerrar al hacer clic fuera del modal
    window.addEventListener('click', (e) => {
      modals.forEach(modal => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });
}

// Lógica para la sección de proyectos
window.addEventListener('DOMContentLoaded', () => {
    const viewProjectButtons = document.querySelectorAll('.view-project');
    const modal = document.getElementById('project-modal');
    const closeModal = document.querySelector('.close-modal');
    const modalContent = document.getElementById('project-modal-content');
    const viewAllButton = document.getElementById('view-all-projects');

    // Abrir modal con información del proyecto
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            console.log(`Botón Ver Proyecto clicado: Proyecto ${projectId}`);
            modalContent.innerHTML = `<h2>Proyecto ${projectId}</h2><p>Información completa del proyecto ${projectId}.</p>`;
            modal.classList.add('show');
        });
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

    // Redirigir a projects.html al hacer clic en "Ver Todos"
    viewAllButton.addEventListener('click', () => {
        console.log('Botón Ver Todos clicado');
        window.location.href = 'projects.html';
    });

    // Add event listener for the 'Volver al Inicio' button
    const returnHomeButton = document.querySelector('.return-home');
    if (returnHomeButton) {
        returnHomeButton.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    // Add hover effects and animations to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.3)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
        });
    });
});
