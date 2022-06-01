import { Fragment, useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const AnswerList = (props) => {
  const [,,,,,,,,,,,,,,,,,,,,solutions] = useContext(AgentContext);

  return (
    <Fragment>
      <div className="container-answers">
        <p className="title">{solutions.length > 0 && solutions[0].problem_description}</p>
        {solutions.map(solution => {
          return<p className="answer">{solution.solution_description}</p>
        })}
      </div>
    </Fragment>
  );
};

export default AnswerList;
