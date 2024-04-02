import React, { FC, ReactElement, useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import Mensagem from "./Mensagem";

const socket = io("http://localhost:3001")

interface Mensagem {
  usuario: string;
  id: string;
  texto: string;
}

interface Usuario {
  usuario: string;
}

const Chat: FC<Usuario> = ({ usuario }) => {
  const [mensagens, setMensagens] = useState<Mensagem[]>([]);
  const [textoMensagem, setTextoMensagem] = useState<string>('');
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    socket.on("mensagem", (mensagem: Mensagem) => {
      setMensagens([...mensagens, mensagem]);
    });
    socket.on("mensagens", (mensagensRecebidas: Mensagem[]) => {
      setMensagens(mensagensRecebidas);
    });
    scrollToBottom();
  }, [mensagens]);
  const sendMessage = () => {
    socket.emit("sendMessage", { usuario, id: socket.id, texto: textoMensagem, });
    setTextoMensagem("");
  }
  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };
  return (
    <div className="flex flex-col h-screen  px-96 py-4  bg-gray-100">
      <div id="chat" ref={chatRef} className="flex-col-reverse items-center justify-end h-full overflow-y-auto bg-white rounded-t-lg shadow-md">
        {mensagens.map((message, index) => (
          (message.id === socket.id) ? (<Mensagem key={index} usuario={message.usuario} texto={message.texto} usuarioAtual={true} />) : (<Mensagem key={index} usuario={message.usuario} texto={message.texto} usuarioAtual={false} />)
        ))}
      </div>
      <div className="flex items-center justify-center bg-gray-200 rounded-b-lg shadow-md">
        <input className="flex-grow border border-gray-300 rounded-l px-4 py-3 mr-2 focus:outline-none focus:border-blue-500" type="text" value={textoMensagem} onChange={(e) => setTextoMensagem(e.target.value)} placeholder="Digite sua mensagem" />
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-r" onClick={sendMessage} disabled={!textoMensagem}>Enviar</button>
      </div>
    </div>
  );
}
export default Chat;
