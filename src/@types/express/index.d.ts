import "express"

declare global {
  namespace Express {
    interface Request {
      unidadeId?: string
      user?: {
        id: string
        funcao: string
        unidadeId: string
      }
    }
  }
}