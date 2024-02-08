function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


        // Função para criar o cookie de permissão
        function setPermissionCookie() {
            document.cookie = "permission=granted; expires=session;";
        }

        if (email === 'Leonardo' && password === 'amisadepunheteira') {
      
        
        window.location.href = 'Leonardo.html';

        etPermissionCookie();
    } else {

        
        document.getElementById('error-msg').style.display = 'block';
    }

    if (email === 'ghosthszz' && password === 'senha') {
        
        window.location.href = 'ghosthszz.html';

        setPermissionCookie();

    } else {
        
        
        document.getElementById('error-msg').style.display = 'block';
    }
if (email === 'Thiago' && password === 'Thiago2008') {
      
        
        window.location.href = 'Thiago.html';

        etPermissionCookie();
    } else {
        
        document.getElementById('error-msg').style.display = 'block';
    }
    
localStorage.setItem('usuarioLogado', true); 
}
