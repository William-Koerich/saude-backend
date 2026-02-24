import express from "express";
import unidadeRoutes from "./modules/unidade/routes/unidade";

export const app = express();

app.use(express.json());

app.use("/unidades", unidadeRoutes);