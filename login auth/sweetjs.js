document.getElementById('register').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);

        alert('Registration successful!');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
});

document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('welcome-page').style.display = 'block';
        document.getElementById('welcome-user').textContent = username;
    } else {
        alert('Invalid username or password');
    }
});

document.getElementById('logout').addEventListener('click', function() {
    document.getElementById('welcome-page').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('login-username').value = '';
    document.getElementById('login-password').value = '';
});
