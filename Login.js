// Seleção de elementos
const toggleLink = document.getElementById('toggleLink');
const loginForm = document.getElementById('loginForm');
const h2 = document.querySelector('.login-container h2');

let isLogin = true;

// Alterna entre login e cadastro
toggleLink.addEventListener('click', function(e) {
  e.preventDefault();
  isLogin = !isLogin;

  if(isLogin) {
    h2.textContent = "Bem-vindo";
    toggleLink.textContent = "Cadastre-se";
    loginForm.querySelector('button').textContent = "Entrar";
  } else {
    h2.textContent = "Crie sua conta";
    toggleLink.textContent = "Login";
    loginForm.querySelector('button').textContent = "Cadastrar";
  }

  loginForm.reset();
});

// Validação simples do formulário
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if(email === "" || senha === "") {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if(!email.includes("@")) {
    alert("Digite um e-mail válido.");
    return;
  }

  if(isLogin) {
    alert(`Login realizado com sucesso!\nEmail: ${email}`);
  } else {
    alert(`Conta criada com sucesso!\nEmail: ${email}`);
  }

  loginForm.reset();
});
