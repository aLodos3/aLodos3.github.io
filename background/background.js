const canvas = document.getElementById('background-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
const particleCount = 80;
const maxDistance = 120;

// Variables que cambian según día/noche
let particleColor = 'rgba(0, 180, 216, 0.7)';
let lineColorBase = 'rgba(142, 45, 226,';

// Detectar si es de día o de noche (6h - 18h)
function setThemeByTime() {
  const hour = new Date().getHours();
  const isDay = hour >= 6 && hour < 18;

  if (isDay) {
    particleColor = 'rgba(255, 204, 0, 0.7)'; // Amarillo solar
    lineColorBase = 'rgba(255, 140, 0,';     // Naranja cálido
  } else {
    particleColor = 'rgba(0, 180, 216, 0.7)'; // Azul cian
    lineColorBase = 'rgba(142, 45, 226,';    // Violeta tech
  }
}

setThemeByTime();

function resizeCanvas() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

function createParticles() {
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      radius: Math.random() * 2 + 1
    });
  }
}
createParticles();

function drawLine(p1, p2) {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  const dist = Math.sqrt(dx * dx + dy * dy);

  if (dist < maxDistance) {
    ctx.strokeStyle = `${lineColorBase} ${1 - dist / maxDistance})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.stroke();
  }
}

// Scroll efecto parallax
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrollDelta = currentScrollY - lastScrollY;

  // Aplicamos velocidad extra a vy de todas las partículas
  for (let p of particles) {
    p.vy += scrollDelta * 0.001; // control sutil
  }

  lastScrollY = currentScrollY;
});

function animate() {
  ctx.clearRect(0, 0, width, height);

  for (let i = 0; i < particleCount; i++) {
    const p = particles[i];

    p.x += p.vx;
    p.y += p.vy;

    // Rebote en bordes
    if (p.x < 0 || p.x > width) p.vx *= -1;
    if (p.y < 0 || p.y > height) p.vy *= -1;

    // Dibujar partícula
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = particleColor;
    ctx.fill();

    for (let j = i + 1; j < particleCount; j++) {
      drawLine(p, particles[j]);
    }
  }

  requestAnimationFrame(animate);
}

animate();
