function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    function setPermissionCookie(permission) {
        document.cookie = "permission=" + permission + "; expires=session;";
    }

    if (email === 'Leonardo' && password === 'blk') {
        document.getElementById('custom-error-msg').style.display = 'block';
    } else
    
    if (email === 'Gustavo' && password === 'Nathalia260576') {
        window.location.href = 'ghosthszz.html';
        setPermissionCookie('ghosthszz');
    } else
    
    if (email === 'Thiago' && password === 'dragao123') {
        window.location.href = 'Thiago.html';
        setPermissionCookie('thiago');
    } else
    
    {
 if (email === 'Neto' && password === 'Larissa') {
        document.getElementById('custom-error-msg').style.display = 'block';
    } else
    
      
      
      
      
  document.getElementById('error-msg').style.display = 'block';
    }
}
