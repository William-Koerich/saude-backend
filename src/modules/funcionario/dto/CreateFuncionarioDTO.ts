export interface CreateFuncionarioDTO {
  nome: string
  cpf: string
  email: string
  celular: string
  tipoDocumento?: string | null
  documento?: string | null
  funcao: string
  unidadeId: string
  senha: string
}