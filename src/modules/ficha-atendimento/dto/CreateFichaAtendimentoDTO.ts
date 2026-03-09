import { Genero, Raca, Setor } from "@prisma/client";

export interface CreateFichaAtendimentoDTO {
  nome: string;
  dataNascimento: Date;
  genero: Genero;
  endereco: string;
  whatsapp: string;
  nomeMae: string;
  raca: Raca;
  nacionalidade: string;
  telefoneEmergencia: string;
  email?: string;
  setor?: Setor;
  unidadeId: string;
}