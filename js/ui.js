import api from "./api.js";

const ui = {
  limparFormulario(event) {
    event.preventDefault();
    document.getElementById("pensamento-form").reset();
  },

  async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentoPorId(pensamentoId);
    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
  },
  async rederizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    try {
      const pensamentos = await api.buscarPensamentos();
      pensamentos.forEach(ui.adicionarPensamentoNaLista);
    } catch (error) {
      alert(`Um erro foi detectado. ${error}`);
    }
  },

  adicionarPensamentoNaLista(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");
    const li = document.createElement("li");
    li.setAttribute("data-id", pensamento.id);
    li.classList.add("li-pensamento");

    const iconeAspas = document.createElement("img");
    iconeAspas.src = "./assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "Aspas azuis";
    iconeAspas.classList.add("icone-aspas");
    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = `${pensamento.conteudo}`;
    pensamentoConteudo.classList.add("pensamento-conteudo");

    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");

    const btnEditar = document.createElement("button");
    btnEditar.classList.add("botao-editar");
    btnEditar.onclick = () => ui.preencherFormulario(pensamento.id);

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "./assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar";

    btnEditar.appendChild(iconeEditar);

    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(btnEditar);

    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    li.appendChild(icones);

    listaPensamentos.appendChild(li);
  },
};

export default ui;
