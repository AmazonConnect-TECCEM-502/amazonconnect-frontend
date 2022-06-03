/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Represent a Problem of the proposal list in the admin configuration.
  Functionalities: 
    - Change to Solutions Card after fetching all the approved solutions.
    - Delete a Problem. (FALTA)

*/
import { Fragment, useContext} from "react";
import toast from "react-hot-toast";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AdminContext } from "../AdminContextProvider";


const AdminProblem = (props) => {
  const [,setSolutions,,setPreg_id,,,,,,setPreguntas]= useContext(AdminContext);

  const SolutionCard = async () => {
    const card2 = document.getElementById("card-13");
    card2.style.display = "none"; //Hide New Solution Card if showing
    const card3 = document.getElementById("card-14");
    card3.style.display = "none"; //Hide Proposals Card if showing
    const response = await fetch(`http://localhost:8080/problem/getSolutions/${props.pregunta_id}`)
    const json = await response.json()//Get solutions by problem ID
    setSolutions(json)
    setPreg_id(props.pregunta_id.toString())
    const card = document.getElementById("card-12");
    card.style.display = "block"//Show solutions card
  };

  const DeleteProblem = async () => {
    await fetch(`http://localhost:8080/problem/deleteProblem/${props.pregunta_id}`, { method: "DELETE"});
    const response = await fetch("http://localhost:8080/problem/getProblemid")
    const json = await response.json()
    setPreguntas(json)
    toast.success("Problem deleted")
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div>
          <AiFillEdit className="icon-buttons" size={20} onClick={SolutionCard} preg_id = {props.pregunta_id} />
          <div className="buttondelete">
            <RiDeleteBin6Line className="icon-buttons" onClick={DeleteProblem} size={20}/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AdminProblem;
