import { UnidadeRepository } from "../repository/unidade";

export class ListUnidadeService {
  private repository = new UnidadeRepository();

  async execute() {
    return this.repository.findAll();
  }
}