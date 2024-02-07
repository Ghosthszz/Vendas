function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifique se as credenciais estão corretas (substitua isso com suas próprias verificações)
    if (email === 'usuario@email.com' && password === 'senha123') {
        // Redirecione para a página autorizada
        window.location.href = 'pagina_autorizada.html';
    } else {
        // Exiba mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
}