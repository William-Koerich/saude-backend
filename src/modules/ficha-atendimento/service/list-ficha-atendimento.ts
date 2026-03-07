import { FichaAtendimentoRepository } from "../repository/ficha-atendimento";

export class ListFichaAtendimentoService {
  private repository = new FichaAtendimentoRepository();

  async execute(unidadeId?: string) {
    return this.repository.findAll(unidadeId);
  }
}