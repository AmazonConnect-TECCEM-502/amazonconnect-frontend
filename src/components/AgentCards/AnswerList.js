import { Fragment, useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const AnswerList = () => {
  const [,,,,,,,,,,,,,, solutions,,,,, setSolutionCard] = useContext(AgentContext);

  const hideSolution = () => {
    const card = document.getElementById("card-6");
    card.display = "none";
    setSolutionCard(false);
  }

  return (
    <Fragment>
      <div className="close-btn" onClick={() => hideSolution()}>+</div>
      <div className="container-answers">
        <p className="title">{solutions.length > 0 && solutions[0].problem_description}</p>
        {() => {solutions.map(solution => {
          return<p className="answer">{solution.solution_description}</p>
        })}}
      </div>
    </Fragment>
  );
};

export default AnswerList;
