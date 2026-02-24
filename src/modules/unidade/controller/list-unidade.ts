import { Request, Response } from "express";
import { ListUnidadeService } from "../service/list-unidade";

export class ListUnidadeController {
  async handle(req: Request, res: Response) {
    const service = new ListUnidadeService();
    const unidades = await service.execute();

    return res.json(unidades);
  }
}