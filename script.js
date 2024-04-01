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
    
    if (email === 'Gustavo' && password === 'Nathalia260576') {
        window.location.href = 'ghosthszz.html';
        setPermissionCookie('ghosthszz');
    } else
    
    if (email === 'Thiago' && password === 'dragao123') {
        document.getElementById('custom-error-msg').style.display = 'block';
    } else
    
    {
 if (email === 'Neto' && password === 'Larissa') {
        document.getElementById('custom-error-msg').style.display = 'block';
    } else
if (email === 'Leonardo' && password === 'Gustavogabanella260576') {
        window.location.href = 'Leonardo.html';
        setPermissionCookie('Leonardo');
    } else
    
    
      
      
      
      
  document.getElementById('error-msg').style.display = 'block';
    }
}
