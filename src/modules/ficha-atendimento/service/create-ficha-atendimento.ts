import { FichaAtendimentoRepository } from "../repository/ficha-atendimento";
import { CreateFichaAtendimentoDTO } from "../dto/CreateFichaAtendimentoDTO";

export class CreateFichaAtendimentoService {
  private repository = new FichaAtendimentoRepository();

  async execute(data: CreateFichaAtendimentoDTO) {
    // validações simples
    if (!data.nome) {
      throw new Error("Nome é obrigatório");
    }

    if (!data.unidadeId) {
      throw new Error("Unidade é obrigatória");
    }

    // pode converter dataNascimento caso venha como string
    if (typeof data.dataNascimento === "string") {
      data.dataNascimento = new Date(data.dataNascimento);
    }

    return this.repository.create(data);
  }
}