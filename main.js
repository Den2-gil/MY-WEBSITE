// Toggle mobile navigation menu
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple form submission handler (for demo only)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  form.reset();
});
