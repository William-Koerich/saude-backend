import express from "express"
import cors from "cors"
import unidadeRoutes from "./modules/unidade/routes/unidade"
import filaRoutes from "./modules/fila/routes/fila"
import funcionarioRoutes from "./modules/funcionario/routes/funcionario"

export const app = express()

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "x-tenant-id"
  ],
  credentials: true,
}))

app.use(express.json())

app.use("/unidades", unidadeRoutes)
app.use("/fila", filaRoutes)
app.use("/funcionarios", funcionarioRoutes)