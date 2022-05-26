// Author: José Benjamín Ruiz García
// Component to show a list with all the categories of the
// problem suggestions

import RowCategoryProblem from "./RowCategoryProblem";
import SearchBar from "./SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProblemCategoryList = () => {
  const [problems, setProblems] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      // const problemsData = await fetch('http://3.80.44.247:3000/problem/getProblemCategorys');
      const problemsData = await fetch('http://localhost:8080/problem/getProblemCategorys');
      const jsonProblems = await problemsData.json();
      
      setProblems(jsonProblems);
    }

    fetchData();
  }, []);

  return (
    <Fragment>
      <p className="title"> Problems by category</p>
      <SearchBar SearchType="preguntas" />
      {problems.map(problem => {
        return(
          <div>
            <RowCategoryProblem text={problem.category_name}/>
          </div>
        )
      })}
      
      {/* <RowCategoryProblem text="Internet issues"/>
      <RowCategoryProblem text="Account status" /> */}
    </Fragment>
  );
};

export default ProblemCategoryList;
