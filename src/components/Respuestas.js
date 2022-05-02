import { Fragment } from "react";
import "../style/ListaRespuestas.css"


const Respuestas = (props) => {

    return( 
      <Fragment>
        <div class = "contenedor-respuestas">
            <p class = "titulo">{props.titulo}</p>
            <p class = "respuesta">{props.texto}</p>
        </div>
      </Fragment>
    );
  };
  
  export default Respuestas;