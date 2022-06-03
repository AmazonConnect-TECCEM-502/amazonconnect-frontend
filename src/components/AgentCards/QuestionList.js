/*
  Authors: Diego Armando Ulibarri Hernández

  Description: Component to show a list with all the questions of a
  specific problem

  Usage: 
  <QuestionList />
*/

import { Fragment, useContext, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const QuestionList = () => {
  // questions -> Contains the questions to be displayed
  // setSolutions -> Method used to add solutions
  // setQnA -> Method used to hide the Questions Card
  // setSolutionCard -> Method used to display the Solutions Card
  const [  ,,,,
    questions,,,,,,,,,,,
    setSolutions,,
    setQnA,,
    setSolutionCard
  ] = useContext(AgentContext);

  // Helps us identify the question we are looking for
  const [searchTerm, setSearchTerm] = useState("");
  // List of questions that are filtered by the searchTerm
  const [searchResult, setSearchResult] = useState([]);

  /**
   * It takes the search term and filters the questions array
   * based on the search term.
   * @param event - the event that triggered the function
   */
  const searchHandler = async (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm !== "") {
      const newQuestionList = await questions.filter((question) => {
        return Object.values(question)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newQuestionList);
    } else {
      setSearchResult(questions);
    }
  };

  /**
   * It fetches the solution data from the server, then it sets the 
   * array fo the solutions card with the data and finally it sets the 
   * state of the solution card to true.
   * @param id - the id of the problem
   * @param problem - is the problem description
   */
  const checkSolution = async (id, problem) => {
    const solutionData = await fetch(
      `http://localhost:8080/problem/getSolutions/${id}`
    );
    const jsonSolution = await solutionData.json();
    if (jsonSolution.length > 0) {
      jsonSolution[0].problem_description = problem;
      setSolutions(jsonSolution);
    } else {
      setSolutions([{ problem_description: problem, problem_id: id }]);
      //alert("The problem does not have solution");
    }
    const card = document.getElementById("card-6");
    card.display = "block";
    setSolutionCard(true);
  };

  /**
   * When the user clicks the button, the function will hide the card with the id of card-3.
   */
  const hideQnA = () => {
    const card = document.getElementById("card-3");
    card.display = "none";
    setQnA(false);
  };

  return (
    <Fragment>
      <div className="close-btn" onClick={() => hideQnA()}>
        +
      </div>
      <p className="title"> Frequent questions </p>
      {/* <SearchBar SearchType="preguntas" /> */}
      <input
        type="text"
        placeholder="search question"
        value={searchTerm}
        onChange={searchHandler}
      />

      {searchTerm.length < 1
        ? questions.map((question) => {
            return (
              <div className="container-question">
                <p
                  className="question"
                  onClick={() =>
                    checkSolution(
                      question.problem_id,
                      question.problem_description
                    )
                  }
                >
                  {question.problem_description}
                </p>
              </div>
            );
          })
        : searchResult.map((question) => {
            return (
              <div className="container-question">
                <p
                  className="question"
                  onClick={() =>
                    checkSolution(
                      question.problem_id,
                      question.problem_description
                    )
                  }
                >
                  {question.problem_description}
                </p>
              </div>
            );
          })}
    </Fragment>
  );
};

export default QuestionList;
