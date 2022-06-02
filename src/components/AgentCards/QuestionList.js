import { Fragment, useContext, useState} from "react";
import { AgentContext } from "../AgentView/AgentProvider";
// import SearchBar from "./SearchBar";

const QuestionList = (props) => {
  // Questions where assigned in RowCategoryProblem.js
  // We access those questions through CardContext
  const [,,,,
    questions,,,,,,,,,,
    setSolutions, , setQnA, ,setSolutionCard
  ] = useContext(AgentContext);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchHandler = async (event) => {
    setSearchTerm(event.target.value);
    if(searchTerm !== "") {
      const newQuestionList = await questions.filter((question) => {
        return Object.values(question)
          .join(" ")
          .toLowerCase().includes(searchTerm.toLowerCase());
      });
      setSearchResult(newQuestionList);
      //console.log(searchResult);
    } else {
      setSearchResult(questions)
    }
  };


  const checkSolution = async (id, problem) => {
    // const data = {
    //   solution_id: id
    // };

    // await fetch("http://localhost:8080/problem/postProblem", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });
    // console.log(data);

    const solutionData = await fetch(`http://localhost:8080/problem/getSolutions/${id}`);
    const jsonSolution = await solutionData.json();
    jsonSolution[0].problem_description = problem;
    setSolutions(jsonSolution);
    const card = document.getElementById("card-6");
    card.display = "block";
    setSolutionCard(true);
  }

  const hideQnA = () => {
    const card = document.getElementById("card-3");
    card.display = "none";
    setQnA(false);
  }

  return (
    <Fragment>
      <div className="close-btn" onClick={() => hideQnA()}>+</div>
      <p className="title"> Frequent questions </p>
      {/* <SearchBar SearchType="preguntas" /> */}
      <input type="text" placeholder="search question" value={searchTerm} onChange={searchHandler} />

      {searchTerm.length < 1 ? questions.map(question => {
        return (
          <div className="container-question">
            <p 
              className="question" 
              onClick={() => checkSolution(question.problem_id, question.problem_description)}>
                {question.problem_description}
            </p>
          </div>
        )
      }) : searchResult.map(question => {
        return(
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
