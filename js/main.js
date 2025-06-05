import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.rederizarPensamentos();
});

const formularioPensamento = document.getElementById("pensamento-form");
formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
const btnCancelar = document.getElementById("botao-cancelar");
btnCancelar.addEventListener("click", limparFormulario);

function limparFormulario(event) {
  //   debugger;
  event.preventDefault();
  document.getElementById("pensamento-form").reset();
  //Pega o conteúdo do formulário
}

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const pensamento = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    await api.salvarUmPensamento({ pensamento, autoria });
    ui.rederizarPensamentos();
  } catch (error) {
    alert(`Um erro ocorreu ao escrever no formulário: ${error}`);
  }
}
