/*
  Author: José Benjamín Ruiz García
          Diego Armando Ulibarri Hernández
  
  Description: Component to show a list with all the categories of the
  problem suggestions
*/

import SearchBar from "./SearchBar";
import { Fragment, useEffect, useState, useContext } from "react";
import { CardContext } from "./CardsProvider";

const ProblemCategoryList = () => {
  const [, , , , , , questions, setQuestions] = useContext(CardContext);
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
    const data = {
      category_id: id,
    };
    console.log(JSON.stringify(data));

    await fetch("http://localhost:8080/problem/postProblem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    //const resultJSON = await result.json()

    const questionData = await fetch(
      "http://localhost:8080/problem/getProblem"
    );
    const jsonProblems = await questionData.json();
    setQuestions(jsonProblems);
    console.log(questions);
  };

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
              onClick={() => {
                setActiveLink(problem.category_id);
                checkQnA(problem.category_id);
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
