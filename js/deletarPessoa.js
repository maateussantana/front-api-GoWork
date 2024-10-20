function deletarPessoa(id) {
  console.log("Excluindo pessoa com ID:", id); // Verifica se a função está sendo chamada corretamente
  swal({
    title: "Tem certeza que deseja excluir?",
    text: "Esta ação não pode ser desfeita",
    icon: "warning",
    buttons: {
      cancel: {
        text: "Cancelar",
        value: null,
        visible: true,
        className: "",
        closeModal: true,
      },
      confirm: {
        text: "Confirmar",
        value: true,
        visible: true,
        className: "btn-confirm btn-confirm-blue", // Adiciona classes para estilizar o botão
        closeModal: true,
      },
    },
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      fetch(url + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            swal({
              title: "Excluído com sucesso",
              text: "A pessoa foi excluída com sucesso",
              icon: "success",
            });
            pegarPessoas();
          } else {
            throw new Error("Erro ao excluir");
          }
        })
        .catch((err) => {
          console.error("Erro:", err);
          swal({
            title: "Erro",
            text: "Ocorreu um erro ao excluir a pessoa",
            icon: "error",
          });
        });
    } else {
      // Ação a ser tomada se o usuário cancelar a exclusão
      swal.close(); // Fecha o modal
    }
  });

  // Adiciona evento de teclado para detectar o pressionar da tecla Enter
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      document.querySelector(".btn-confirm").click(); // Simula o clique no botão Confirmar
    }
  });
}
