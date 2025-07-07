const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`);

      return response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  // Método POST (Verbo POST, CREATE do CRUD... Tem vários nomes.)
  async salvarUmPensamento(pensamento) {
    debugger;
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
        //Sugestão: Colocar um pop-up (alert) avisando que o pensamento foi registrado e limpar o formulário. Definir melhor ordem depois.
      });

      return response.json();
    } catch {
      alert("Erro ao salvar pensamentos");
      throw error;
    }
  },
  // Método PUT
  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`);

      return response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  async editarUmPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
        //Sugestão: Colocar um pop-up (alert) avisando que o pensamento foi registrado e limpar o formulário. Definir melhor ordem depois.
      });

      return response.json();
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  //Metodo Delete
  async excluirPensamento(id) {
    try {
      await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert(`Erro ao excluir pensamento: ${error}`);
    }
  },

  async buscarPensamentoPorTermo(termo) {
    console.log(termo);
    try {
      const pensamentos = await this.buscarPensamentos();
      let termoEmMinusculas = termo.toLowerCase();

      const pensamentosFiltrados = pensamentos.filter((pensamento) => {
        return (
          pensamento.conteudo.toLowerCase().includes(termoEmMinusculas) ||
          pensamento.autoria.toLowerCase().includes(termoEmMinusculas)
        );
      });
      return pensamentosFiltrados;
    } catch (error) {
      alert("Erro ao procurar pensamento");
      throw error;
    }
  },
};

export default api;
