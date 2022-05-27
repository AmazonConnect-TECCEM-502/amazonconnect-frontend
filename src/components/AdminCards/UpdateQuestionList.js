import { Fragment } from "react";
import UpdateQuestions from "./UpdateQuestions";


const UpdateQuestionList = (props) => {
    return( 
      <Fragment>
            <p className = "title"> Frequent questions </p>
            <div className = "container-questions">
                <UpdateQuestions text = "1. I don't have internet connection" name = "1"/>
                <UpdateQuestions text = "2. My internet connection is very slow" name = "2"/>
                <UpdateQuestions text = "3. My signal is intermitent" name = "3"/>
            </div>
      </Fragment>
    );
  };
  
  export default UpdateQuestionList;