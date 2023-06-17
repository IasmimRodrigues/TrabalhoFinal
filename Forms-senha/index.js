// Entre 6 e 8 caracteres *
// Pelo menos 2 caracteres especiais *
// Um caractere em maiúscula e outro em minúscula *
// Pelo menos 1 número

let button = document.querySelector("button");
let warning = document.querySelector(".warning");

button.disabled = true;

const validations = {
  tamanho: /^.{6,8}$/,
  caracteresEspeciais: /(?:[^`!@#$%^&*\-_=+'\/.,]*[`!@#$%^&*\-_=+'\/.,]){2}/,
  maiusculaMinuscula: /^(?=.*[a-z]{1})(?=.*[A-Z]{1})/,
  numero: /^(?=.*\d){1}/,
};

function validatePassword() {
  let password = document.getElementById("password");
  let passwordValue = password.value;

  if (!validations.tamanho.test(passwordValue)) {
    warning.textContent = "A senha deve conter pelo menos de 6 a 8 caracteres!";
    warning.style.display = "flex";
    password.style.border = "1px solid #fb7185";
    button.disabled = true;
  } else if (!validations.caracteresEspeciais.test(passwordValue)) {
    warning.textContent =
      "A senha deve conter pelo menos 2 caracteres especiais!";
    warning.style.display = "flex";
    password.style.border = "1px solid #fb7185";
    button.disabled = true;
  } else if (!validations.maiusculaMinuscula.test(passwordValue)) {
    warning.textContent =
      "A senha deve conter pelo menos uma letra minúscula e uma MAIÚSCULA!";
    warning.style.display = "flex";
    password.style.border = "1px solid #fb7185";
    button.disabled = true;
  } else if (!validations.numero.test(passwordValue)) {
    warning.textContent = "A senha deve conter pelo menos um número!";
    warning.style.display = "flex";
    password.style.border = "1px solid #fb7185";
    button.disabled = true;
  } else {
    password.style.border = "1px solid var(--color-line-in-white)";
    warning.style.display = "none";
    button.disabled = false;
  }
}

function limparForm() {
  password.value = "";
  button.textContent = "Salvando...";
  setTimeout(() => {
    button.textContent = "Salvo";
  }, "1000");
  setTimeout(() => {
    button.textContent = "Salvar senha";
  }, "2000");

}
