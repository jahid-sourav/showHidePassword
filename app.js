var password = document.getElementById('password');
var toggler = document.getElementById('passwordCaseToggler');
showHidePassword = () => {
    if (password.type == 'password') {
        password.setAttribute('type', 'text');
        toggler.classList.remove('fa-eye');
        toggler.classList.add('fa-eye-slash');
    } else {
        password.setAttribute('type', 'password');
        toggler.classList.remove('fa-eye-slash');
        toggler.classList.add('fa-eye');
    }
    };
toggler.addEventListener('click', showHidePassword);