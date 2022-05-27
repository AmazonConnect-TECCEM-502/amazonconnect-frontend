import { Fragment, useContext, useEffect, useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardContext2 } from "./AdminCardProvider";

const UpdateQuestions = (props) => {
  const [, , , , , , , , , , , , , , , , us, setus] = useContext(CardContext2);

  const TarjetaSolucion = () => {
    const card = document.getElementById("card-12");
    card.style.display = !us ? "block" : "none";
    setus(!us);
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <AiFillEdit size={20} name={props.name} onClick={TarjetaSolucion} />
          <RiDeleteBin6Line size={20} name={props.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateQuestions;
