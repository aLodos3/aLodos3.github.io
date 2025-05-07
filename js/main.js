// main.js - Lógica general del sitio
import { initNavigation } from './navigation.js';
import { initSlider } from './slider.js';
import { initProjects } from './projects.js';

window.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSlider();
  initProjects();

  // Smooth scroll trigger
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
