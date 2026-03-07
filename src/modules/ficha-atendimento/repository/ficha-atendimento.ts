import { prisma } from "../../../config/prisma";
import { CreateFichaAtendimentoDTO } from "../dto/CreateFichaAtendimentoDTO";

export class FichaAtendimentoRepository {
  async create(data: CreateFichaAtendimentoDTO) {
    return prisma.fichaAtendimento.create({ data });
  }

  async findAll(unidadeId?: string) {
    return prisma.fichaAtendimento.findMany({
      where: unidadeId ? { unidadeId } : undefined,
    });
  }
}