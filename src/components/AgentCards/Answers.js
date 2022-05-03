import { Fragment } from "react";
import "../../style/AgentCards/QuestionList.css"

const Answers = (props) => {
  return (
    <Fragment>
      <div className="container-answers">
        <p className="title">{props.title}</p>
        <p className="answer">{props.text}</p>
      </div>
    </Fragment>
  );
};

export default Answers;
