/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/

import { Fragment } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const UpdateAnswer = (props) => {
  const Deletesolution = async () => {
    //Delete Solution
    await fetch(
      `http://localhost:8080/problem/deleteSolution/${props.sol_id}`,
      { method: "DELETE" }
    );
    const card = document.getElementById("card-12");
    card.style.display = "none";
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line
            className="closebutton"
            size={20}
            onClick={Deletesolution}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateAnswer;
