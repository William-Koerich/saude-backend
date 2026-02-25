import { FilaRepository } from "../repository/fila";
import { CreateFilaDTO } from "../dto/create-fila";

export class CreateFilaService {
  private repository = new FilaRepository();

  async execute({ nome, tipo, unidadeId }: CreateFilaDTO) {
    if (!nome || nome.length < 3) {
      throw new Error("Nome inválido");
    }

    return this.repository.create({
      nome,
      tipo,
      unidadeId,
    });
  }
}