import React from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3000");
import { useNavigate } from "react-router-dom";

function Entrar(props) {
  return (
    <>
      <div>
        <h1>Entrar</h1>
        <input type="text" placeholder="Nome de Usuário" />
        <button onClick={set}></button>
      </div>
    </>
  );
}
export default Entrar;
