const abreModalLogin = document.querySelector("#btn-logar");
const modalLogin = document.querySelector("#modal-login");
const abreModalCadastro = document.querySelector("#btn-cadastrar");
const modalCadastro = document.querySelector("#modal-cadastro");
const fechaModalCadastro = document.querySelector("#fecha-cadastro");
const fechaModalLogin = document.querySelector("#fecha-login");
const fade = document.querySelector("#fade");

export function toggleModalLogin() {
  modalLogin.classList.toggle("hide");
  fade.classList.toggle("hide");
  const email = document.querySelector("#email-login");
  const senha = document.querySelector("#password-login");

  email.value = "";
  senha.value = "";
}

export function toggleModalCadastro() {
  modalCadastro.classList.toggle("hide");
  fade.classList.toggle("hide");

  const nome = document.querySelector("#nome");
  const email = document.querySelector("#email");
  const cpf = document.querySelector("#cpf");
  const aniversario = document.querySelector("#aniversario");
  const senha = document.querySelector("#password");

  nome.value = " ";
  email.value = " ";
  cpf.value = " ";
  aniversario.value = " ";
  senha.value = "";
}

[abreModalLogin, fechaModalLogin].forEach((el) => {
  el.addEventListener("click", () => toggleModalLogin());
});

[abreModalCadastro, fechaModalCadastro].forEach((el) => {
  el.addEventListener("click", () => toggleModalCadastro());
});
