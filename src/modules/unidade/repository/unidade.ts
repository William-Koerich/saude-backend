import { prisma } from "../../../config/prisma";
import { TipoUnidade } from "@prisma/client";

interface CreateUnidadeDTO {
  nome: string;
  tipo: TipoUnidade;
}

export class UnidadeRepository {
  async create(data: CreateUnidadeDTO) {
    return prisma.unidade.create({ data });
  }

  async findAll() {
    return prisma.unidade.findMany();
  }
}