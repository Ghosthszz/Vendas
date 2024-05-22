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
        document.getElementById('custom-error-msg').style.display = 'block';
        setPermissionCookie('thiago');


    } else if (email === 'Neto' && password === 'Larissa') {
        document.getElementById('custom-error-msg').style.display = 'block';


    } else if (email === 'Leonardo' && password === 'Gustavogabanella260576') {
        window.location.href = 'frontend/paginas/users/Leonardo.html';
        setPermissionCookie('Leonardo');


    } else {
        document.getElementById('error-msg').style.display = 'block';
    }
    if (email === 'Cleiton' && password === '0509') {
        window.location.href = 'frontend/paginas/users/Cleiton.html';
        setPermissionCookie('cleiton');


    } else {
    }
    if (email === 'EXEMPLO' && password === 'VIP') {
        window.location.href = 'frontend/paginas/exemplos/VIP.html';
        setPermissionCookie('exemplo_vip');


    } else{

    }
    if (email === 'EXEMPLO' && password === 'NORMAL') {
        window.location.href = 'frontend/paginas/exemplos/NORMAL.html';
        setPermissionCookie('exemplo_normal');


    } else{

    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.activeElement.id === 'email' || document.activeElement.id === 'password') {
            login();
        }
    }
});
