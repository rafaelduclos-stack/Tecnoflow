const menuBtn = document.getElementById('menuBtn');

const sidebar = document.getElementById('sidebar');

const mainContent = document.getElementById('mainContent');

const menuLinks = document.querySelectorAll('nav.sidebar ul li a[href^="#"]');

const sections = Array.from(menuLinks).map(link => ({ 

  link, 

  target: document.querySelector(link.getAttribute('href')) 

}));



// Toggle menu

menuBtn.addEventListener('click', () => {

  sidebar.classList.toggle('open');

  menuBtn.classList.toggle('open');

});



// Smooth scrolling para links do menu

menuLinks.forEach(link => {

  link.addEventListener('click', (e) => {

    e.preventDefault();

    const targetId = link.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    

    if (targetSection) {

      targetSection.scrollIntoView({ 

        behavior: 'smooth',

        block: 'start' 

      });

      

      // Fecha o menu mobile após clicar

      if (window.innerWidth <= 768) {

        sidebar.classList.remove('open');

        menuBtn.classList.remove('open');

      }

    }

  });

});



// Atualiza link ativo baseado no scroll

function updateActiveLink() {

  const scrollPos = window.scrollY + 150;

  

  sections.forEach(({ link, target }) => {

    if (target) {

      const targetTop = target.offsetTop;

      const targetBottom = targetTop + target.offsetHeight;

      

      if (scrollPos >= targetTop && scrollPos < targetBottom) {

        menuLinks.forEach(l => l.classList.remove('active'));

        link.classList.add('active');

      }

    }

  });

}



// Throttle function para melhor performance

function throttle(func, limit) {

  let inThrottle;

  return function() {

    const args = arguments;

    const context = this;

    if (!inThrottle) {

      func.apply(context, args);

      inThrottle = true;

      setTimeout(() => inThrottle = false, limit);

    }

  }

}



// Event listeners

window.addEventListener('scroll', throttle(updateActiveLink, 100));

updateActiveLink();



// Fecha o menu ao clicar fora dele

document.addEventListener('click', (e) => {

  if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) {

    sidebar.classList.remove('open');

    menuBtn.classList.remove('open');

  }

});



// Fecha o menu com ESC

document.addEventListener('keydown', (e) => {

  if (e.key === 'Escape' && sidebar.classList.contains('open')) {

    sidebar.classList.remove('open');

    menuBtn.classList.remove('open');

  }

});



// Smooth scroll para indicador de scroll no hero

document.querySelector('.scroll-indicator').addEventListener('click', () => {

  document.querySelector('#videos').scrollIntoView({ 

    behavior: 'smooth',

    block: 'start' 

  });

});



// Funcionalidade da barra de pesquisa

const searchInput = document.querySelector('.search-bar input[type="text"]');

if (searchInput) {

  searchInput.addEventListener('keypress', (e) => {

    if (e.key === 'Enter') {

      e.preventDefault();

      const searchTerm = e.target.value.trim();

      if (searchTerm) {

        // Aqui você pode implementar a lógica de pesquisa

        console.log('Pesquisando por:', searchTerm);

        // Por exemplo, filtrar o conteúdo existente

        searchContent(searchTerm);

      }

    }

  });

}



// Função de pesquisa simples

function searchContent(term) {

  const cards = document.querySelectorAll('.video-card, .article-card, .news-card');

  const searchTerm = term.toLowerCase();

  

  cards.forEach(card => {

    const text = card.textContent.toLowerCase();

    if (text.includes(searchTerm)) {

      card.style.display = 'block';

      card.style.background = 'rgba(255, 255, 255, 0.1)';

    } else {

      card.style.display = 'none';

    }

  });

  

  // Limpar o destaque após 3 segundos

  setTimeout(() => {

    cards.forEach(card => {

      card.style.display = 'block';

      card.style.background = '';

    });

  }, 3000);

}
