import express from "express"
import cors from "cors"
import unidadeRoutes from "./modules/unidade/routes/unidade"
import filaRoutes from "./modules/fila/routes/fila"
import funcionarioRoutes from "./modules/funcionario/routes/funcionario"
import fichaAtendimentoRoutes from "./modules/ficha-atendimento/routes/ficha-atendimento"

export const app = express()

app.use(cors({
  origin: true, // aceita qualquer origem em dev
  credentials: true,
}))

app.use(express.json())

app.use("/unidades", unidadeRoutes)
app.use("/fila", filaRoutes)
app.use("/funcionarios", funcionarioRoutes)
app.use("/ficha-atendimento", fichaAtendimentoRoutes)