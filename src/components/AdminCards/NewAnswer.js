import { Fragment, useContext, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { CardContext2 } from "./AdminCardProvider";

const NewAnswer = (props) => {
  const [,,,,,,,,,,,,,,,,,,,,,,preg_id,] = useContext(CardContext2);
  const [descriptionSol, setDescriptionSol] = useState("");

  const changeDescription = (event) =>{
    setDescriptionSol(event.target.value)
  };

  const close = () => {
    //Close new solution card
    const card2 = document.getElementById("card-13");
    card2.style.display = "none";
    const card = document.getElementById("card-12");
    card.style.display = "block";
  };

  const CreateSolution = async () =>{
    console.log(preg_id)
    const request_options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ solution_description: descriptionSol.toString(), problem_id:preg_id,submitted_id:2,approved_by:2})}

    await fetch(`http://localhost:8080/problem/postCreateSolution`, request_options);

    const card = document.getElementById("card-13");
    card.style.display = "none";
  }



  return (
    <Fragment>
      <CgCloseR className="closebutton" onClick={close} size={20}></CgCloseR>
      <div className="title">
        <p>Create Solutions</p>
      </div>
      <div className="new">
        <p>Description: </p>
        <input className="user-ID" type="text" name="Description" onChange={changeDescription}/>
        <br />
        <button className="buttonSubmit" onClick={CreateSolution} > Submit </button>
      </div>
    </Fragment>
  );
};

export default NewAnswer;
