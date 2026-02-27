import { Request, Response } from "express"
import { ListFuncionarioService } from "../service/list-funcionario"

export class ListFuncionarioController {
  async handle(req: Request, res: Response) {
    const service = new ListFuncionarioService()

    const funcionarios = await service.execute()

    return res.json(funcionarios)
  }
}