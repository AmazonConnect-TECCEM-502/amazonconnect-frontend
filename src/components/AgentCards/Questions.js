import { Fragment } from "react";
import "../../style/AgentCards/QuestionList.css"

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