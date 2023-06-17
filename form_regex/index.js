let nomeInput = document.getElementById("name");
let email = document.getElementById("email");
let cep = document.getElementById("cep");

function validarNome() {

  let nome = nomeInput.value;
  let nameRegex = /^.{3,}$/;

  if (nameRegex.test(nome)) {
    nomeInput.classList.remove('input-vermelho');
    nomeInput.classList.add('input-verde');
    document.getElementById("nomeErro").textContent = '';
  } else {
    nomeInput.classList.remove('input-verde');
    nomeInput.classList.add('input-vermelho');
    document.getElementById("nomeErro").textContent = 'Nome inválido. Insira pelo menos 3 caracteres.';
  }
}


function validarEmail() {

  let emailInput = email.value;
  let emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;

  if (emailRegex.test(emailInput)) {
    email.classList.remove('input-vermelho');
    email.classList.add('input-verde');
    document.getElementById("emailErro").textContent = '';
  }
  else {
    email.classList.remove('input-verde');
    email.classList.add('input-vermelho');
    document.getElementById("emailErro").textContent = 'E-mail inválido. Utilize o formato "xxxx@xxxx.xxx".';
  }


}
function validarCep() {

  IMask(document.querySelector("#cep"), {
    mask: "00000-000",
  });

  let cepInput = cep.value;
  let cepRegex = /^\d{5}-\d{3}$/;
  
  if (cepRegex.test(cepInput)) {
    cep.classList.remove('input-vermelho');
    cep.classList.add('input-verde');
    document.getElementById("cepErro").textContent = '';
  }
  else {
    cep.classList.remove('input-verde');
    cep.classList.add('input-vermelho');
    document.getElementById("cepErro").textContent = 'CEP inválido. Utilize o formato "00000-000".';
  }
}

function validarFormulario() {
  if (nomeInput.classList.contains('input-vermelho') ||
    email.classList.contains('input-vermelho') ||
    cep.classList.contains('input-vermelho')) {
    alert("Preencha corretamente todos os campos obrigatórios!");
    return false; 
  }
  return true; 
}
