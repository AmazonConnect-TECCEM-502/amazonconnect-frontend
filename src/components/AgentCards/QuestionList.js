import { Fragment, useContext} from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import Questions from "./Questions";
import SearchBar from "./SearchBar";

const QuestionList = (props) => {
  // Questions where assigned in RowCategoryProblem.js
  // We access those questions through CardContext
  const [, , , , , , questions, ] = useContext(AgentContext);

  return (
    <Fragment>
      <p className="title"> Frequent questions </p>
      <SearchBar SearchType="preguntas" />
      {questions.map(question => {
        return <Questions text={question.problem_description} />
      })}
    </Fragment>
  );
};

export default QuestionList;
