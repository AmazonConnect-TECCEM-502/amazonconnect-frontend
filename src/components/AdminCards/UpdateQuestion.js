import { Fragment } from "react";
import QuestionList from "../AgentCards/QuestionList";
import UpdateQuestionList from "./UpdateQuestionList";

const UpdateQuestion = (props) => {
    return( 
      <Fragment>
          <div className="title">
              <p>Update Question</p>
              <UpdateQuestionList/>
          </div>

      </Fragment>
    );
};

export default UpdateQuestion;