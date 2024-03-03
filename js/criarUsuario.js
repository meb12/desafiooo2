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

  const cadastraUser = await conectaAPI.registrosAPI(
    nome,
    email,
    cpf,
    aniversario,
    senha
  );

  if (cadastraUser.statusCode != 200) {
    alert(cadastraUser.message);
  } else {
    alert("cadastrado com sucesso!");
    toggleModalCadastro();
  }
}

btnEnvio.addEventListener("click", (evento) => criaUsuario(evento));
