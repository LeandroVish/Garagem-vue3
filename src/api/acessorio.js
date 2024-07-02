import axios from "axios";
export default class AcessorioApi {
  async buscarTodasAsAcessorios() {
    const { data } = await axios.get("/acessorio/");
    return data.results;
  }
  async adicionarAcessorio(acessorio) {
    const { data } = await axios.post("/acessorio/", acessorio);
    return data.results;
  }
  async atualizarAcessorio(acessorio) {
    const { data } = await axios.put(`/acessorio/${acessorio.id}/`, acessorio);
    return data.results;
  }
  async excluirAcessorios(id) {
    const { data } = await axios.delete(`/acessorio/${id}/`);
    return data.results;
  }
}
