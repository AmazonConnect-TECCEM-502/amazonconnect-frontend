/*
  Authors: Diego Armando Ulibarri Hernández
  Description: 

  Usage: 
  <Element />
*/

import { useContext } from "react";
import { CardContext } from "../AgentCards/CardsProvider";

const Element = (props) => {
  const [problem, setProblem, client, setClient, , , , , product, setProduct] = useContext(CardContext);

  const newCardHandler = (event) => {
    if (event.target.value === "problems") {
      const card = document.getElementById("card-5");
      card.style.display = !problem ? "block" : "none";
      setProblem(!problem);
    }
    if(event.target.value === "client"){
      const card = document.getElementById("card-4");
      card.style.display = !client ? "block" : "none";
      setClient(!client);
    }
    if(event.target.value === "products"){
      const card = document.getElementById("card-8");
      card.style.display = !product ? "block" : "none";
      setProduct(!product);
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
        &nbsp;{props.element}
      </label>
    </div>
  );
};
export default Element;
