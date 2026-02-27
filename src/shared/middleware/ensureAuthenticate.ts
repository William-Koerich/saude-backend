import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import authConfig from "../../config/auth"

interface TokenPayload {
  sub: string
  funcao: string
  unidadeId: string
}

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "Token não fornecido" })
  }

  const [, token] = authHeader.split(" ")

  try {
    const decoded = verify(
      token,
      authConfig.jwt.secret
    ) as TokenPayload

    req.user = {
      id: decoded.sub,
      funcao: decoded.funcao,
      unidadeId: decoded.unidadeId,
    }

    return next()
  } catch {
    return res.status(401).json({ error: "Token inválido" })
  }
}