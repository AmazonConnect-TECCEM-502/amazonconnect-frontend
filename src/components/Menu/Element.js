/*
  Authors: Diego Armando Ulibarri Hernández
  Description: 

  Usage: 
  <Element />
*/

import { useContext } from "react";
import { CardContext } from "../AgentCards/CardsProvider";

const Element = (props) => {
  const [qna, setQna, client, setClient] = useContext(CardContext);

  const newCardHandler = (event) => {
    if (event.target.value === "qna") {
      const card = document.getElementById("card-3");
      card.style.display = !qna ? "block" : "none";
      setQna(!qna)
    }
    if(event.target.value === "client"){
      const card = document.getElementById("card-4");
      card.style.display = !client ? "block" : "none";
      setClient(!client)
    }
  };

  return (
    <div className="element">
      <input
        onChange={newCardHandler}
        type="checkbox"
        id={props.elementID}
        value={props.elementID}
      />
      <label htmlFor={props.elementID}>
        &nbsp;{props.element}&nbsp;{props.input}
      </label>
    </div>
  );
};
export default Element;
