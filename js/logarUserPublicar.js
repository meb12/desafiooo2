function localPublicacao() {
  const nomeUsuario = localStorage.getItem("nome");

  if (localStorage.getItem("nome") != null) {
    const user = document.querySelector("#div-user-post");
    const iconUser = document.querySelector("#icon-user-post");

    user.classList.remove("esconde-user");
    user.classList.add("user-div");

    iconUser.innerHTML = `<span>${nomeUsuario}</span>`;
  }
}

localPublicacao();
