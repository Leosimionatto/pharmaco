function checkForm() {
    if ($("#name").val() == "") {
        alert("Nome é obrigatório!");
    } else if ($("#user").val() == "") {
        alert("Usuário é obrigatório!");
    } else if ($("#email").val() == "" && $("#confirmEmail").val() == "") {
        alert("E-mails estão vazios!")
    } else if ($("#password").val() == "" && $("#confirmPassword").val() == "") {
        alert("Senhas estão vazios!")
    } else if ($("#email").val() != $("#confirmEmail").val()) {
        alert("E-mail devem ser iguais!");
    } else if ($("#password").val() != $("#confirmPassword").val()) {
        alert("Senhas devem ser iguais!");
    } else {
        location.href = 'login.html'
    }
}

function checkLogin() {
    if ($("#inputEmail").val() == "" && $("#inputPassword").val() == "") {
        alert("Campos em branco!")
    } else if ($("#inputEmail").val() == "") {
        alert("E-mail está vazio")
    } else if ($("#inputPassword").val() == "") {
        alert("Senha está em branco")
    } else if (
        $("#inputEmail").val() != "leosimionatto@hotmail.com" &&
        $("#inputEmail").val() != "bruno@user.com" &&
        $("#inputEmail").val() != "fernandobatata@hotmail.com" &&
        $("#inputEmail").val() != "marcos@hotmail.com" &&
        $("#inputEmail").val() != "miguel123@hotmail.com")  {
        alert("E-mail incorreto!")
    } else if (
        $("#inputEmail").val() == "marcos@hotmail.com" && $("#inputPassword").val() == "123abc" ||
        $("#inputEmail").val() =="miguel123@hotmail.com" && $("#inputPassword").val() == "123abc") {
        alert("Usuário Inativo ")
    } else if ($("#inputPassword").val() != "123abc") {
        alert("Senha incorreta!")
    } else {
        location.href = 'users.html'
    }
}