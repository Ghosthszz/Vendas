function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    function setPermissionCookie(permission) {
        document.cookie = "permission=" + permission + "; expires=session;";
    }

    if (email === 'Leonardo' && password === 'blk') {
        window.location.href = 'Leonardo.html';
        setPermissionCookie('Leonardo');
    } else
    
    if (email === 'ghosthszz' && password === 'senha') {
        window.location.href = 'ghosthszz.html';
        setPermissionCookie('ghosthszz');
    } else
    
    if (email === 'Thiago' && password === 'senha1') {
        window.location.href = 'Thiago.html';
        setPermissionCookie('thiago');
    } else
    
    {
      
      
      
      
  document.getElementById('error-msg').style.display = 'block';
    }
}
