const URL_BASE = "http://localhost:3000";

const converterStringParaData = (dataString) => {
  const [ano, mes, dia] = dataString.split("-"); // Irá pegar a data de 2025-07-28 e converter em [2025, 07, 08]
  return new Date(Date.UTC(ano, mes - 1, dia));
};

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);

      const pensamentos = await response.data;

      return pensamentos.map((pensamento) => {
        return {
          ...pensamento,
          data: new Date(pensamento.data),
        };
      });
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  // Método POST (Verbo POST, CREATE do CRUD... Tem vários nomes.)
  async salvarUmPensamento(pensamento) {
    debugger;
    try {
      const data = converterStringParaData(pensamento.data);
      const response = await axios.post(`${URL_BASE}/pensamentos`, {
        ...pensamento,
        data: data.toISOString(),
      });

      return await response.data;
    } catch {
      alert("Erro ao salvar pensamentos");
      throw error;
    }
  },
  // Método PUT
  async buscarPensamentoPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);

      const pensamento = await response.data;
      return {
        ...pensamento,
        data: new Date(pensamento.data),
      };
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  async editarUmPensamento(pensamento) {
    try {
      const response = await axios.get(
        `${URL_BASE}/pensamentos/${pensamento.id}`
      );

      return await response.data;
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  //Metodo Delete
  async excluirPensamento(id) {
    try {
      await axios.delete(`${URL_BASE}/pensamentos/${id}`);
    } catch (error) {
      alert(`Erro ao excluir pensamento: ${error}`);
    }
  },

  async buscarPensamentoPorTermo(termo) {
    //console.log(termo);
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
  async atualizarFavorito(id, favorito) {
    try {
      const response = await axios.patch(`${URL_BASE}/pensamentos/${id}`, {
        favorito,
      });
      return response.data;
    } catch (error) {
      alert("Erro ao atualizar favorito");
      throw error;
    }
  },
};

export default api;
