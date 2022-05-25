import { useContext } from "react";
import { CardContext2 } from "../AdminCards/AdminCardProvider";

const ElementConfiguration = (props) => {
  const [nqna, setnqna, uqna, setuqna, nu, setnu, uu, setuu, np, setnp, up, setup, nc, setnc, nca,setnca] = useContext(CardContext2);

  const newCardHandler = (event) => {
    if (event.target.value === "nqna") {
      const card = document.getElementById("card-4");
      card.style.display = !nqna ? "block" : "none";
      setnqna(!nqna)
    }
    if(event.target.value === "uqna"){
      const card = document.getElementById("card-5");
      card.style.display = !uqna ? "block" : "none";
      setuqna(!uqna)
    }
    if(event.target.value === "nu"){
      const card = document.getElementById("card-6");
      card.style.display = !nu ? "block" : "none";
      setnu(!nu)
    }
    if(event.target.value === "uu"){
      const card = document.getElementById("card-7");
      card.style.display = !uu ? "block" : "none";
      setuu(!uu)
    }
    if(event.target.value === "np"){
      const card = document.getElementById("card-8");
      card.style.display = !np ? "block" : "none";
      setnp(!np)
    }
    if(event.target.value === "up"){
      const card = document.getElementById("card-9");
      card.style.display = !up ? "block" : "none";
      setup(!up)
    }
    if(event.target.value === "nc"){
      const card = document.getElementById("card-10");
      card.style.display = !up ? "block" : "none";
      setnc(!nc)
    }
    if(event.target.value === "nca"){
      const card = document.getElementById("card-11");
      card.style.display = !up ? "block" : "none";
      setnca(!nca)
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
export default ElementConfiguration;
