import { Fragment } from "react";

const Questions = (props) => {

    return( 
      <Fragment>
        <div className = "container-question">
            <p className = "question">{props.text}</p>
        </div>
      </Fragment>
    );
  };
  
  export default Questions;