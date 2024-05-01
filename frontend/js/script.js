function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    function setPermissionCookie(permission) {
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = "permission=" + permission + "; expires=" + expirationDate.toUTCString() + "; path=/";
    }

    if (email === 'Leonardo' && password === 'blk') {
        window.location.href = 'frontend/paginas/users/Leonardo.html';
        setPermissionCookie('Leonardo');
    } else if (email === 'Gustavo' && password === 'Nathalia260576') {
        window.location.href = 'frontend/paginas/VIP/ghosthszz.html';
        setPermissionCookie('ghosthszz');
    } else if (email === 'Thiago' && password === 'dragao123') {
        window.location.href = 'frontend/paginas/users/Thiago.html';
        setPermissionCookie('thiago');
    } else if (email === 'Neto' && password === 'Larissa') {
        document.getElementById('custom-error-msg').style.display = 'block';
    } else if (email === 'Leonardo' && password === 'Gustavogabanella260576') {
        window.location.href = 'frontend/paginas/users/Leonardo.html';
        setPermissionCookie('Leonardo');
    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.activeElement.id === 'email' || document.activeElement.id === 'password') {
            login();
        }
    }
});
