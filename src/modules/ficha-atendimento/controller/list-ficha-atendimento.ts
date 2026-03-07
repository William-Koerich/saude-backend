import { Request, Response } from "express";
import { ListFichaAtendimentoService } from "../service/list-ficha-atendimento";

export class ListFichaAtendimentoController {
  async handle(req: Request, res: Response) {
    const service = new ListFichaAtendimentoService();
    const unidadeId = req.unidadeId;

    const fichas = await service.execute(unidadeId);
    return res.json(fichas);
  }
}