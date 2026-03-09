import { Setor } from "@prisma/client";

export interface CreateFilaDTO {
  nome: string;
  tipo: "PREFERENCIAL" | "NORMAL";
  unidadeId: string;
  setor: Setor;
}