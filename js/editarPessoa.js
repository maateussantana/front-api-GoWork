function editarPessoa(id) {
  fetch(url + id)
    .then((res) => {
      return res.json();
    })
    .then((pessoa) => {
      console.log(pessoa);
      formPessoa.nome.value = pessoa.nome;
      formPessoa.idade.value = pessoa.idade;
      formPessoa.dataNascimento.value = pessoa.dataNascimento;
      formPessoa.email.value = pessoa.email;
      document.getElementById("idPessoa").value = pessoa.id;
      mostrarForm("Atualizar");
    })
    .catch((err) => {
      console.log(err);
    });
}
