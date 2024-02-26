const abreModalLogin = document.querySelector("#btn-logar");
const fechaModalLogin = document.querySelector(".close-login");
const modalLogin = document.querySelector("#modal-login");
const abreModalCadastro = document.querySelector("#btn-cadastrar");
const fechaModalCadastro = document.querySelector(".close-cadastro");
const modalCadastro = document.querySelector("#modal-cadastro");
const fade = document.querySelector("#fade");

const toggleModalLogin = () => {
  modalLogin.classList.toggle("hide");
  fade.classList.toggle("hide");
};

const toggleModalCadastro = () => {
  modalCadastro.classList.toggle("hide");
  fade.classList.toggle("hide");
};

[abreModalLogin, fechaModalLogin, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModalLogin());
});

[abreModalCadastro, fechaModalCadastro, fade].forEach((el) => {
  el.addEventListener("click", () => toggleModalCadastro());
});
