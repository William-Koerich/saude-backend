import express from "express"
import cors from "cors"
import unidadeRoutes from "./modules/unidade/routes/unidade"
import filaRoutes from "./modules/fila/routes/fila"

export const app = express()

app.use(cors({
  origin: "http://localhost:3000", // endereço do seu front
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "x-unidade-id"],
}))

app.use(express.json())

app.use("/unidades", unidadeRoutes)
app.use("/fila", filaRoutes)