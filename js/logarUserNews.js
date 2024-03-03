function localNews() {
  const nomeUsuario = localStorage.getItem("nome");
  if (localStorage.getItem("nome") != null) {
    const user = document.querySelector("#div-user-news");
    const iconUser = document.querySelector("#icon-user-news");

    user.classList.remove("esconde-user");
    user.classList.add("user-div");

    iconUser.innerHTML = `<span>${nomeUsuario}</span>`;
  } else {
  }
}

localNews();
