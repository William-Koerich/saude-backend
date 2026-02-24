import { Router } from "express";
import { CreateUnidadeController } from "../controller/create-unidade";
import { ListUnidadeController } from "../controller/list-unidade";

const router = Router();

const createController = new CreateUnidadeController();
const listController = new ListUnidadeController();

router.post("/", createController.handle);
router.get("/", listController.handle);

export default router;