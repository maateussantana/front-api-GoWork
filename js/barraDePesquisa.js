document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const buttonSearch = document.getElementById("buttonSearch");
    const buttonReset = document.getElementById("buttonReset");

    // Função para buscar pessoas
    function buscarPessoas() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        filterTable(searchTerm);
    }

    buttonSearch.addEventListener("click", buscarPessoas);

    buttonReset.addEventListener("click", function () {
        searchInput.value = "";
        buscarPessoas(); // Chama a função de busca ao clicar no botão Reset
    });

    // Evento de teclado para acionar a busca ao pressionar Enter
    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault(); // Evita o comportamento padrão do Enter (por exemplo, envio de formulário)
            buscarPessoas(); // Chama a função de busca ao pressionar Enter
        }
    });

    function filterTable(searchTerm) {
        const tableRows = document.querySelectorAll("#tablePessoa table tbody tr");

        tableRows.forEach(function (row) {
            const nomeCell = row.querySelector("td:nth-child(2)");
            if (nomeCell) {
                const nomeText = nomeCell.textContent.toLowerCase();
                if (nomeText.includes(searchTerm)) {
                    row.style.display = "";
                } else {
                    row.style.display = "none";
                }
            }
        });
    }
});
