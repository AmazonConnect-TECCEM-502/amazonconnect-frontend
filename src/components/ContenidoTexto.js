import '../style/TarjetaUsuario.css'

const ContenidoTexto = (props) => {
    return (
        <div className = "contenido-texto">
          {props.texto}
        </div>
    );
};

export default ContenidoTexto;