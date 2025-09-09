const formTitle = document.getElementById('form-title');
const loginForm = document.getElementById('login-form');
const toggleText = document.getElementById('toggle-text');

let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  formTitle.textContent = isLogin ? 'Entrar no TecnoFlow' : 'Registrar no TecnoFlow';
  loginForm.querySelector('button').textContent = isLogin ? 'Entrar' : 'Registrar';
  toggleText.innerHTML = isLogin
    ? 'Ainda não tem uma conta? <a onclick="toggleForm()">Registrar</a>'
    : 'Já tem uma conta? <a onclick="toggleForm()">Entrar</a>';
  
  loginForm.reset(); // limpa os campos ao alternar
}

// Validação simples
loginForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  if (email === '' || password === '') {
    alert('Preencha todos os campos!');
    return;
  }

  if (isLogin) {
    alert(`✅ Login realizado com: ${email}`);
    // Exemplo: window.location.href = "home.html";
  } else {
    alert(`✅ Conta registrada para: ${email}`);
    // Exemplo: salvar em localStorage simulado
  }

  loginForm.reset();
});
