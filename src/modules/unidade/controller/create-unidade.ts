import { Request, Response } from "express";
import { CreateUnidadeService } from "../service/create-unidade";

export class CreateUnidadeController {
  async handle(req: Request, res: Response) {
    const { nome, tipo } = req.body;

    const service = new CreateUnidadeService();
    const unidade = await service.execute({ nome, tipo });

    return res.status(201).json(unidade);
  }
}