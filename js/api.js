const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");

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
      const response = await fetch("http://localhost:3000/pensamentos", {
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
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`);

      return response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  async editarUmPensamento(pensamento) {
    try {
      const response = await fetch(
        `http://localhost:3000/pensamentos/${pensamento.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(pensamento),
          //Sugestão: Colocar um pop-up (alert) avisando que o pensamento foi registrado e limpar o formulário. Definir melhor ordem depois.
        }
      );

      return response.json();
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  //Metodo Delete
  async excluirPensamento(id) {
    try {
      await fetch(`http://localhost:3000/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      alert(`Erro ao excluir pensamento: ${error}`);
    }
  },
};

export default api;
