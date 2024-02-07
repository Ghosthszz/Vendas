function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Verifique se as credenciais estão corretas (substitua isso com suas próprias verificações)
    if (email === 'Leonardo' && password === 'Leonardo2007') {
      
        // Redirecione para a página autorizada
        window.location.href = 'Leonardo.html';
    } else {
        // Exiba mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
    if (email === 'ghosthszz' && password === 'senha') {
        // Redirecione para a página autorizada
        window.location.href = 'ghosthszz.html';
    } else {
        // Exiba mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
if (email === 'Thiago' && password === 'Thiago2008') {
      
        // Redirecione para a página autorizada
        window.location.href = 'Thiago.html';
    } else {
        // Exiba mensagem de erro
        document.getElementById('error-msg').style.display = 'block';
    }
    // Após a autenticação bem-sucedida
// Defina uma variável de sessão, cookie ou armazene no localStorage para indicar que o usuário está logado e tem permissão.
localStorage.setItem('usuarioLogado', true); // Exemplo: armazenando no localStorage
}