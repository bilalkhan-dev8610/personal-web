// ✅ Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('service-worker.js')
      .then(reg => console.log('✅ Service Worker registered'))
      .catch(err => console.log('❌ SW Error:', err));
  });
}

// ✅ Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(item => {
  item.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

// ✅ Scroll Animation & Theme Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Scroll Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Theme Initialization
  const themeToggle = document.getElementById('themeToggle');
  const icon = themeToggle.querySelector('i');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'light') {
    document.body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    document.body.classList.remove('light-mode');
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }

  // Theme Toggle Event
  themeToggle.addEventListener('click', () => {
    const isLight = document.body.classList.toggle('light-mode');
    if (isLight) {
      icon.classList.remove('fa-moon');
      icon.classList.add('fa-sun');
      localStorage.setItem('theme', 'light');
    } else {
      icon.classList.remove('fa-sun'); mc
      icon.classList.add('fa-moon');
      localStorage.setItem('theme', 'dark');
    }
  });
});
