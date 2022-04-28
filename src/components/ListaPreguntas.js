import { Fragment } from "react";
import "../style/ListaPreguntas.css"
import Preguntas from "./Preguntas";

const ListaPreguntas = (props) => {
    return( 
      <Fragment>
            <p class = "titulo"> Preguntas Frecuentes </p>
            <div class = "contenedor-preguntas">
                <Preguntas texto = "1. I don't have internet connection"/>
                <Preguntas texto = "2. My internet connection is very slow"/>
                <Preguntas texto = "3. My signal is intermitent"/>
            </div>
      </Fragment>
    );
  };
  
  export default ListaPreguntas;
  