import { Setor } from "@prisma/client";

export interface ChamarPacienteDTO {
  localAtendimento: string;
  setor: Setor;
}