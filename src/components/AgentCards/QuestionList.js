import { Fragment, useContext, useState } from "react";
import { CardContext } from "./CardsProvider";
import Questions from "./Questions";
import SearchBar from "./SearchBar";

const QuestionList = (props) => {
  const [, , , , , , questions, ] = useContext(CardContext);

  return (
    <Fragment>
      <p className="title"> Frequent questions </p>
      <SearchBar SearchType="preguntas" />
      <div className="container-questions">
        {questions.map(question => {
          return <Questions text={question.problem_description} />
        })}
      </div>
    </Fragment>
  );
};

export default QuestionList;
