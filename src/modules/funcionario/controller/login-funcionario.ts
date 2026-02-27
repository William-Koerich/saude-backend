import { Request, Response } from "express"
import { LoginFuncionarioService } from "../service/login-funcionario"

export class LoginFuncionarioController {
  async handle(req: Request, res: Response) {
    const service = new LoginFuncionarioService()

    const { cpf, senha } = req.body

    const result = await service.execute({ cpf, senha })

    return res.json(result)
  }
}