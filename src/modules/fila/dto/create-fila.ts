export interface CreateFilaDTO {
  nome: string;
  tipo: "PREFERENCIAL" | "NORMAL";
  unidadeId: string;
}