import { Fragment } from "react";
import Questions from "./Questions";
import "../../style/AgentCards/QuestionList.css"
import SearchBar from "./SearchBar";

const QuestionList = (props) => {
    return( 
      <Fragment>
            <p className = "title"> Frequent questions </p>
            <SearchBar SearchType="preguntas" />
            <div className = "container-questions">
                <Questions text = "1. I don't have internet connection"/>
                <Questions text = "2. My internet connection is very slow"/>
                <Questions text = "3. My signal is intermitent"/>
            </div>
      </Fragment>
    );
  };
  
  export default QuestionList;
  