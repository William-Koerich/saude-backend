import { app } from "./app";
import { createServer } from "http";
import { initSocket } from "./socket";

const httpServer = createServer(app);

initSocket(httpServer);

httpServer.listen(3010, () => {
  console.log("🚀 Server rodando na porta 3010");
});