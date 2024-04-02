import Entrar from "./components/Entrar";
import Chat from "./components/Chat";
import { useState } from "react";

const App: React.FC = () => {
  const [logado, setLogado] = useState<boolean>(false);
  const [usuario, setUsuario] = useState<string>("");
  const handleLogin = (usuario: string): void => {
    setUsuario(usuario);
    setLogado(true);
  };
  return (
    <div>
      {logado ? (<Chat usuario={usuario} />) : (<Entrar onSubmit={handleLogin} />)}
    </div>

  );
}
export default App;
