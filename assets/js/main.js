// Agilize Pousada e Flats — interações e microanimações
document.addEventListener('DOMContentLoaded', () => {

  // Header: shrink + solidify on scroll
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 40);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      nav.classList.toggle('is-open');
      const expanded = nav.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', expanded);
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('is-open')));
  }

  // Scroll-reveal animations
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  // Animated counters (hero stats / numbers)
  const counters = document.querySelectorAll('[data-counter]');
  if ('IntersectionObserver' in window && counters.length) {
    const counterIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.counter);
        const suffix = el.dataset.suffix || '';
        const decimals = el.dataset.counter.includes('.') ? 1 : 0;
        const duration = 1400;
        const start = performance.now();
        const step = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = (target * eased).toFixed(decimals) + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        counterIO.unobserve(el);
      });
    }, { threshold: 0.6 });
    counters.forEach(el => counterIO.observe(el));
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(item => {
    const q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      item.parentElement.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
      if (!isOpen) item.classList.add('is-open');
    });
  });

  // Gallery filter
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('[data-category]');
  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const cat = btn.dataset.filter;
        galleryItems.forEach(item => {
          const show = cat === 'todos' || item.dataset.category === cat;
          item.style.display = show ? '' : 'none';
        });
      });
    });
  }

  // Testimonials drag-scroll (basic pointer support)
  const track = document.querySelector('.testi-track');
  if (track) {
    let isDown = false, startX, scrollLeft;
    track.addEventListener('pointerdown', (e) => {
      isDown = true; startX = e.pageX - track.offsetLeft; scrollLeft = track.scrollLeft;
    });
    ['pointerup','pointerleave'].forEach(ev => track.addEventListener(ev, () => isDown = false));
    track.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      const x = e.pageX - track.offsetLeft;
      track.scrollLeft = scrollLeft - (x - startX);
    });
  }

  // Reservation form (front-end validation + WhatsApp handoff)
  const form = document.getElementById('reserva-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const msg = `Olá! Gostaria de reservar na Agilize Pousada e Flats.%0A` +
        `Nome: ${encodeURIComponent(data.nome || '')}%0A` +
        `Check-in: ${encodeURIComponent(data.checkin || '')}%0A` +
        `Check-out: ${encodeURIComponent(data.checkout || '')}%0A` +
        `Hóspedes: ${encodeURIComponent(data.hospedes || '')}%0A` +
        `Acomodação: ${encodeURIComponent(data.acomodacao || '')}%0A` +
        `Mensagem: ${encodeURIComponent(data.mensagem || '')}`;
      window.open(`https://wa.me/5588900000000?text=${msg}`, '_blank');
    });
  }

  // Current year in footer
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
});
