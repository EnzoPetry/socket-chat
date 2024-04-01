import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import Mensagem from "./Mensagem";

const socket = io("http://localhost:3001")
function Chat({ usuario }) {
  const [mensagens, setMensagens] = useState([]);
  const [textoMensagem, setTextoMensagem] = useState('');
  socket.emit("sendUsuario", usuario);
  useEffect(() => {
    socket.on("mensagem", (mensagem) => {
      setMensagens([...mensagens, mensagem]);
    });
  }, [mensagens]);
  const sendMessage = () => {
    socket.emit("sendMessage", { usuario, texto: textoMensagem, });
    setTextoMensagem("");
  }
  return (
    <div>
      <div>
        {mensagens.map((message, index) => (
          <Mensagem key={index} usuario={message.usuario} texto={message.texto} />
        ))}
      </div>
      <div>
        <input
          type="text"
          value={textoMensagem}
          onChange={(e) => setTextoMensagem(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button onClick={sendMessage}>Enviar</button>
      </div>
    </div>
  );
}
export default Chat;
