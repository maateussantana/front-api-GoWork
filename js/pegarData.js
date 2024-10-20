// Formatação automática da data
document.getElementById("dataNascimento").addEventListener("input", function () {
  let value = this.value.replace(/\D/g, "");
  if (value.length > 0) {
    value = value.replace(/^(\d{2})(\d)/, "$1/$2");
    value = value.replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3");
  }
  this.value = value;
});

function validarDataNascimento(data) {
  const parts = data.split("/");
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);
  const year = parseInt(parts[2], 10);

  const isValidDay = day >= 1 && day <= 31;
  const isValidMonth = month >= 1 && month <= 12;
  const isValidYear = year >= 1904 && year <= 2016;

  return isValidDay && isValidMonth && isValidYear;
}
