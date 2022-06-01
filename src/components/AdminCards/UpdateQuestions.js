/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Represent a Problem of the proposal list in the admin configuration.
  Functionalities: 
    - Change to Solutions Card after fetching all the approved solutions.
    - Delete a Problem. (FALTA)

*/
import { Fragment, useContext} from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AdminContext } from "./AdminContextProvider";

const UpdateQuestions = (props) => {
  const [,setSolutions,,setPreg_id,] = useContext(AdminContext);

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

  return (
    <Fragment>
      <div className="container-question">
        <AiFillEdit className="closebutton" size={20} onClick={SolutionCard} preg_id = {props.pregunta_id} />
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line className="closebutton" size={20}/>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateQuestions;
