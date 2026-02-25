import { Request, Response, NextFunction } from "express";

export function tenantMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const tenantId = req.headers["x-unidade-id"] as string;

  if (!tenantId) {
    return res.status(400).json({
      error: "O Id do Tenant é obrigatório. Por favor, forneça o Id do Tenant no cabeçalho 'x-tenant-id'.",
    });
  }

  (req as any).unidadeId = tenantId;

  next();
}