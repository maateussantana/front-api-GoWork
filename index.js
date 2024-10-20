const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  console.log(req.url);
  console.log(req.method);

  if (req.url == "/") {
    indexHtml = fs.readFileSync("./index.html");
    res.end(indexHtml);
  } else if (req.url == "/js/script.js") {
    script = fs.readFileSync("js/script.js");
    res.end(script);
  } else if (req.url == "/js/pegarPessoas.js") {
    pegarPessoasJs = fs.readFileSync("js/pegarPessoas.js");
    res.end(pegarPessoasJs);
  } else if (req.url == "/js/mostrarForm.js") {
    mostrarFormJs = fs.readFileSync("js/mostrarForm.js");
    res.end(mostrarFormJs);
  } else if (req.url == "/js/mostrarTable.js") {
    mostrarTableJs = fs.readFileSync("js/mostrarTable.js");
    res.end(mostrarTableJs);
  } else if (req.url == "/js/salvarPessoa.js") {
    salvarPessoaJs = fs.readFileSync("js/salvarPessoa.js");
    res.end(salvarPessoaJs);
  } else if (req.url == "/js/atualizarPessoa.js") {
    atualizarPessoaJs = fs.readFileSync("js/atualizarPessoa.js");
    res.end(atualizarPessoaJs);
  } else if (req.url == "/js/editarPessoa.js") {
    editarPessoaJs = fs.readFileSync("js/editarPessoa.js");
    res.end(editarPessoaJs);
  } else if (req.url == "/js/deletarPessoa.js") {
    deletarPessoaJs = fs.readFileSync("js/deletarPessoa.js");
    res.end(deletarPessoaJs);
  } else if (req.url == "/js/pegarData.js") {
    pegarDataJs = fs.readFileSync("js/pegarData.js");
    res.end(pegarDataJs);
  } else if (req.url == "/js/barraDePesquisa.js") {
    barraDePesquisaJs = fs.readFileSync("js/barraDePesquisa.js");
    res.end(barraDePesquisaJs);
  } else if (req.url == "/js/validacaoAtualizarSalvar.js") {
    validacaoAtualizarSalvarJs = fs.readFileSync("js/validacaoAtualizarSalvar.js");
    res.end(validacaoAtualizarSalvarJs);
  } else {
    res.end("404 não encontrado");
  }
});
server.listen(3000, function () {
  console.log("Servidor no ar na porta");
});