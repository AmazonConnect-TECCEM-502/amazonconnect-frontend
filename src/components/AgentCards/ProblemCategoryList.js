// Author: José Benjamín Ruiz García
// Component to show a list with all the categories of the
// problem suggestions

import RowCategoryProblem from "./RowCategoryProblem";
import SearchBar from "./SearchBar";
import { Fragment } from "react";

const ProblemCategoryList = (props) => {
  return (
    <Fragment>
      <p className="title"> Problems by category</p>
      <SearchBar SearchType="preguntas" />
      <div
        onClick={() => {
          console.log("click");
        }}
      >
        <RowCategoryProblem text="Internet issues" />
      </div>
      <RowCategoryProblem text="Account status" />
    </Fragment>
  );
};

export default ProblemCategoryList;
