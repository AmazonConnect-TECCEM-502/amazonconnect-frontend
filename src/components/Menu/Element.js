/*
  Authors: Diego Armando Ulibarri Hernández
  Description: Contain the elements of the menu, and have the logic to 
  display or not the correspondig cards

  Usage:
    element -> element name Ex. "Problems"
    elemtID -> "problems"
  <Element element="Problems" elementID="problems"/>
*/

import { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AgentContext } from "../AgentView/AgentProvider";
import { ClientContext } from "../ClientCard/ClientProvider";

const Element = (props) => {
  const [
    problem,
    setProblem,
    client,
    setClient,
    ,
    ,
    product,
    setProduct,
    recording,
    setRecording,
    ,
    ,
    AC,
    setAC,
  ] = useContext(AgentContext);

  const [, , , , , , , , clientPhone, setClientPhone, , , ,] =
    useContext(ClientContext);

  const [showInput, setShowInput] = useState(false);

  /* Checking if the elementID is equal to client, if it is, then it will set the showInput to true. */
  useEffect(() => {
    if (props.elementID === "client") {
      setShowInput(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * When the user types in the input field, the value of the input field is set to the state of the
   * clientPhone variable.
   * @param event - The event object is a JavaScript event that is sent to an element when an event
   * occurs on it.
   */
  const clientPhoneHandler = (event) => {
    setClientPhone(event.target.value);
  };

  /**
   * If the value of the button clicked is equal to the value of the card, then display the card.
   * @param event - the event that triggered the function
   */
  const newCardHandler = (event) => {
    if (event.target.value === "problems") {
      const card = document.getElementById("card-5");
      card.style.display = !problem ? "block" : "none";
      setProblem(!problem);
    }
    if (event.target.value === "client") {
      if(clientPhone !== "")
      {
        setShowInput(!showInput);
        const card = document.getElementById("card-4");
        card.style.display = !client ? "block" : "none";
        setClient(!client);
      }
      else
      {
        toast.error('Please fill in the phone number');
        event.target.checked = false;
      }
    }
    if (event.target.value === "products") {
      const card = document.getElementById("card-8");
      card.style.display = !product ? "block" : "none";
      setProduct(!product);
    }
    if (event.target.value === "startRecording") {
      const card = document.getElementById("card-2");
      card.style.display = !recording ? "block" : "none";
      setRecording(!recording);
    }
    if (event.target.value === "amazonConnect") {
      const card = document.getElementById("card-0");
      card.style.display = !AC ? "block" : "none";
      setAC(!AC);
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
      <label htmlFor={props.elementID}>&nbsp;{props.element}</label>
      {showInput && (
        <input
          className="user-ID"
          type="text"
          placeholder="Client phone"
          onChange={clientPhoneHandler}
        />
      )}
    </div>
  );
};
export default Element;
