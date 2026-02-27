import { prisma } from "../../../config/prisma"

interface CreateFuncionarioDTO {
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

export class FuncionarioRepository {
  async create(data: CreateFuncionarioDTO) {
    return prisma.funcionario.create({ data })
  }

  async findAll() {
    return prisma.funcionario.findMany({
      include: { unidade: true },
    })
  }

  async findByCpf(cpf: string) {
    return prisma.funcionario.findUnique({ where: { cpf } })
  }

  async findByEmail(email: string) {
    return prisma.funcionario.findUnique({ where: { email } })
  }
}