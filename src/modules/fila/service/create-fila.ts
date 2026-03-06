import { FilaRepository } from "../repository/fila";
import { CreateFilaDTO } from "../dto/create-fila";

export class CreateFilaService {
  private repository = new FilaRepository();

  async execute({ nome, tipo, unidadeId }: CreateFilaDTO) {
    if (!nome) {
      throw new Error("Senha inválida");
    }

    return this.repository.create({
      nome,
      tipo,
      unidadeId,
    });
  }
}