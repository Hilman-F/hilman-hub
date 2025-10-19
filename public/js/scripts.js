// DARK/LIGHT MODE TOGGLE
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check previous mode
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('dark');
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem('theme', 'light');
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', 'dark');
  }
});

// Smooth intro animation for buttons
window.addEventListener('load', () => {
  const buttons = document.querySelectorAll('.link-btn');
  buttons.forEach((btn, index) => {
    setTimeout(() => {
      btn.classList.add('animate-fadeIn');
    }, 200 * index);
  });
});
