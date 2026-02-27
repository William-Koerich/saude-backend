import { FuncionarioRepository } from "../repository/funcionario"

export class ListFuncionarioService {
  private repository = new FuncionarioRepository()

  async execute() {
    return this.repository.findAll()
  }
}