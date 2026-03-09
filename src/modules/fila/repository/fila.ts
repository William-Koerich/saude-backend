import { prisma } from "../../../config/prisma";
import { CreateFilaDTO } from "../dto/create-fila";
import { Setor } from "@prisma/client";

export class FilaRepository {
  async create(data: CreateFilaDTO) {
    return prisma.fila.create({
      data,
    });
  }

  async findProximo(unidadeId: string, setor: Setor) {
    return prisma.fila.findFirst({
      where: {
        unidadeId,
        setor,
        chamada: false,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  }

  async marcarComoChamado(id: string, localAtendimento: string) {
    return prisma.fila.update({
      where: { id },
      data: { chamada: true, localAtendimento, chamadoAt: new Date() },
    });
  }
}