const form = document.getElementById('formCurso');
    const cursoLista = document.getElementById('curso-lista');
    const mensagem = document.getElementById('mensagem');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const nome = document.getElementById('nomeCurso').value.trim();
      const descricao = document.getElementById('descricaoCurso').value.trim();
      const lucro = parseFloat(document.getElementById('lucroMensal').value);

      if(nome.length < 3) {
        mostrarMensagem('Nome do curso deve ter pelo menos 3 caracteres.', 'erro');
        return;
      }
      if(descricao.length < 10) {
        mostrarMensagem('Descrição deve ter pelo menos 10 caracteres.', 'erro');
        return;
      }
      if(isNaN(lucro) || lucro < 0) {
        mostrarMensagem('Informe um lucro mensal válido.', 'erro');
        return;
      }

      const novoCurso = document.createElement('div');
      novoCurso.classList.add('curso-item');

      novoCurso.innerHTML = `
        <div class="curso-info">
          <strong>${nome}</strong>
          <p>${descricao}</p>
        </div>
        <button class="inscrever-btn">Inscreva-se</button>
      `;

      cursoLista.appendChild(novoCurso);

      mostrarMensagem(`Curso "${nome}" adicionado com sucesso!`, 'sucesso');

      form.reset();
    });

    function mostrarMensagem(texto, tipo) {
      mensagem.textContent = texto;
      mensagem.className = 'mensagem ' + tipo;
      setTimeout(() => {
        mensagem.textContent = '';
        mensagem.className = 'mensagem';
      }, 4500);
    }