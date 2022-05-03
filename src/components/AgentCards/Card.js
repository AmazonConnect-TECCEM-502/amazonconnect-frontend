import { Fragment } from "react";

const Card = (props) => {
    return( 
      <Fragment>
        <div className="card">
            {props.component}
        </div>
      </Fragment>
    );
  };
  
  export default Card;