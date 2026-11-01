// ─── Hamburger menu toggle ──────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navbar    = document.getElementById('navbar');

hamburger.addEventListener('click', () => navbar.classList.toggle('open'));

// Close nav when a link is clicked (mobile)
document.querySelectorAll('#navLinks a').forEach(link => {
  link.addEventListener('click', () => navbar.classList.remove('open'));
});

// ─── Nav shadow on scroll ───────────────────────────────────
window.addEventListener('scroll', () => {
  navbar.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(0,0,0,.08)'
    : 'none';
});

// ─── Scroll-reveal via IntersectionObserver ─────────────────
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

