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
      `http://localhost:8080/problem/deleteSolution/${props.proposal_id}`,
      { method: "DELETE" }
    );
    toast.success("Proposal deleted")
    const card = document.getElementById("card-14");
    card.style.display = "none";
    const card2 = document.getElementById("card-12");
    card2.style.display = "block";
  };
  
  const ApproveProposal = async() =>{
    const newdate = new Date() // Todays date
    const request_options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        date: newdate.getFullYear() + '-' + newdate.getMonth() + '-' + newdate.getDay()
      }),
    };
    await fetch(`http://localhost:8080/problem/postApproveProposals/${props.proposal_id}`,request_options);
    toast.success("Solution approved")
    const card = document.getElementById("card-14");
    card.style.display = "none";
    const card2 = document.getElementById("card-12");
    card2.style.display = "block";
  }

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line
            className="closebutton"
            size={20}
            onClick={DeleteProposal}
          />
          <BsCheck2Square
            className="closebutton"
            size={20}
            onClick={ApproveProposal}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Proposal;
