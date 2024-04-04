const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
let mensagens = [];
io.on("connection", (socket) => {
  try {
    socket.on("sendUsuario", (usuario) => {
      socket.usuario = usuario;
      io.emit("mensagens", mensagens);
      console.log(socket.usuario, " se conectou");
    });
    socket.on("sendMessage", (mensagem) => {
      mensagens.push(mensagem);
      io.emit("mensagem", mensagem);
    });
    socket.on("disconnect", () => {
      console.log(socket.usuario, " se desconectou");
    });
  } catch (error) {
    console.error("Erro na conexão do socket:", error);
  }
});

try {
  server.listen(3001, () => {
    console.log("Servidor está funcionando");
  });
} catch (error) {
  console.error("Erro ao iniciar o servidor:", error);
}