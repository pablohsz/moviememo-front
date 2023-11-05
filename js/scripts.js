function validarCampos() {

    let nome = document.getElementById("nome").value;
    let ano = parseInt(document.getElementById("ano").value);
    let nota = parseInt(document.getElementById("nota").value);
    let message = "Ocorreu um erro na inscrição do formulário. ";


    if (!nome.match(/\w{3,}/)) {
        message += "O nome do filme deve conter no mínimo três caracteres.";
        document.getElementById("nome").focus();
    } else if (ano <= 1888 || ano >= 2024 || ano == 'NaN') {
        message += "O ano deve ser um número entre 1888 e 2023.";
        document.getElementById("ano").focus();
    } else if (nota < 0 || nota > 5 || nota == 'NaN') {
        message += "A nota deve estar entre 0 e 5.";
        document.getElementById("nota").focus();
    } else {
        return true
    }
    mostrarModal('Erro de validação', message);
    return false; // Permite o envio do formulário se os campos estiverem corretos
}

function mostrarModal(titulo, mensagem){
    document.getElementById("tituloModal").innerHTML = titulo;
    document.getElementById("mensagemModal").innerHTML = mensagem;
    $("#myModal").modal();
}
