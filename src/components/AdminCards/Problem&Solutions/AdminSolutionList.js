/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that shows all the aproved solutions
    Functionalities:
     - Change to create solution card.
     - Change to proposal card after fetching all the not approval solutions.
     - Close this card component.
*/
import { Fragment, useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { AdminContext } from "../AdminContextProvider";
import AdminSolution from "./AdminSolution";

const AdminSolutionList = (props) => {
  const [arrsolutions,,preg_id,,,,,setProposals] =useContext(AdminContext);

  const close = () => {
    //Listen to the click of "close" button
    const card2 = document.getElementById("card-13");
    card2.style.display = "none";
    const card = document.getElementById("card-12");
    card.style.display = "none";
    const card3 = document.getElementById("card-14");
    card3.style.display = "none";
  };

  const CreateSolution = async () => {
    const card = document.getElementById("card-12");
    card.style.display = "none"; //Hide update answer card
    const card2 = document.getElementById("card-13");
    card2.style.display = "block"; //Show new solution card
  };

  const ProposalsCard = async () => {
    const card2 = document.getElementById("card-12");
    card2.style.display = "none"; //Hide Update Answers card
    const response = await fetch(`http://localhost:8080/problem/getProposals/${preg_id}`) //Get proposals by problem ID
    const json = await response.json()
    setProposals(json) //Save proposals list in context
    const card = document.getElementById("card-14");
    card.style.display = "block" //Show proposals card
  };

  return (
    <Fragment>
      <CgCloseR name="close-button" className="icon-buttons closebutton" onClick={close} size={20}></CgCloseR>
      <div className="title">
        <p>Update Solutions</p>
      </div>
      <button className="forget" onClick={CreateSolution}>
        Add new solution
      </button>
      <button className="forget" onClick={ProposalsCard}>
        See Proposals
      </button>
      <div className="container-questions">
        {arrsolutions.map((solution) => (
          <AdminSolution
            text={solution.solution_description}
            sol_id={solution.solution_id}
          />
        ))}
        {arrsolutions.length === 0 && <p>No hay registros</p>}
      </div>
    </Fragment>
  );
};

export default AdminSolutionList;
