function pegarPessoas() {
  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((pessoas) => {
      console.log(pessoas);
      listaPessoas = "";
      for (let pessoa of pessoas) {
        listaPessoas += `
      <tr>
          <th scope="row">${pessoa.id}</th>
          <td>${pessoa.nome}</td>
          <td>${pessoa.idade}</td>
          <td>${pessoa.dataNascimento}</td>
          <td>${pessoa.email}</td>
          <td>
            <button onclick="editarPessoa(${pessoa.id})" class="btn btn-primary"><i class="fa-solid fa-edit"></i></button>
            <button onclick="deletarPessoa(${pessoa.id})" class="btn btn-danger"><i class="fa-solid fa-trash"></i></button>
          </td>
      </tr>
      `;
      }
      document.querySelector("tbody").innerHTML = listaPessoas;
    });
}
pegarPessoas()