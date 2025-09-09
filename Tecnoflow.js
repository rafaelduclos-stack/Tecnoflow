const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const footer = document.getElementById('footer');
const menuLinks = document.querySelectorAll('nav.sidebar ul li a[href^="#"]');
const sections = Array.from(menuLinks).map(link => ({ 
  link, 
  target: document.querySelector(link.getAttribute('href')) 
}));

menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('open');      // Abre/fecha sidebar
  menuBtn.classList.toggle('open');      // Anima botão hamburguer
  mainContent.classList.toggle('fullwidth');  // Ajusta largura do main (se quiser)
  if (footer) footer.classList.toggle('fullwidth');       // Ajusta largura do footer se existir
  document.querySelector('header').classList.toggle('fullwidth'); // Ajusta largura do header
});

function updateActiveLink() {
  const scrollPos = window.scrollY + 120;
  sections.forEach(({ link, target }) => {
    if (target && target.offsetTop <= scrollPos && (target.offsetTop + target.offsetHeight) > scrollPos) {
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
updateActiveLink();