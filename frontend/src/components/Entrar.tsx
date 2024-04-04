import React, { useState } from "react";
import { Socket, io } from "socket.io-client";

let socket: Socket;

try {
  socket = io("http://localhost:3001");
} catch (error) {
  console.error("Erro ao conectar ao servidor:", error);
}


interface EntrarProps {
  onSubmit: (usuario: string) => void;
}

const Entrar: React.FC<EntrarProps> = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (socket) {
        socket.emit("sendUsuario", usuario);
      } else {
        throw new Error("Socket não está conectado.");
      }
      onSubmit(usuario);
    } catch (error) {
      console.error("Erro ao enviar nome de usuário:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white w-fit h-auto p-8 rounded-lg shadow-md flex flex-col justify-center items-center">
        <h1 className="text-3xl mb-6 font-bold text-gray-800">Bem-vindo ao Socket Chat!</h1>
        <form className="flex flex-col w-full" onSubmit={handleSubmit}>
          <input className="border border-gray-300 rounded px-4 py-3 mb-4 w-full focus:outline-none focus:border-blue-500" type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Nome de Usuário" />
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded w-full" type="submit" disabled={!usuario}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
};
export default Entrar;
