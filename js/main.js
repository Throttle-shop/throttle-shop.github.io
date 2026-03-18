async function loadComponent(id, file) {
  const res = await fetch(`components/${file}`);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;
}

document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([
    loadComponent('header', 'header.html'),
    loadComponent('footer', 'footer.html')
  ]);

  // Mobile menu
  const toggle = document.getElementById('menuToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.getElementById('navLinks').classList.toggle('active');
    });
  }

  // Highlight current page
  const path = window.location.pathname;
  document.querySelectorAll('#navLinks a').forEach(link => {
    if (path.includes(link.getAttribute('href')) || 
        (path === '/' && link.getAttribute('href') === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Show menu button on mobile
  if (window.innerWidth <= 768) {
    document.querySelectorAll('#menuToggle').forEach(el => el.style.display = 'block');
  }
});
