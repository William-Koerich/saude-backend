import { FilaRepository } from "../repository/fila";
import { getIO } from "../../../socket";
import { Setor } from "@prisma/client";

export class ChamarPacienteService {
  private repository = new FilaRepository();

  async execute(unidadeId: string, localAtendimento: string, setor: Setor) {
    const proximo = await this.repository.findProximo(unidadeId, setor);

    if (!proximo) {
      throw new Error("Nenhum paciente na fila");
    }

    const chamadoAtualizado = await this.repository.marcarComoChamado(proximo.id, localAtendimento);
    const io = getIO();

    // 🔥 Emite para a TV da unidade correta
    io.to(unidadeId).emit("chamarPaciente", {
      senha: proximo.nome,
      localAtendimento,
      chamadoAt: new Date(),
    });

    return { ...proximo, localAtendimento, chamadoAt: chamadoAtualizado.chamadoAt };
  }
}