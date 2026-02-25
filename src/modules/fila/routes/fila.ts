import { Router } from "express";
import { CreateFilaController } from "../controller/create-fila";
import { ChamarPacienteController } from "../controller/chamar-paciente";
import { tenantMiddleware } from "../../../shared/middleware/tenant";

const router = Router();

const createController = new CreateFilaController();
const chamarController = new ChamarPacienteController();

router.post("/", tenantMiddleware, createController.handle);
router.post("/chamar", tenantMiddleware,chamarController.handle);

export default router;