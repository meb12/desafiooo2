import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector("#lista-cards");

export function constroiCard(titulo, subtitulo, img, nomeUsuario, dataCriacao) {
  const noticias = document.createElement("li");
  noticias.classList = "card";
  noticias.innerHTML = `<img class="card-img" src="${img}">
  <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text">${subtitulo}</p>
      <div class="div-author">
         <div>
              <a href="../pages/noticias.html">${nomeUsuario}</a>
              <div>
                  <span class="size-letter">${dataCriacao}</span>
                  <span class="size-letter"><i class="bi bi-stars"></i></span>
              </div>
          </div>
      </div>
  </div>`;

  return noticias;
}

async function listaNoticias() {
  try {
    const listaAPI = await conectaAPI.listaNoticias();
    listaAPI.data.forEach((elemento) =>
      lista.appendChild(
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
    lista.innerHTML = `<h2 class=mensagem__titulo>Não foi possível carregar as notícias</h2>`;
  }
}
listaNoticias();
