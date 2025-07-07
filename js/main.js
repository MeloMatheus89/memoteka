import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.rederizarPensamentos();
  const formularioPensamento = document.getElementById("pensamento-form");
  formularioPensamento.addEventListener("submit", manipularSubmissaoFormulario);
  const inputBusca = document.getElementById("campo-busca");

  inputBusca.addEventListener("input", manipularBusca);

  const btnCancelar = document.getElementById("botao-cancelar");
  btnCancelar.addEventListener("click", ui.limparFormulario);
});

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

async function manipularBusca(termo) {
  const termoBusca = document.getElementById("campo-busca").value;
  try {
    const pensamentosFiltrados = await api.buscarPensamentoPorTermo(termoBusca);
    ui.rederizarPensamentos(pensamentosFiltrados);
  } catch (error) {
    alert("Um erro foi encontrado ao buscar");
    throw error;
  }
}
