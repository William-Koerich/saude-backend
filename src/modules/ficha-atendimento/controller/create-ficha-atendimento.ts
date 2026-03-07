import { Request, Response } from "express";
import { CreateFichaAtendimentoService } from "../service/create-ficha-atendimento";

export class CreateFichaAtendimentoController {
  async handle(req: Request, res: Response) {
    try {
      const service = new CreateFichaAtendimentoService();
      const ficha = await service.execute(req.body);
      return res.json(ficha);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}