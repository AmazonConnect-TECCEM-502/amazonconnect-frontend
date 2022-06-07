/*
  Author: José Benjamín Ruiz García
          Diego Armando Ulibarri Hernández
  
  Description: Component to show a list with all the categories of the
  problem suggestions

  Usage: 
  <ProblemCategoryList />
*/

import { Fragment, useEffect, useState, useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const ProblemCategoryList = () => {
  // setQuestions -> Method used to add the questions
  // setQna -> Method used to display the Questions card
  const [,,,,,setQuestions,,,,,,,,,,,,setQnA,,,categoryProblem,setCategoryProblem
  ] = useContext(AgentContext);
  // Contains a List of problems
  const [problems, setProblems] = useState([]);
  // Used to see which problem was selected
  const [activeLink, setActiveLink] = useState(0);

  /* Fetching data from the server and adding it to problems */
  useEffect(() => {
    const fetchData = async () => {
      //const problemsData = await fetch('https://fronttest.tecmex-connect.link/');
      const problemsData = await fetch("http://localhost:8080/problem/getProblemCategorys");
      const jsonProblems = await problemsData.json();

      setProblems(jsonProblems);
    };
    fetchData();
  }, []);
  /**
   * It fetches the data from the API and sets the state of the questions.
   * @param id - the id of the question
   */
  const checkQnA = async (id) => {
    //`https://3.80.44.247:8443/problem/getProblem/${id}`
    const questionData = await fetch(
      `http://localhost:8080/problem/getProblem/${id}`
    );
    const jsonProblems = await questionData.json();
    setQuestions(jsonProblems);
  };
  /**
   * When the user clicks the problem category, the QnA card will be
   * displayed and the state of the QnA will be set to true.
   */
  const showQnA = () => {
    const card = document.getElementById("card-3");
    card.display = "block";
    setQnA(true);
  };

  // Helps us identify the question we are looking for
  const [searchTerm, setSearchTerm] = useState("");
  // List of problems that are filtered by the searchTerm
  const [searchResult, setSearchResult] = useState([]);
  /**
   * It takes the search term and filters the questions array
   * based on the search term.
   * @param event - the event that triggered the function
   */
  const searchHandler = async (event) => {
    setSearchTerm(event.target.value);
    if (searchTerm !== "") {
      const newProblemList = await problems.filter((problem) => {
        return Object.values(problem)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResult(newProblemList);
    } else {
      setSearchResult(problems);
    }
  };

  return (
    <Fragment>
      <p className="title"> Problems by category</p>
      <input
        type="text"
        placeholder="search question"
        value={searchTerm}
        onChange={searchHandler}
      />
      {searchTerm.length < 1 ?
        problems.map((problem, index) => {
          return (
            <div key={index}  className="categorys">
              <button
                type="text"
                className={
                  activeLink === problem.category_id ? "categorys-active" : undefined
                }
                onClick={async () => {
                  setActiveLink(problem.category_id);
                  setCategoryProblem([...categoryProblem, problem.category_id])
                  await checkQnA(problem.category_id);
                  showQnA();
                }}
              >
                {problem.category_name}
              </button>
            </div>
          );
        })
        : searchResult.map((problem, index) => {
          return (
            <div key={index}  className="categorys">
              <button
                type="text"
                className={
                  activeLink === problem.category_id ? "categorys-active" : undefined
                }
                onClick={async () => {
                  setActiveLink(problem.category_id);
                  setCategoryProblem([...categoryProblem, problem.category_id])
                  await checkQnA(problem.category_id);
                  showQnA();
                }}
              >
                {problem.category_name}
              </button>
            </div>
          );
        })
      }
    </Fragment>
  );
};

export default ProblemCategoryList;
