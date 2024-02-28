import { conectaAPI } from "../js/conectaAPI.js";
import { toggleModalCadastro } from "../js/app1.js";

const formCadastro = document.querySelector("[data-form-cadastro]");
const btnEnvio = document.querySelector("#enviar");

async function criaUsuario(evento) {
  evento.preventDefault();
  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const cpf = document.querySelector("#cpf").value;
  const aniversario = document.querySelector("#aniversario").value;
  const senha = document.querySelector("#password").value;
  try {
    await conectaAPI.registrosAPI(nome, email, cpf, aniversario, senha);
    toggleModalCadastro();
  } catch (error) {
    alert(error);
  }
}

btnEnvio.addEventListener("click", (evento) => criaUsuario(evento));
