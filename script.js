const symbols = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
const btn = document.getElementById("btn");
const password = document.getElementById("password");
const input = document.getElementById("input");
let passLenght = 0
let pass = ""
input.addEventListener("input", () => {
    passLenght = input.value;
})
btn.addEventListener("click", () => {
    if (passLenght < 1) {
        alert("Введите длину пароля");
    } else {
        pass = "";
        for (let i = 0; i < passLenght; i++) {
            let index = Math.floor(Math.random() * symbols.length);
            pass += symbols[index];
        }
        password.textContent = `Ваш пароль: ${pass}`;
    }
})

