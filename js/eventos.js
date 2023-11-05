$('#myModal').on('hidden.bs.modal', function () {
    document.getElementById('formAvaliacao').reset();
});

$(document).ready(function () {
    $('#formAvaliacao').submit(function (event) {
        // Impedir o envio automático do formulário
        event.preventDefault();

        // Realizar a validação do formulário usando o Bootstrap
        if (this.checkValidity() === false) {
            return;
        }
        if (!validarCampos()) {
            return;
        }
        let avaliacao = {
            title: document.getElementById("nome").value,
            year: parseInt(document.getElementById("ano").value),
            genre: document.getElementById("genero").value,
            rating: parseInt(document.getElementById("nota").value)
        };

        postAvaliacao(avaliacao)
    });
});

