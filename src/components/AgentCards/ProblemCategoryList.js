/*
  Author: José Benjamín Ruiz García
          Diego Armando Ulibarri Hernández
  
  Description: Component to show a list with all the categories of the
  problem suggestions
*/

import SearchBar from "./SearchBar";
import { Fragment, useEffect, useState, useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const ProblemCategoryList = () => {
  const [ , , , , , , 
    setQuestions, , , , , , , , , , , ,
    , setQnA, , 
  ] = useContext(AgentContext);

  const [problems, setProblems] = useState([]);
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // const problemsData = await fetch('http://3.80.44.247:3000/problem/getProblemCategorys');
      const problemsData = await fetch(
        "http://localhost:8080/problem/getProblemCategorys"
      );
      const jsonProblems = await problemsData.json();

      setProblems(jsonProblems);
    };

    fetchData();
  }, []);

  const checkQnA = async (id) => {
    // const data = {
    //   category_id: id,
    // };

    // await fetch("http://localhost:8080/problem/postProblem", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    const questionData = await fetch(`http://localhost:8080/problem/getProblem/${id}`);
    const jsonProblems = await questionData.json();
    setQuestions(jsonProblems);
  };

  const showQnA = () => {
    const card = document.getElementById("card-3");
    card.display = "block";
    setQnA(true);
  }

  return (
    <Fragment>
      <p className="title"> Problems by category</p>
      <SearchBar SearchType="preguntas" />
      {problems.map((problem) => {
        return (
          <div className="categorys">
            <button
              type="text"
              className={
                activeLink === problem.category_id && "categorys-active"
              }
              onClick={async() => {
                setActiveLink(problem.category_id);
                await checkQnA(problem.category_id);
                showQnA();
              }}
            >
              {problem.category_name}
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProblemCategoryList;
