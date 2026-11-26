// INTERIA demo interactions: scroll reveals, count-up stats, mobile menu, FAQ and testimonial controls.
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = Number(el.dataset.count);
    const start = performance.now();
    const duration = 1500;
    const tick = now => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      el.textContent = Math.round(target * eased).toLocaleString('en-IN') + (target === 100 ? '%' : '+');
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    observer.unobserve(el);
  });
}, { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');
menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// The testimonial controls cycle the visible quote on small screens and scroll on wider screens.
let quoteIndex = 0;
const quoteCards = [...document.querySelectorAll('.quote-card')];
const dots = [...document.querySelectorAll('.quote-dots span')];
function showQuote(index) {
  quoteIndex = (index + quoteCards.length) % quoteCards.length;
  quoteCards.forEach((card, i) => {
    card.style.display = (window.innerWidth <= 600 && i !== quoteIndex) ? 'none' : 'block';
  });
  dots.forEach((dot, i) => dot.classList.toggle('selected', i === quoteIndex));
}
document.querySelector('#prevQuote').addEventListener('click', () => showQuote(quoteIndex - 1));
document.querySelector('#nextQuote').addEventListener('click', () => showQuote(quoteIndex + 1));
window.addEventListener('resize', () => showQuote(quoteIndex));
showQuote(0);

const toast = document.querySelector('.toast');
document.querySelectorAll('.demo-form').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 3500);
  form.reset();
}));
document.querySelector('#year').textContent = new Date().getFullYear();
