import { Server } from "socket.io";

let io: Server;

export function initSocket(server: any) {
  io = new Server(server, {
    cors: { origin: "*" },
  });

  io.on("connection", (socket) => {
    console.log("🔌 Cliente conectado:", socket.id);

    // 🔥 Pega unidadeId do handshake
    const unidadeId = socket.handshake.query.unidadeId as string;

    if (unidadeId) {
      socket.join(unidadeId);
      console.log(`📺 TV conectada na unidade ${unidadeId}`);
    } else {
      console.log("⚠️ Cliente conectou sem unidadeId");
    }

    socket.on("disconnect", () => {
      console.log("❌ Cliente desconectado:", socket.id);
    });
  });

  return io;
}

export function getIO() {
  if (!io) {
    throw new Error("Socket.io não inicializado!");
  }
  return io;
}