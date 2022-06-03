/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that fetch all the categories for the proposals card.
*/
import { Fragment, useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { AdminContext } from "../AdminContextProvider";
import Proposal from "./Proposal";

const ProposalsList = (props) => {
  const [,,,,,,proposals,]= useContext(AdminContext);

  const close = () => {
    //Listen to the click of "close" button
    const card2 = document.getElementById("card-14");
    card2.style.display = "none";
    const card = document.getElementById("card-12");
    card.style.display = "block";
  };

    return (
      <Fragment>
        <CgCloseR className="icon-buttons closebutton" onClick={close} size={20}></CgCloseR>
        <div className="title">
          <p>User Proposals</p>
        </div>
        <div className="container-questions">
          {proposals.map((proposal) => (
            <Proposal
              text={proposal.solution_description}
              proposal_id={proposal.solution_id}
            />
          ))}
          {proposals.length === 0 && <p>No Records</p>}
        </div>
      </Fragment>
    );
  };
  
  export default ProposalsList;
  