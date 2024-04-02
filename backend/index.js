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
});

server.listen(3001, () => {
  console.log("Servidor está funcionando");
});
