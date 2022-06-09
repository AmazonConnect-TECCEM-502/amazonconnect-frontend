/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 
    Represent a proposal of the proposal list in the admin configuration.
    Functionalities:
     - Delete a proposal
     - Approve a proposal
*/

import { Fragment } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import {BsCheck2Square} from 'react-icons/bs'
import toast from "react-hot-toast";

const Proposal = (props) => {

  const DeleteProposal = async () => {
    //Delete a Proposal
    await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/problem/deleteSolution/${props.proposal_id}`,
      { method: "DELETE" }
    );
    toast.success("Proposal deleted")
    const card = document.getElementById("card-14");
    card.style.display = "none";
    const card2 = document.getElementById("card-12");
    card2.style.display = "block";
  };
  
  const ApproveProposal = async() =>{
    //Add a new solution and delete de proposal
    const newdate = new Date() // Todays date
    const user_id = localStorage.getItem("user_id")
    const request_options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: newdate.getFullYear() + '-' + newdate.getMonth() + '-' + newdate.getDay(),
        approved_by: user_id
      }),
    };
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/postApproveProposals/${props.proposal_id}`,request_options);
    toast.success("Solution approved")
    const card = document.getElementById("card-14");
    card.style.display = "none";
    const card2 = document.getElementById("card-12");
    card2.style.display = "none";
  }

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line
            className="icon-buttons"
            size={20}
            onClick={DeleteProposal}
          />
          <BsCheck2Square
            className="icon-buttons"
            size={20}
            onClick={ApproveProposal}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Proposal;
