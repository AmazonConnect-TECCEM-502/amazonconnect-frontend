import '../style/TarjetaUsuario.css'

const NombreUsuario = (props) => {
    return (
        <div className = "nombre-usuario">
            <p>{props.texto}</p>
        </div>
    );
};

export default NombreUsuario;