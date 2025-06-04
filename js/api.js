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
    async salvarUmPensamento(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pensamento)
      });

      return response.json();
    } catch {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  
};

export default api;
