import { Request, Response } from "express";
import { ChamarPacienteService } from "../service/chamar-paciente";
import { ChamarPacienteDTO } from "../dto/chamar-paciente";

export class ChamarPacienteController {
  async handle(req: Request, res: Response) {
    try {
      const unidadeId = req.unidadeId!;
      const { localAtendimento, setor }: ChamarPacienteDTO = req.body;

      if (!localAtendimento) {
        return res.status(400).json({ error: "Local de atendimento é obrigatório" });
      }

      if (!setor) {
        return res.status(400).json({ error: "Setor é obrigatório" });
      }

      const service = new ChamarPacienteService();

      const paciente = await service.execute(unidadeId, localAtendimento, setor);

      return res.json(paciente);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}