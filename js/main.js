/* Fólio — interações mínimas */
(function () {
  'use strict';

  var header = document.getElementById('header');
  var nav = document.getElementById('nav');
  var toggle = document.getElementById('navToggle');

  /* --- Vídeo do hero: só visível quando toca mesmo --- */
  /* Se o autoplay for bloqueado (ex.: Modo de Poupança de Energia no
     iOS), o vídeo fica invisível e mostra-se o poster — nunca o botão
     de play nativo. */
  var hero = document.getElementById('heroVideo');
  if (hero) {
    hero.addEventListener('playing', function () { hero.classList.add('is-playing'); });
    hero.addEventListener('pause', function () { hero.classList.remove('is-playing'); });
    hero.addEventListener('ended', function () { hero.classList.remove('is-playing'); });
    var attempt = hero.play();
    if (attempt && typeof attempt.catch === 'function') {
      attempt.catch(function () { /* autoplay bloqueado: fica o poster */ });
    }
  }

  /* --- Header: estado sólido depois do hero --- */
  function onScroll() {
    if (window.scrollY > window.innerHeight * 0.7) {
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* --- Menu mobile --- */
  function closeMenu() {
    nav.classList.remove('open');
    header.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menu');
  }
  if (toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      header.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });
  }

  /* --- Reveal on scroll --- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var items = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    items.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  /* --- Ano no rodapé --- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
