// navigation.js

// Función para manejar el resaltado de la sección activa en el menú
function highlightCurrentSection() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  let current = "";
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
}

// Función para navegación suave al hacer clic en los enlaces del menú
function smoothScrollNavigation() {
  const navLinks = document.querySelectorAll("nav a[href^='#']");
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: "smooth",
        });
      }
    });
  });
}

// Inicialización
function initNavigation() {
  window.addEventListener("scroll", highlightCurrentSection);
  document.addEventListener("DOMContentLoaded", () => {
    highlightCurrentSection();
    smoothScrollNavigation();
  });
}

initNavigation();
