const Mensagem = ({ usuario, texto }) => {
    return (
        <div>
            <p id="usuario">{usuario}</p>
            <p id="mensagem">{texto}</p>
        </div>
    )
}
export default Mensagem;