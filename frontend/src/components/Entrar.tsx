import React, { useState } from "react";

interface EntrarProps {
  onSubmit: (usuario: string) => void;
}

const Entrar: React.FC<EntrarProps> = ({ onSubmit }) => {
  const [usuario, setUsuario] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(usuario);
  };

  return (
    <div>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={usuario} onChange={(e) => setUsuario(e.target.value)} placeholder="Digite seu nome de usuário" />
        <button type="submit"></button>
      </form>
    </div>
  );
}
export default Entrar;
