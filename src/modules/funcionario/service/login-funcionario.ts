import { FuncionarioRepository } from "../repository/funcionario"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import authConfig from "../../../config/auth"

interface LoginRequest {
  cpf: string
  senha: string
}

export class LoginFuncionarioService {
  private repository = new FuncionarioRepository()

  async execute({ cpf, senha }: LoginRequest) {
    const funcionario = await this.repository.findByCpf(cpf)

    console.log("Funcionario encontrado:", funcionario) // Log para verificar o funcionário encontrado

    if (!funcionario) {
      throw new Error("CPF ou senha inválidos")
    }

    console.log(senha, funcionario.senha) // Log para verificar as senhas

    const senhaValida = await compare(senha, funcionario.senha)

    if (!senhaValida) {
      throw new Error("CPF ou senha inválidos")
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign(
        {
            funcao: funcionario.funcao,
            unidadeId: funcionario.unidadeId,
        },
        secret as string,
        {
            subject: funcionario.id,
            expiresIn: "1d",
        }
    )

    const { senha: _, ...funcionarioSemSenha } = funcionario

    return {
      funcionario: funcionarioSemSenha,
      token,
    }
  }
}