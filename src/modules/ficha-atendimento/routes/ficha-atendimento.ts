import { Router } from "express";
import { CreateFichaAtendimentoController } from "../controller/create-ficha-atendimento";
import { ListFichaAtendimentoController } from "../controller/list-ficha-atendimento";
import { tenantMiddleware } from "../../../shared/middleware/tenant";

const router = Router();

const createController = new CreateFichaAtendimentoController();
const listController = new ListFichaAtendimentoController();

router.post("/", tenantMiddleware, createController.handle);
router.get("/", tenantMiddleware, listController.handle);

export default router;
