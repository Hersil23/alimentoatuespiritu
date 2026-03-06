/* ── MAIN.JS — Inicializacion, eventos, scroll, idioma ── */

let currentLang = localStorage.getItem('lang') || 'es';

/* ── SISTEMA BILINGUE ── */
function getNestedValue(obj, path) {
  return path.split('.').reduce((acc, key) => acc && acc[key], obj);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;

  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    el.style.opacity = '0';
  });

  setTimeout(() => {
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = getNestedValue(i18n[lang], key);
      if (value) {
        el.textContent = value;
      }
    });
    elements.forEach(el => {
      el.style.opacity = '1';
    });
  }, 200);
}

/* ── MOBILE MENU ── */
function openMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.remove('hidden');
  menu.classList.add('flex');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  document.body.style.overflow = '';
}

/* ── DEVOCIONALES FILTER ── */
function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.devocional-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      cards.forEach(card => {
        if (filter === 'todos' || card.getAttribute('data-camino') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* ── SMOOTH SCROLL ── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Set initial language
  setLanguage(currentLang);

  // Hamburger toggle
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu.classList.contains('hidden')) {
        openMobileMenu();
      } else {
        closeMobileMenu();
      }
    });
  }

  // Init filters
  initFilters();

  // Init smooth scroll
  initSmoothScroll();
});
