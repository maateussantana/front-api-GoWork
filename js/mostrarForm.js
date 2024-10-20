formPessoa = document.querySelector("form");
formPessoa.style.display = "none"


function mostrarForm(status){
  if(status == `Salvar`){
    document.getElementById("salvarPessoa").innerHTML = `<i class="fa-solid fa-floppy-disk""></i> Salvar`;
  }else{
    document.getElementById("salvarPessoa").innerHTML = `<i class="fa-solid fa-floppy-disk""></i> Atualizar`;
  }
  formPessoa.style.display = "block"
  document.getElementById('tablePessoa').style.display = "none"
}

