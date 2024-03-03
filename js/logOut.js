import { limpaLocalStorage } from "./ClearStorage.js";
const btnSair = document.querySelector("#icon-sair");

btnSair.addEventListener("click", () => {
  limpaLocalStorage();
});
