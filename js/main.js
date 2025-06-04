import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.rederizarPensamentos();
});

const formularioPensamento = document.getElementById("pensamento-form");
formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario());

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const pensamento = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autor").value;

  try {
    await api.salvarUmPensamento({ pensamento, autoria });
    ui.rederizarPensamentos();
  } catch (error) {
    alert(`Um erro ocorreu ao escrever no formulário: ${error}`);
  }
}
