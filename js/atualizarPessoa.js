function atualizarPessoa(dados) {
  dados.id = parseInt(dados.id);

  console.log("update", dados);
  fetch(url + dados.id, {
    method: "PATCH",
    body: JSON.stringify(dados),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((pessoa) => {
      console.log(pessoa);
      formPessoa.reset();
      formPessoa.classList.remove("was-validated");
      mostrarTable()
      pegarPessoas();
      document.getElementById("idPessoa").value = ""
      swal({
        title: "Atualizado com sucesso",
        text: `A pessoa ${pessoa.nome.split(" ")[0].toUpperCase()}  foi atualizada com sucesso`,
        icon: "success"
      })

    }).catch(err => {
      console.log(err);
    });
}
