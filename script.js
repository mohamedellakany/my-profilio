const root=document.documentElement;
const themeButton=document.querySelector('.theme-toggle');
function updateThemeLabel(){themeButton.setAttribute('aria-label',root.dataset.theme==='dark'?'Switch to light theme':'Switch to dark theme')}
updateThemeLabel();
themeButton.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);updateThemeLabel()});
const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.site-header nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation')}));
document.querySelector('#year').textContent=new Date().getFullYear();
if('IntersectionObserver'in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.role,.expertise-grid article,.intro,.education,.contact').forEach(el=>{el.classList.add('reveal');observer.observe(el)})}
