import { Fragment } from "react";
import Questions from "./Questions";

const QuestionList = (props) => {
    return( 
      <Fragment>
            <p className = "title"> Preguntas Frecuentes </p>
            <div className = "container-questions">
                <Questions texto = "1. I don't have internet connection"/>
                <Questions texto = "2. My internet connection is very slow"/>
                <Questions texto = "3. My signal is intermitent"/>
            </div>
      </Fragment>
    );
  };
  
  export default QuestionList;
  