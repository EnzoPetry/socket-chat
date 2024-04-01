import { io } from "socket.io-client";
import { Route, Routes } from "react-router-dom";
import Entrar from "./components/Entrar";
import Chat from "./components/Chat";
import { useState } from "react";

const socket = io("http://localhost:3000");

function App() {
  const [logado, setLogado] = useState(false);

  const Logar = () => {};
  if (!logado) {
    return (
      <div>
        <Entrar />
      </div>
    );
  } else {
    return (
      <div>
        <Chat />
      </div>
    );
  }
}
export default App;
