import { conectaAPI } from "./conectaAPI.js";
const { search } = window.location;
const params = new URLSearchParams(search);
const IdPostagem = params.get("id");
var noticiaInteira = null;
async function recebeID() {
  noticiaInteira = await conectaAPI.carregaNoticia(IdPostagem);
  constroiNoticia(
    noticiaInteira.data.titulo,
    noticiaInteira.data.subtitulo,
    noticiaInteira.data.img,
    noticiaInteira.data.nomeUsuario,
    noticiaInteira.data.dataCriacao,
    noticiaInteira.data.noticia,
    noticiaInteira.data.totalCurtidas
  );
}
recebeID();

function constroiNoticia(
  titulo,
  subtitulo,
  img,
  nomeUsuario,
  dataCriacao,
  noticia,
  curtidas
) {
  const divNoticia = document.querySelector("#divNoticia");
  divNoticia.innerHTML = `<div class="div-header">
  <h2 class="news-title">${titulo}</h2>
  <h3 class="news-subtitle">${subtitulo}</h3>
</div>

<div class="div-img">
  <img class="news-img" src="${img}" alt="">
</div>

<div class="news-p">
  <p class="news-text">${noticia}</p>
</div>
<div class="footer-news">
  <div class="div-author-news">
    <div>
      <a href="#">${nomeUsuario}</a>
      <div>
        <span class="size-letter"> ${dataCriacao}</span>
        <span class="size-letter"> <i class="bi bi-dot"></i></span>
        <span class="size-letter"><i class="bi bi-stars"></i></span>
      </div>
    </div>
  </div>
  <div class="div-like">
    <button id="like" type="button">
      <div class="label">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.4 5.25C5.61914 5.25 3.25 7.3293 3.25 10.0298C3.25 11.8927 4.12235 13.4612 5.27849 14.7604C6.43066 16.0552 7.91714 17.142 9.26097 18.0516L11.5796 19.6211C11.8335 19.793 12.1665 19.793 12.4204 19.6211L14.739 18.0516C16.0829 17.142 17.5693 16.0552 18.7215 14.7604C19.8777 13.4612 20.75 11.8927 20.75 10.0298C20.75 7.3293 18.3809 5.25 15.6 5.25C14.1665 5.25 12.9052 5.92214 12 6.79183C11.0948 5.92214 9.83347 5.25 8.4 5.25Z" fill="black" />
        </svg>
        Curtir
      </div>
      <div class="number" id="number">${curtidas}</div>
    </button>
  </div>
</div>
</div>`;
  return divNoticia;
}

const curtidas = async (IdPostagem) => {
  const x = await recebeID();

  const btnCurtir = document.querySelector("#like");
  btnCurtir.addEventListener("click", async () => {
    console.log(noticiaInteira);

    var usuario = localStorage.getItem("usuario");
    let curtida = true;
    usuario = JSON.parse(usuario);
    if (noticiaInteira != null) {
      noticiaInteira.data.listCurtidas.map((x) => {
        console.log("usuario: ", usuario.idUsuario);
        console.log("noticia usuario: ", x.idUsuarioPostagem);
        if (x.idUsuarioPostagem == usuario.idUsuario) {
          curtida = !x.curtida;
          console.log("teste", curtida);
        }
      });
    }
    await conectaAPI.curtidaNoticia(noticiaInteira.data.idPostagem, curtida);
    noticiaInteira = await conectaAPI.carregaNoticia(IdPostagem);
  });
};

curtidas(IdPostagem);
