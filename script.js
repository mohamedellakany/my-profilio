const root = document.documentElement;

// Theme: follows the system setting until the visitor picks one with the toggle.
const themeButton = document.querySelector('.theme-toggle');
function updateThemeLabel() {
  themeButton.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
}
updateThemeLabel();
themeButton.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', root.dataset.theme);
  updateThemeLabel();
});
matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) { root.dataset.theme = e.matches ? 'light' : 'dark'; updateThemeLabel(); }
});

// Mobile menu
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-header nav');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
}
menuButton.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

document.querySelector('#year').textContent = new Date().getFullYear();
