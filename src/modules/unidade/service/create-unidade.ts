import { UnidadeRepository } from "../repository/unidade";
import { TipoUnidade } from "@prisma/client";

interface Request {
  nome: string;
  tipo: TipoUnidade;
}

export class CreateUnidadeService {
  private repository = new UnidadeRepository();

  async execute({ nome, tipo }: Request) {
    if (!nome) {
      throw new Error("Nome é obrigatório");
    }

    return this.repository.create({ nome, tipo });
  }
}