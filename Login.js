// Faz todos os botões de inscrição redirecionarem para Login.html
const botoes = document.querySelectorAll('.inscrever-btn');
botoes.forEach(btn => {
  btn.addEventListener('click', () => {
    window.location.href = 'Login.html';
  });
});
