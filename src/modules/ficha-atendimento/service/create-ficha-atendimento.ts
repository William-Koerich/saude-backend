import { FichaAtendimentoRepository } from "../repository/ficha-atendimento";
import { CreateFichaAtendimentoDTO } from "../dto/CreateFichaAtendimentoDTO";
import { FilaRepository } from "../../fila/repository/fila";
import { TipoAtendimento } from "@prisma/client";

export class CreateFichaAtendimentoService {
  private repository = new FichaAtendimentoRepository();
  private filaRepository = new FilaRepository();

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

    // cria ficha de atendimento
    const ficha = await this.repository.create(data);

    // adiciona paciente à fila automaticamente usando o nome como senha
    await this.filaRepository.create({
      nome: data.nome,
      tipo: TipoAtendimento.NORMAL,
      unidadeId: data.unidadeId,
    });

    return ficha;
  }
}