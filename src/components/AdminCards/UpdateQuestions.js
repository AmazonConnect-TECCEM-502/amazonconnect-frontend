import { Children, createContext, Fragment, useContext, useEffect, useState} from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardContext2 } from "./AdminCardProvider";

const UpdateQuestions = (props) => {
  const [, , , , , , , , , , , , , , , , us, setus,arrsolutions,setSolutions] = useContext(CardContext2);

  const TarjetaSolucion = async () => {
    const response = await fetch(`http://localhost:8080/problem/getSolutions/${props.name}`)
    const json = await response.json()
    setSolutions(json)
    console.log(json)

    const card = document.getElementById("card-12");
    card.style.display = !us ? "block" : "none";
    setus(!us);
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <AiFillEdit className="closebutton" size={20} name={props.name} onClick={TarjetaSolucion} />
          <RiDeleteBin6Line className="closebutton" size={20} name={props.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateQuestions;
