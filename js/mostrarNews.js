import { conectaAPI } from "./conectaAPI.js";
import { constroiCard } from "./mostrarNoticia.js";

const listaN = document.querySelector("#lista-news");

async function listaNews() {
  try {
    const listaAPI = await conectaAPI.listaNoticias();
    listaAPI.data.forEach((elemento) =>
      listaN.appendChild(
        constroiCard(
          elemento.titulo,
          elemento.subtitulo,
          elemento.img,
          elemento.nomeUsuario,
          elemento.dataCriacao
        )
      )
    );
  } catch {
    listaN.innerHTML = `<h2 class=mensagem__titulo>Não foi possível carregar as notícias</h2>`;
  }
}

listaNews();
