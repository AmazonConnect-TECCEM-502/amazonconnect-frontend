import '../style/TarjetaUsuario.css'

const ImagenUsuario = (props) => {
    return (
        <img src = {require(`../images/${props.foto}.png`)} alt = "Foto de usuario" />
    );
};

export default ImagenUsuario;