const registerForm = document.querySelector('#registerForm');
const loginForm = document.querySelector('#loginForm');

function formatRegister() {
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;
    const agreement = registerForm.agreement.checked;

    return {
        username: username,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
        agreement: agreement
    }
}

function formatLogin() {
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const agreement = loginForm.agreement.checked;
    return {
        username: username,
        password: password,
        agreement: agreement
    }
}


if(registerForm) {

    registerForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const data = formatRegister();
    
        const response = await fetch('/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    
        const result = await response.json();
    
        alert(result.msg);
    })

}

if(loginForm) {
    
    loginForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const data = formatLogin();
    
        const response = await fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
    
        const result = await response.json();
    
        alert(result.msg);
    })

}
