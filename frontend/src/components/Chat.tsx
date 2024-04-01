import React, { useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3001")
function Chat() 
{
  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from server');
    });
  }, []);
  return (
    <div>
      <h1>Chat</h1>
      <input type="text" placeholder="Mensagem" />
      <button>Enviar</button>
    </div>
  );
}
export default Chat;
