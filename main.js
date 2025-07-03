// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(section => observer.observe(section));

// Theme toggle
const toggleBtn = document.getElementById('toggleTheme');
const body = document.body;

function setTheme(mode) {
  body.classList.toggle('light-mode', mode === 'light');
  localStorage.setItem('theme', mode);
}

toggleBtn.addEventListener('click', () => {
  const isLight = body.classList.contains('light-mode');
  setTheme(isLight ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-mode');
}
