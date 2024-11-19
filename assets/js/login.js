const ADMIN_ROL = "ADMIN";
const USER_ROL = "USER"

const validUsers = {
    "yenni": {password: "ab2f758a0a4322ea3a193088416945ee7d04c1cdf6f1eed8e28471fd85cbdf3f", rol: USER_ROL},
    "eleazar": {password: "ff177a2ac722a86c8882dbc4628f0325b815dcc7de3709d8f072f8018e44989a", rol: USER_ROL},
    "inga" : {password: "564bc56fb5eaef8e85fb28a0d3f5a3073ef53006589a535f4ee29c0dd52f6668", rol: ADMIN_ROL},
    "admin" : {password: "8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918", rol: ADMIN_ROL}
};

async function generateSHA256Hash(message) {
    const encoder = new TextEncoder();
    const data = encoder.encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(hashBuffer)); 
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}

document.getElementById("loginForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    if (validUsers[username] && validUsers[username].password === await generateSHA256Hash(password)) {
        let mss = `Bienvenido(a) ${username}, a la pagina del `;
        mss += validUsers[username].rol === ADMIN_ROL ? " administrador" : " usuario";
        messageElement.textContent = mss;
        messageElement.style.color = "green";
    } else {
        messageElement.textContent = "Usuario o contraseña inválido.";
        messageElement.style.color = "red";
    }
});

document.getElementById("showPassword").addEventListener("change", function() {
    const passwordField = document.getElementById("password");
    passwordField.type = this.checked ? "text" : "password"; 
});
