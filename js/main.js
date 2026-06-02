/**
 * js/main.js
 * Control del menú hamburguesa
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.querySelector('.header__menu-toggle');
  const nav = document.querySelector('#main-menu');
  const navList = nav?.querySelector('ul');
  const headerActions = document.querySelector('.header__actions');

  // Prevenimos errores si algun elemento es undefined
  if (!toggleBtn || !navList || !headerActions) return;


  /**
   * Altenra la visibilidad del menú
   */
  const toggleMenu = () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    const newState = !isExpanded;


    // Mostrar/ocultar
    navList.style.display = newState ? 'flex' : 'none';

    // Gestion de foco
    if (newState) {
      // Mover el foco al primer enlace al abrir
      const firstLink = navList.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      // Devolver el foco al botón al cerrar
      toggleBtn.focus();
    }
  };

  // click en hamburguesa
  toggleBtn.addEventListener('click', toggleMenu);

  // ️ Accesibilidad: cerrar con tecla Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu();
    }
  });

  // Resetear estilos inline al pasar a desktop (>= 768px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
      navList.style.display = '';
      toggleBtn.setAttribute('aria-expanded', 'false');
      toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
    }
  });
});