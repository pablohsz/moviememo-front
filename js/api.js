function postAvaliacao(avaliacao) {
    $.ajax({
        url: 'http://localhost:9092/movie',
        method: 'POST',
        data: JSON.stringify(avaliacao),
        contentType: 'application/json',
        success: function (response) {
            // Manipule a resposta do backend aqui
            let message = "Avaliação de id " + response.id + " criada com sucesso!"
            mostrarModal('Sucesso!', message);
        },
        error: function (error) {
            let message = "Ocorreu um erro ao publicar a avaliação: " + error.message;
            mostrarModal('Erro', message);
        }
    });
}

function getAllAvaliacoes() {
    const tableBody = document.querySelector('tbody');
    $.ajax({
        url: 'http://localhost:9092/movie',
        method: 'GET',
        success: function (response) {
            response.forEach(avaliacao => {
                const row = document.createElement('tr');
                row.innerHTML = `
                        <td>${avaliacao.id}</td>
                        <td>${avaliacao.title}</td>
                        <td>${avaliacao.genre.charAt(0).toUpperCase() + avaliacao.genre.slice(1)}</td>
                        <td>${avaliacao.year}</td>
                        <td>${avaliacao.rating}</td>
                      `;
                tableBody.appendChild(row);
            });
        },
        error: function (error) {
            console.log(error);
        }
    });
}