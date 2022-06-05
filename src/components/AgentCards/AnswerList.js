/*
  Author: Diego Armando Ulibarri Hernández

  Description: The AnswerList component serves as 
  a container for all the possible answers that a 
  problem has.

  Usage: 
    addSolution -> Contains a function that changes 
    the value of modal 

  <AnswerList 
    addSolution={addNewSolution}
  />
*/

import { Fragment, useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const AnswerList = (props) => {
  // solutions -> Contains a list of possible solutions for a problem
  // setSolutionCard -> Used to hide solutionCard
  const [, , , , , , , , , , , , , , solutions, , , , , setSolutionCard] =
    useContext(AgentContext);

  /**
   * When the user clicks the close button, the card will disappear.
   */
  const hideSolution = () => {
    const card = document.getElementById("card-6");
    card.display = "none";
    setSolutionCard(false);
  };

  return (
    <Fragment>
      <div className="close-btn" onClick={() => hideSolution()}>
        +
      </div>
      <div className="container-answers">
        <p className="title">
          {solutions.length > 0 && solutions[0].problem_description}
        </p>
        {solutions.map((solution, index) => {
          return <p key={index} className="answer">{solution.solution_description}</p>;
        })}
        <button className="btn-main" onClick={() => props.addSolution(true)}>
          Add Solution
        </button>
      </div>
    </Fragment>
  );
};

export default AnswerList;
