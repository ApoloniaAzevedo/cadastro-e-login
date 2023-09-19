const loginForm = document.getElementById("login-form");
const cadastroForm = document.getElementById("cadastro-form");
const loginLink = document.getElementById("login-link");
const cadastroLink = document.getElementById("cadastro-link");

loginLink.addEventListener("click", () => {
    loginForm.classList.remove("hidden");
    cadastroForm.classList.add("hidden");
});

cadastroLink.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    cadastroForm.classList.remove("hidden");
});
