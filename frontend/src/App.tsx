import Entrar from "./components/Entrar";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [logado, setLogado] = useState(false);
  const [usuario, setUsuario] = useState("");
  const handleLogin = (usuario: string) => {
    setUsuario(usuario);
    setLogado(true);
  };
  if (!logado) {
    return (
      <div>
        <Entrar onSubmit={handleLogin} />
      </div>
    );
  } else {
    return (
      <div>
        <Chat usuario={usuario} />
      </div>
    );
  }
}
export default App;
