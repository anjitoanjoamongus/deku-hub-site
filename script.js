// javascript / script.js / browser / Hub Celestial download site
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', () => {
    document.body.classList.add('navigating');
    const target = document.querySelector(link.getAttribute('href'));
    if (target) window.setTimeout(() => target.focus({ preventScroll: true }), 350);
  });
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.style.setProperty('--reveal', '1');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.feature, .step, .stats-strip div').forEach((element) => observer.observe(element));
document.querySelectorAll('.card, .steps > div, .info-panel, .stats > div').forEach((element) => {
  element.classList.add('reveal');
  observer.observe(element);
});
document.querySelectorAll('a[href^="#"]').forEach((link) => link.addEventListener('click', () => document.body.classList.add('navigating')));
