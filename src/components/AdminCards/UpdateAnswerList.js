import { Fragment, useContext, useEffect, useState } from "react";
import { CardContext2 } from "./AdminCardProvider";
import UpdateAnswer from "./UpdateAnswer";
import {CgCloseR} from "react-icons/cg"

const UpdateAnswerList = (props) => {
  const [
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    arrsolutions,
    setSolutions,
  ] = useContext(CardContext2);

  const [, , , , , , , , , , , , , , , , us, setus, ,] = useContext(CardContext2);

  const close = () =>{
    const card = document.getElementById("card-12");
    card.style.display = !us ? "block" : "none";
    setus(!us);
  }

  return (
    <Fragment>
      <CgCloseR className="closebutton" onClick={close} size={20}></CgCloseR>
      <div className="title">
        <p>Update Solution</p>
      </div>
      <div className="container-questions">
        {arrsolutions.map((solution) => (
          <UpdateAnswer text={solution.solution_description} />
        ))}
        {arrsolutions.length === 0 && <p>No hay registros</p>}
      </div>
    </Fragment>
  );
};

export default UpdateAnswerList;
