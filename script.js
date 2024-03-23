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
        window.location.href = 'Thiago.html';
        setPermissionCookie('thiago');
    } else
    
    {
 if (email === 'Neto' && password === 'Larissa') {
        window.location.href = 'Neto.html';
        setPermissionCookie('neto');
    } else
    
      
      
      
      
  document.getElementById('error-msg').style.display = 'block';
    }
}

function register() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Encrypt password
    var encryptedPassword = encryptPassword(password);

    // Check if email already exists
    var users = JSON.parse(localStorage.getItem('users')) || [];
    var existingUser = users.find(user => user.email === email);
    if (existingUser) {
        document.getElementById('error-msg').style.display = 'block';
        return;
    }

    // Register new user
    var newUser = {
        email: email,
        password: encryptedPassword
    };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Display success message
    document.getElementById('success-msg').style.display = 'block';
}

function encryptPassword(password) {
    // Simulating encryption
    return password.split('').reverse().join('');
}

