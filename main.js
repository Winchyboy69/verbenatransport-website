// Header scroll state
var header = document.getElementById('site-header');
function onScroll() {
  header.classList.toggle('scrolled', window.scrollY > 30);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav
var toggle = document.getElementById('nav-toggle');
var nav = document.getElementById('site-nav');
toggle.addEventListener('click', function () {
  var open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
nav.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Reveal-on-scroll
var reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { io.observe(el); });
} else {
  reveals.forEach(function (el) { el.classList.add('visible'); });
}

// Netlify form AJAX submit (urlencoded — multipart is not accepted by Netlify forms)
var form = document.getElementById('contact-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var params = new URLSearchParams(new FormData(form));
  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString()
  })
    .then(function (res) {
      if (!res.ok) throw new Error('Form submit failed: ' + res.status);
      form.hidden = true;
      var ty = document.getElementById('thank-you');
      ty.hidden = false;
      ty.focus && ty.focus();
    })
    .catch(function () {
      form.submit(); // fallback to standard POST
    });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
