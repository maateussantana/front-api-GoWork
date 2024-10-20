formPessoa.addEventListener("submit", (event) => {
  event.preventDefault();
  const dataPessoa = new FormData(formPessoa);
  dataPost = Object.fromEntries(dataPessoa);
  let statusButton = document.getElementById("salvarPessoa").innerText;

  if (formPessoa.checkValidity() == false) {
    swal({
      title: "Existem campos vazios",
      text: "Preencha os campos vazios e tente novamente",
      icon: "warning",
      dangerMode: true,
    });
    return;
  }

  if (statusButton.trim() == "Salvar") {
    if (validarDataNascimento(dataPost.dataNascimento)) {
      salvarPessoa(dataPost);
    } else {
      swal({
        title: "Data de Nascimento Inválida",
        text: "A data de nascimento inserida é inválida. Por favor, insira uma data válida.",
        icon: "error",
      });
    }
  } else {
    if (validarDataNascimento(dataPost.dataNascimento)) {
      atualizarPessoa(dataPost);
    } else {
      swal({
        title: "Data de Nascimento Inválida",
        text: "A data de nascimento inserida é inválida. Por favor, insira uma data válida.",
        icon: "error",
      });
    }
  }
});