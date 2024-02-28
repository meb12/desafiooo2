import { conectaAPI } from "./conectaAPI.js";

let x = "";
const btnEnviar = document.querySelector("#btn-publicacao");

const campoTitulo = document.querySelector("#titulo");
const campoSubtitulo = document.querySelector("#subtitulo");
const campoTexto = document.querySelector("#texto");
const campoImagem = document.querySelector("#imagem");

async function criaPubli(evento) {
  const titulo = campoTitulo.value;
  const subtitulo = campoSubtitulo.value;
  const texto = campoTexto.value;
  const imagem = x;
  try {
    await conectaAPI.registrosPubli(titulo, subtitulo, texto, imagem);
  } catch {}
}

btnEnviar.addEventListener("click", (evento) => criaPubli(evento));

campoImagem.addEventListener("change", () => {
  const imagem = document.querySelector("#imagem").files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    x = reader.result;
  };

  reader.readAsDataURL(imagem);
});

function verificaLog() {
  console.log("entrou aqui 2");
  if (localStorage.getItem("nome") != null) {
    console.log("entrou aqui");
    campoTitulo.disabled = false;
    campoSubtitulo.disabled = false;
    campoTexto.disabled = false;
    campoImagem.disabled = false;
    btnEnviar.disabled = false;
  } else {
    console.log("certoooo");
    campoTitulo.disabled = true;
    campoSubtitulo.disabled = true;
    campoTexto.disabled = true;
    campoImagem.disabled = true;
  }
}
verificaLog();
