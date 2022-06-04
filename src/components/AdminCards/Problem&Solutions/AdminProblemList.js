/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that fetch all the problems for the update problem card.
*/
import { Fragment, useContext, useEffect} from "react";
import { AdminContext } from "../AdminContextProvider";
import AdminProblem from "./AdminProblem";
import {CgCloseR} from "react-icons/cg"


const AdminProblemList = (props) => {
  const [,,,,,,,,arrpreguntas,,,,category]= useContext(AdminContext);

  const close = () =>{
    const card = document.getElementById("card-15");
    card.style.display = "none";
  }

  return (
    <Fragment>
      <CgCloseR name="close-button" className="icon-buttons closebutton" onClick={close} size={20}></CgCloseR>
      <div className="title">
        <p> {category} </p>
        <p> Problems </p>
      </div>
      <div className="container-questions">
        {arrpreguntas.map((pregunta) => (
          <AdminProblem text={pregunta.problem_description} problem_id={pregunta.problem_id} />
        ))}
        {arrpreguntas.length === 0 && <p>No Problems</p>}
      </div>
    </Fragment>
  );
};

export default AdminProblemList;
