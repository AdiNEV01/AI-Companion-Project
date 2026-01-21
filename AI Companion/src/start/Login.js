function Login() {
    window.location.href = '../home/home.html';
}

document.addEventListener('DOMContentLoaded', function() {
    const LoginButton = document.getElementById('login-btn');
    console.log(LoginButton);
    if(LoginButton) {
        LoginButton.addEventListener('click', (e) => {
            e.preventDefault();
            Login();
        });
    }
}); 