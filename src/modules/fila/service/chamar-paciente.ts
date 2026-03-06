import { FilaRepository } from "../repository/fila";
import { getIO } from "../../../socket";

export class ChamarPacienteService {
  private repository = new FilaRepository();

  async execute(unidadeId: string, localAtendimento: string) {
    const proximo = await this.repository.findProximo(unidadeId);

    if (!proximo) {
      throw new Error("Nenhum paciente na fila");
    }

    await this.repository.marcarComoChamado(proximo.id, localAtendimento);
    const io = getIO();

    // 🔥 Emite para a TV da unidade correta
    io.to(unidadeId).emit("chamarPaciente", {
      senha: proximo.nome,
      localAtendimento,
    });

    return { ...proximo, localAtendimento };
  }
}