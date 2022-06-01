/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 

*/
import { Fragment, useContext, useState } from "react";
import { CgCloseR } from "react-icons/cg";
import { AdminContext } from "./AdminContextProvider";
import toast, { Toaster } from 'react-hot-toast';

const NewAnswer = (props) => {
  const [,,preg_id,,]= useContext(AdminContext);
  const [descriptionSol, setDescriptionSol] = useState("");
  const notify = () => toast.success('New Solution Created');

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
    const newdate = new Date() // Todays date
    const date = newdate.getFullYear() + '-' + newdate.getMonth() + '-' + newdate.getDay()

    const request_options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ solution_description: descriptionSol.toString(),approved_date: date, problem_id:preg_id,submitted_id:2,approved_by:2})}

    await fetch(`http://localhost:8080/problem/postCreateSolution`, request_options);
    notify();
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
        <Toaster />
      </div>
    </Fragment>
  );
};

export default NewAnswer;
