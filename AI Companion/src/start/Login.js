function Login() {
    window.location.href = './home/home.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const LoginButton = document.getElementById('login-button');
    console.log(LoginButton);
    if(LoginButton) {
        LoginButton.addEventListener('click', Login);

    }
}); 