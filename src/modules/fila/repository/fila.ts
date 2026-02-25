import { prisma } from "../../../config/prisma";
import { CreateFilaDTO } from "../dto/create-fila";

export class FilaRepository {
  async create(data: CreateFilaDTO) {
    return prisma.fila.create({
      data,
    });
  }

  async findProximo(unidadeId: string) {
    return prisma.fila.findFirst({
      where: {
        unidadeId,
        chamada: false,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async marcarComoChamado(id: string) {
    return prisma.fila.update({
      where: { id },
      data: { chamada: true },
    });
  }
}