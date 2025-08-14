import ui from "./ui.js";
import api from "./api.js";

const regexConteudo = /^[A-Za-z\s]{10,}$/;
const regexAutoria = /^[A-Za-z]{3,15} $/;

function validarConteudo(conteudo) {
  return regexConteudo.test(conteudo);
}

function validarAutoria(Autoria) {
  return regexAutoria.test(Autoria);
}
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
  const data = document.getElementById("pensamento-data").value;

  if (!validarConteudo(conteudo)) {
    alert(
      `O campo "Conteúdo" não foi preenchido corretamente. O campo aceita apenas letras e com no mínimo 10 caracteres.`
    );
    return;
  }

  if (!validarAutoria(autoria)) {
    alert(
      `O campo "Autoria" não foi preenchido corretamente. O campo aceita apenas letras e com no mínimo 3 caracteres e máximo de 15.`
    );
    return;
  }

  if (!validarData(data)) {
    alert(
      "Não é permitido cadastrar datas futuras. Favor inserir outras datas."
    );
  }

  try {
    if (id) {
      await api.editarUmPensamento({ id, conteudo, autoria, data });
    } else {
      await api.salvarUmPensamento({ conteudo, autoria, data });
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

function validarData(data) {
  const dataAtual = new Date();
  const dataInserida = new Date(data);
  return dataInserida <= dataAtual;
}
