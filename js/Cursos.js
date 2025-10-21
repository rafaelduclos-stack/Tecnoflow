const menuBtn = document.getElementById('menuBtn');
    const sidebar = document.getElementById('sidebar');

    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('open');
      sidebar.classList.toggle('open');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('#sidebar a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('open');
        sidebar.classList.remove('open');
      });
    });
