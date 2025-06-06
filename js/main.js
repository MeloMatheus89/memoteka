import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.rederizarPensamentos();
});

const formularioPensamento = document.getElementById("pensamento-form");
formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
const btnCancelar = document.getElementById("botao-cancelar");
btnCancelar.addEventListener("click", limparFormulario);

async function manipularSubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    if (id) {
      await api.editarUmPensamento({ id, conteudo, autoria });
    } else {
      await api.salvarUmPensamento({ conteudo, autoria });
    }
    ui.rederizarPensamentos();
  } catch (error) {
    alert(`Um erro ocorreu ao escrever no formulário: ${error}`);
  }
}
