/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Represent a solution of the solutions list in the admin page. 
  Functionalities:
    - Delete the solution
*/

import { Fragment } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import toast from 'react-hot-toast';

const AdminSolution = (props) => {

  const Deletesolution = async () => {
    //Listen to the click of "Delete" button for solution
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/problem/deleteSolution/${props.sol_id}`,
      { method: "DELETE" }
    );
    toast.success("Solution deleted")
    const card = document.getElementById("card-12");
    card.style.display = "none";
  };

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line
            className="icon-buttons"
            size={20}
            onClick={Deletesolution}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default AdminSolution;
