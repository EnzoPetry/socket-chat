const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});
io.on("connection", (socket) => {

  socket.on("sendUsuario", (usuario) =>{
    socket.usuario = usuario;
  })
  socket.on("sendMessage", (mensagem) => {
    console.log(mensagem);
    io.emit("mensagem", mensagem);
  });

  socket.on("disconnect", () => {
    console.log(socket.usuario, " se desconectou");
  });
});

server.listen(3001, () => {
  console.log("Servidor está funcionando");
});
