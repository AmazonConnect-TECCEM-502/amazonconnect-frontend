import "../style/TarjetaUsuario.css";
import ContenidoTexto from "./ContenidoTexto";
import ImagenUsuario from "./ImagenUsuario";
import NombreUsuario from "./NombreUsuario";

const TarjetaUsuario = (props) => { 
    return (
        <div className = "tarjeta-usuario">
            <div class = "clearfix">
                <ImagenUsuario foto = {props.foto} />
                <NombreUsuario texto = {props.fname + ", " + props.lname} />
                <ContenidoTexto texto = {props.email} />
                <ContenidoTexto texto = {props.phone} />
            </div>
        </div>
    );
};

export default TarjetaUsuario;