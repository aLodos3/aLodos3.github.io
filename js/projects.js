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
  