import { FuncionarioRepository } from "../repository/funcionario"
import { hash } from "bcryptjs"
import { CreateFuncionarioDTO } from "../dto/CreateFuncionarioDTO"

export class CreateFuncionarioService {
  private repository = new FuncionarioRepository()

  async execute(data: CreateFuncionarioDTO) {

    const cpfExiste = await this.repository.findByCpf(data.cpf)
    if (cpfExiste) {
      throw new Error("CPF já cadastrado")
    }

    const emailExiste = await this.repository.findByEmail(data.email)
    if (emailExiste) {
      throw new Error("E-mail já cadastrado")
    }

    // 🔥 criptografa senha
    const senhaHash = await hash(data.senha, 8)

    return this.repository.create({
      ...data,
      senha: senhaHash,
    })
  }
}