import { conectaAPI } from "./conectaAPI.js";
import { constroiCard } from "./mostrarNoticia.js";

const btnPesquisar = document.querySelector("#pesquisar");

btnPesquisar.addEventListener("click", async () => {
  console.log("foi clicado");
  const valorPesquisa = document.querySelector("#input_search").value;
  console.log(valorPesquisa);

  const lista = document.querySelector("#lista-news");
  const pesquisaResult = await conectaAPI.PesquisaNoticias(valorPesquisa);

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }

  const noticiaNova = pesquisaResult.data;
  noticiaNova.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.subtitulo,
        elemento.img,
        elemento.nomeUsuario,
        elemento.dataCriacao,
        elemento.idPostagem
      )
    )
  );
  if (pesquisaResult.data.length == 0) {
    lista.innerHTML = `<h2 class=mensagem__titulo> Não existem notícias com esse termo</h2>
    <a href="../pages/posts.html">retornar para página de notícia</a>`;
  }
});
