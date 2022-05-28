/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/
import { Fragment, useContext } from "react";
import { CardContext2 } from "./AdminCardProvider";
import UpdateAnswer from "./UpdateAnswer";
import { CgCloseR } from "react-icons/cg";

const UpdateAnswerList = (props) => {
  const [, , , , , , , , , , , , , , , , arrsolutions] =
    useContext(CardContext2);

  const close = () => {
    //Close Solutions Card
    const card2 = document.getElementById("card-13");
    card2.style.display = "none";
    const card = document.getElementById("card-12");
    card.style.display = "none";
  };

  const CreateSolution = async () => {
    const card = document.getElementById("card-12");
    card.style.display = "none";
    const card2 = document.getElementById("card-13");
    card2.style.display = "block";
  };

  return (
    <Fragment>
      <CgCloseR className="closebutton" onClick={close} size={20}></CgCloseR>
      <div className="title">
        <p>Update Solutions</p>
      </div>
      <button className="forget" onClick={CreateSolution}>
        {" "}
        Add solution
      </button>
      <div className="container-questions">
        {arrsolutions.map((solution) => (
          <UpdateAnswer
            text={solution.solution_description}
            sol_id={solution.solution_id}
          />
        ))}
        {arrsolutions.length === 0 && <p>No hay registros</p>}
      </div>
    </Fragment>
  );
};

export default UpdateAnswerList;
