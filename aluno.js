const form = document.getElementById('fixaAluno');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const dados = {
    nome: form.nome.value,
    rg: form.rg.value,
    cpf: form.cpf.value,
    dataNascimento: form.data.value, // nome compatível com a API
    endereco: form.endereco.value,
    bairro: form.bairro.value,
    municipio: form.municipio.value,
    uf: form.uf.value,
    telefoneFixo: form.telefoneFixo.value,
    telefone: form.telefone.value,
    email: form.email.value,
    curso: form.curso.value,
  };

  try {
    const resp = await fetch('http://localhost:3000/alunos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    });

    const texto = await resp.text();
    if (!resp.ok) {
      throw new Error(`Erro ${resp.status}: ${texto || 'Falha no envio'}`);
    }

    alert('Enviado com sucesso!');
    console.log('Resposta da API:', texto);
    form.reset();
  } catch (err) {
    console.error(err);
    alert(`Não foi possível enviar: ${err.message}`);
  }
});
