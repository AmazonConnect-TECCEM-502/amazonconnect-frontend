/*
  Authors: Diego Armando Ulibarri Hernández
  Description: 

  Usage: 
  <Element />
*/

import { useContext, useEffect, useState } from "react";
import { AgentContext } from "../AgentView/AgentProvider";
import { ClientContext } from "../ClientCard/ClientProvider";

const Element = (props) => {
  const [ problem, setProblem,
    client, setClient,
    ,,,,
    product, setProduct,
    ,,,,
    recording, setRecording,
    keyStroke, setKeyStroke,
    AC, setAC ] = useContext(AgentContext);
  
  const [ , , , , , , , , clientPhone, setClientPhone, , , , ] = useContext(ClientContext);


  const [showInput, setShowInput] = useState(false);
  
  useEffect( () => {
    if(props.elementID === "client"){
      setShowInput(true);
    }
  }, []);
  
  const clientPhoneHandler = (event) => {
    setClientPhone(event.target.value);
  }

  const newCardHandler = (event) => {
    if (event.target.value === "problems") {
      const card = document.getElementById("card-5");
      card.style.display = !problem ? "block" : "none";
      setProblem(!problem);
    }
    if(event.target.value === "client" && clientPhone !== ""){
      const card = document.getElementById("card-4");
      card.style.display = !client ? "block" : "none";
      setClient(!client);
    }
    if(event.target.value === "products"){
      const card = document.getElementById("card-8");
      card.style.display = !product ? "block" : "none";
      setProduct(!product);
    }
    if(event.target.value === "startRecording"){
      const card = document.getElementById("card-2");
      card.style.display = !recording ? "block" : "none";
      setRecording(!recording);
    }
    if(event.target.value === "captureKeyStrokes"){
      const card = document.getElementById("card-7");
      card.style.display = !keyStroke ? "block" : "none";
      setKeyStroke(!keyStroke);
    }
    if(event.target.value === "amazonConnect"){
      const card = document.getElementById("card-0");
      card.style.display = !AC ? "block" : "none";
      setAC(!AC);
    }
  };

  console.log(showInput);
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
      {
        showInput &&
        <input className="user-ID"
        type = "text"
        placeholder = "Client phone"
        onChange = {clientPhoneHandler}/>
      }
    </div>
  );
};
export default Element;
