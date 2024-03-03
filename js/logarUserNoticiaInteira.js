function localNoticiaInteira() {
  const nomeUsuario = localStorage.getItem("nome");
  if (localStorage.getItem("nome") != null) {
    const user = document.querySelector("#div-user-noticia");
    const iconUser = document.querySelector("#icon-user-noticia");

    user.classList.remove("esconde-user");
    user.classList.add("user-div");

    iconUser.innerHTML = `<span>${nomeUsuario}</span>`;
  } else {
  }
}

localNoticiaInteira();
