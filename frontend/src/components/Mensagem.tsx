import { FC } from "react";

interface MensagemProps {
    usuario: string;
    texto: string;
    usuarioAtual: boolean;
}

const Mensagem: FC<MensagemProps> = ({ usuario, texto, usuarioAtual }) => {
    return (
        <div className={usuarioAtual ? "flex justify-end" : "flex justify-start"}>
            <div className={`flex flex-col w-fit px-4 py-1 my-2 mx-4 ${usuarioAtual ? "bg-green-300" : "bg-gray-300"} rounded-lg shadow-md`}>
                {!usuarioAtual && <p className="text-start text-xs font-bold" id="usuario">{usuario}</p>}
                <p className="justify-center max-w-96 break-words" id="mensagem">{texto}</p>
            </div>
        </div>
    );
};
export default Mensagem;