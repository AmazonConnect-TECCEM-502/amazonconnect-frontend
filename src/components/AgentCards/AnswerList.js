import { Fragment } from "react";
import Answers from "./Answers";
import "../../style/AgentCards/QuestionList.css"

const AnswerList = (props) => {
  return (
    <Fragment>
      <Answers
        title="No internet Conection"
        text="Lorem ipsum dolor sit amet consectetur adipiscing elit rhoncus et fusce a, convallis lacus commodo lectus faucibus ornare tincidunt mattis vestibulum aenean. Aliquet at "
      />
    </Fragment>
  );
};

export default AnswerList;
