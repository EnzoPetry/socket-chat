const Mensagem = ({ usuario, texto, usuarioAtual }) => {
    if (usuarioAtual) {
        return (
            <div className="flex justify-end">
                <div className="flex flex-col w-fit px-4 py-1 my-2 mx-4 bg-green-300 rounded-lg shadow-md">
                    <p className="justify-center max-w-96 break-words" id="mensagem">{texto}</p>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="flex justify-start">
                <div className="flex flex-col w-fit px-4 py-1 my-2 mx-4 bg-gray-300 rounded-lg shadow-md">
                    <p className="text-start text-xs font-bold" id="usuario">{usuario}</p>
                    <p className="justify-center max-w-96 break-words" id="mensagem">{texto}</p>
                </div>
            </div>
        )
    }
}
export default Mensagem;