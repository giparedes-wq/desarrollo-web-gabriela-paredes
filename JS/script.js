// Función para el botón "Regresar al Inicio"
document.getElementById('btnregresar').addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Efecto de scroll para la navegación
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  if (window.scrollY > 100) {
    nav.style.backgroundColor = 'rgba(3, 40, 87, 0.95)';
    nav.style.backdropFilter = 'blur(10px)';
  } else {
    nav.style.backgroundColor = 'rgba(3, 40, 87, 0.95)';
    nav.style.backdropFilter = 'none';
  }
});