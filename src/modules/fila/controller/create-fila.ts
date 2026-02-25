import { Request, Response } from "express";
import { CreateFilaService } from "../service/create-fila";

export class CreateFilaController {
  async handle(req: Request, res: Response) {
    try {
      const { nome, tipo } = req.body;
      const unidadeId = req.unidadeId!;

      const service = new CreateFilaService();

      const fila = await service.execute({
        nome,
        tipo,
        unidadeId,
      });

      return res.status(201).json(fila);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}