const hamburguer = document.querySelector(".hamburguer");

const nav_list = document.querySelector(".nav-list");

const nav_li = document.querySelectorAll(".nav-a");

hamburguer.addEventListener("click", () => {
  nav_list.classList.toggle("active");
});
