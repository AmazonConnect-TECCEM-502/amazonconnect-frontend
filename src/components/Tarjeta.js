import { Fragment } from "react";
import "../style/Tarjeta.css"

const Tarjeta = (props) => {
    return( 
      <Fragment>
        <div class="tarjeta">
            {props.componente}
        </div>
      </Fragment>
    );
  };
  
  export default Tarjeta;