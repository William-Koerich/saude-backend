import { Request, Response } from "express"
import { CreateFuncionarioService } from "../service/create-funcionario"

export class CreateFuncionarioController {
  async handle(req: Request, res: Response) {
    const service = new CreateFuncionarioService()

    const funcionario = await service.execute(req.body)

    return res.json(funcionario)
  }
}