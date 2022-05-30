import { Fragment, useContext} from "react";
import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardContext2 } from "./AdminCardProvider";

const UpdateQuestions = (props) => {
  const [,,,,,,,,,,,,,,,,,setSolutions,,,,,,setPreg_id] = useContext(CardContext2);

  const SolutionCard = async () => {
    const card2 = document.getElementById("card-13");
    card2.style.display = "none";
    //Get solutions by problem ID
    const response = await fetch(`http://localhost:8080/problem/getSolutions/${props.pregunta_id}`)
    const json = await response.json()
    setSolutions(json)
    setPreg_id(props.pregunta_id.toString())

    //Show card
    const card = document.getElementById("card-12");
    card.style.display = "block"
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
