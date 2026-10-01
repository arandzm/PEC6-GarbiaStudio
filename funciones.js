/* Garbia Studio - JavaScript externo y no intrusivo (PEC 5 y PEC 6)
   Cumple con estándares JS, gestión de eventos no inline y menú hamburguesa accesible. */
document.addEventListener('DOMContentLoaded', function () {

  var header = document.querySelector('header');
  var nav = document.querySelector('header nav');
  var links = document.querySelectorAll('.nav-btn');

  /* 1. Menú hamburguesa dinámico (se oculta automáticamente en escritorio vía CSS) */
  if (header && nav) {
    var toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'menu-toggle';
    toggle.setAttribute('aria-label', 'Open Menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.innerHTML = '<span></span><span></span><span></span>';
    header.insertBefore(toggle, nav);

    var setMenu = function (open) {
      nav.classList.toggle('open', open);
      toggle.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', function () {
      setMenu(!nav.classList.contains('open'));
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setMenu(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) setMenu(false);
    });
  }

  /* 2. Pestaña activa dinámica */
  var current = window.location.pathname.split('/').pop() || 'index.html';
  if (current !== 'studio.html' && current !== 'contact.html') current = 'index.html';
  links.forEach(function (link) {
    var target = link.getAttribute('href').split('/').pop();
    link.classList.toggle('active', target === current);
  });

  /* 3. Efecto hover atenuado en tarjetas de proyectos */
  var grid = document.querySelector('.projects-grid');
  if (grid) {
    grid.querySelectorAll('.project-card').forEach(function (card) {
      card.addEventListener('mouseenter', function () {
        grid.classList.add('has-hover');
        card.classList.add('is-hovered');
      });
      card.addEventListener('mouseleave', function () {
        grid.classList.remove('has-hover');
        card.classList.remove('is-hovered');
      });
    });
  }
});