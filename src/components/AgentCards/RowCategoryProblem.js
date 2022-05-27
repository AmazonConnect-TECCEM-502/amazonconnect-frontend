/* 
  Author: José Benjamín Ruiz García
          Diego Armando Ulibarri Hernández

  Description: Component that represents the categories available for the problem
  suggestions
*/
import { useContext } from "react";
import { CardContext } from "./CardsProvider";


const RowCategoryProblem = (props) => {
  const [, , , , , , questions, setQuestions] = useContext(CardContext);

  const checkQnA = async () => {
    const data = {
      category_id: props.id
    }
    console.log(JSON.stringify(data));

    const result = await fetch('http://localhost:8080/problem/postProblem',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    //const resultJSON = await result.json()

    const questionData = await fetch('http://localhost:8080/problem/getProblem');
    const jsonProblems = await questionData.json();
    setQuestions(jsonProblems);
    console.log(questions);
  }

  return (
    <div className="categorys">
      <button type="text" onClick={checkQnA}>{props.text}</button>
    </div>
  );
};

export default RowCategoryProblem;
