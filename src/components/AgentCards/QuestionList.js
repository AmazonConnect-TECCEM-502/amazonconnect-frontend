import { Fragment, useContext} from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import SearchBar from "./SearchBar";

const QuestionList = (props) => {
  // Questions where assigned in RowCategoryProblem.js
  // We access those questions through CardContext
  const [,,,,,,questions,,,,,,,,,,,,,,,setSolutions
  ] = useContext(AgentContext);

  const checkSolution = async (id, problem) => {
    const data = {
      solution_id: id
    };

    await fetch("http://localhost:8080/problem/postProblemId", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log(data);

    const solutionData = await fetch("http://localhost:8080/problem/getSolutions");
    const jsonSolution = await solutionData.json();
    jsonSolution[0].problem_description = problem;
    console.log(jsonSolution[0]);
    setSolutions(jsonSolution);
  }

  return (
    <Fragment>
      <p className="title"> Frequent questions </p>
      <SearchBar SearchType="preguntas" />
      {questions.map(question => {
        return (
          <div className="container-question">
            <p 
              className="question" 
              onClick={() => checkSolution(question.problem_id, question.problem_description)}>
                {question.problem_description}
            </p>
          </div>
        )
      })}
    </Fragment>
  );

};

export default QuestionList;
