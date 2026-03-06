/* ── ANIMATIONS.JS — Todas las animaciones GSAP ── */

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  /* ── NAVBAR SCROLL EFFECT ── */
  ScrollTrigger.create({
    start: 'top -60',
    onUpdate: (self) => {
      const nav = document.getElementById('nav');
      if (self.scroll() > 60) {
        nav.classList.add('nav-scrolled');
      } else {
        nav.classList.remove('nav-scrolled');
      }
    }
  });

  /* ── HERO ENTRANCE TIMELINE ── */
  const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

  heroTl
    .to('#hero-logo', { opacity: 1, scale: 1, duration: 0.8 }, 0.3)
    .from('#hero-logo', { scale: 0.8, duration: 0.8 }, 0.3)
    .to('#hero-titulo', { opacity: 1, y: 0, duration: 0.7 }, 0.6)
    .from('#hero-titulo', { y: 30, duration: 0.7 }, 0.6)
    .to('#hero-subtitulo', { opacity: 1, y: 0, duration: 0.7 }, 0.75)
    .from('#hero-subtitulo', { y: 30, duration: 0.7 }, 0.75)
    .to('#hero-ctas', { opacity: 1, y: 0, duration: 0.7 }, 0.9)
    .from('#hero-ctas', { y: 30, duration: 0.7 }, 0.9)
    .to('#scroll-arrow', { opacity: 1, duration: 0.5 }, 1.2);

  /* ── SCROLL ARROW BOUNCE ── */
  gsap.to('#scroll-arrow', {
    y: 10,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
    duration: 1
  });

  /* ── HERO PARALLAX ── */
  gsap.to('#hero video', {
    yPercent: 20,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.5
    }
  });

  /* ── MISION SECTION ── */
  gsap.from('#mision .md\\:col-span-3', {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#mision',
      start: 'top 80%'
    }
  });

  gsap.from('#mision .md\\:col-span-2', {
    x: 60,
    opacity: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#mision',
      start: 'top 80%'
    }
  });

  /* ── TRES CAMINOS HEADER ── */
  gsap.from('#tres-caminos .text-center', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#tres-caminos',
      start: 'top 80%'
    }
  });

  /* ── TRES CAMINOS CARDS STAGGER ── */
  gsap.from('.tres-caminos-card', {
    y: 50,
    opacity: 0,
    duration: 0.6,
    stagger: 0.12,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.tres-caminos-card',
      start: 'top 85%'
    }
  });

  /* ── TRES CAMINOS CARD 3D TILT (desktop only) ── */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.tres-caminos-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { rotateY: 5, scale: 1.02, duration: 0.3, ease: 'power2.out', boxShadow: '0 8px 30px rgba(184,147,42,0.2)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { rotateY: 0, scale: 1, duration: 0.3, ease: 'power2.out', boxShadow: 'none' });
      });
    });
  }

  /* ── DEVOCIONALES SECTION ── */
  gsap.from('#devocionales h2', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#devocionales',
      start: 'top 80%'
    }
  });

  gsap.from('.devocional-card', {
    y: 40,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#devocionales-grid',
      start: 'top 85%'
    }
  });

  /* ── DEVOCIONAL CARD HOVER (desktop only) ── */
  if (window.matchMedia('(hover: hover)').matches) {
    document.querySelectorAll('.devocional-card').forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { y: -4, duration: 0.25, ease: 'power2.out', boxShadow: '0 8px 30px rgba(184,147,42,0.12)' });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { y: 0, duration: 0.25, ease: 'power2.out', boxShadow: 'none' });
      });
    });
  }

  /* ── REDES SECTION ── */
  gsap.from('#redes .grid > div', {
    y: 40,
    opacity: 0,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#redes',
      start: 'top 80%'
    }
  });

  /* ── CONTACTO FORM REVEAL ── */
  gsap.from('#contacto h2', {
    y: 40,
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contacto',
      start: 'top 80%'
    }
  });

  gsap.from('#contacto form > *', {
    y: 30,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contacto form',
      start: 'top 85%'
    }
  });

  /* ── MOBILE NAV OVERLAY ANIMATION ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');

  if (hamburger && mobileMenu) {
    const hamTop = document.getElementById('ham-top');
    const hamMid = document.getElementById('ham-mid');
    const hamBot = document.getElementById('ham-bot');

    hamburger.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (!isOpen) {
        gsap.to(hamTop, { rotation: 45, y: 6, duration: 0.3 });
        gsap.to(hamMid, { opacity: 0, duration: 0.2 });
        gsap.to(hamBot, { rotation: -45, y: -6, duration: 0.3 });
        gsap.fromTo(mobileMenu, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: 'power3.inOut' });
        gsap.from(mobileMenu.querySelectorAll('a, button'), { y: 20, opacity: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', delay: 0.15 });
      } else {
        gsap.to(hamTop, { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(hamMid, { opacity: 1, duration: 0.2 });
        gsap.to(hamBot, { rotation: 0, y: 0, duration: 0.3 });
        gsap.to(mobileMenu, { opacity: 0, duration: 0.2 });
      }
    });
  }
});
