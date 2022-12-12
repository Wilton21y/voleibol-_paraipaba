// BOTÃO MENU

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) { if (event.type === 'touchstart') event.preventDefault(); const nav = document.getElementById('nav');
  nav.classList.toggle('active'); const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active); if (active) { event.currentTarget.setAttribute('aria-label', 'Fechar Menu'); } else { event.currentTarget.setAttribute('aria-label', 'Abrir Menu'); } } btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// SLIDER 

function inicia() { document.querySelectorAll('.item').forEach(item => { 
item.addEventListener('click', (e) => { 
e.target.scrollIntoView({ inline: 'center', behavior: 'smooth', }); }); }); 
  
} 

  window.addEventListener('load', inicia);

