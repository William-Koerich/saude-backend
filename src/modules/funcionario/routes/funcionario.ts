import { Router } from "express"
import { CreateFuncionarioController } from "../controller/create-funcionario"
import { ListFuncionarioController } from "../controller/list-funcionario"
import { tenantMiddleware } from "../../../shared/middleware/tenant"
import { LoginFuncionarioController } from "../controller/login-funcionario"

const router = Router()

const createController = new CreateFuncionarioController()
const listController = new ListFuncionarioController()
const loginController = new LoginFuncionarioController()

router.post("/", createController.handle)
router.get("/", listController.handle)
router.post("/login", loginController.handle)

export default router