import { Fragment } from "react";
import "../style/ListaPreguntas.css"

const Preguntas = (props) => {

    return( 
      <Fragment>
        <div class = "contenedor-pregunta">
            <p class = "pregunta">{props.texto}</p>
        </div>
      </Fragment>
    );
  };
  
  export default Preguntas;