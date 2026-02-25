import { Request, Response } from "express";
import { ChamarPacienteService } from "../service/chamar-paciente";

export class ChamarPacienteController {
  async handle(req: Request, res: Response) {
    try {
      const unidadeId = req.unidadeId!;

      const service = new ChamarPacienteService();

      const paciente = await service.execute(unidadeId);

      return res.json(paciente);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}