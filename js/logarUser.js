import { conectaAPI } from "../js/conectaAPI.js";
import { toggleModalLogin } from "../js/app1.js";

const btnLogin = document.querySelector("#loginEnvio");

async function logaUser(evento) {
  evento.preventDefault();
  const email = document.querySelector("#email-login").value;
  const senha = document.querySelector("#password-login").value;

  const listaInfoUsuario = await conectaAPI.loginUser(email, senha);
  if (listaInfoUsuario.statusCode != 200) {
    alert(listaInfoUsuario.message);
  } else {
    const usuario = listaInfoUsuario.data;
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("token", usuario.token);
    localStorage.setItem("nome", usuario.nomeUsuario);
    toggleModalLogin();
    localUser();
  }
}

btnLogin.addEventListener("click", (evento) => logaUser(evento));

function localUser() {
  const nomeUsuario = localStorage.getItem("nome");
  if (localStorage.getItem("nome") != null) {
    const user = document.querySelector("#div-user");
    const iconUser = document.querySelector("#icon-user");
    const headerIndex = document.querySelector("#indexHeader");

    document.querySelector("#btn-logar").classList.add("esconde-a");
    document.querySelector("#btn-cadastrar").classList.add("esconde-a");
    document.querySelector("#btn-publicar").classList.remove("publicacao");
    document.querySelector("#btn-publicar-icon").classList.remove("publicacao");

    user.classList.remove("esconde-user");
    user.classList.add("user-div");
    headerIndex.classList.remove("header-index");
    headerIndex.classList.add("header-index-logado");
    iconUser.innerHTML = `<span>${nomeUsuario}</span>`;
  } else {
  }
}

localUser();
