/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: Component that fetch all the categories for the proposals card.
*/
import { Fragment, useContext } from "react";
import { CgCloseR } from "react-icons/cg";
import { AdminContext } from "../AdminContextProvider";
import Proposal from "./Proposal";

const ProposalsList = (props) => {
  const [,,,,,,proposals,,,,ProbDesc]= useContext(AdminContext);

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
          <p>{ProbDesc}</p>
          <p>Proposals</p>
        </div>
        <div className="container-questions">
          {proposals.map((proposal, index) => (
            <Proposal
              text={proposal.solution_description}
              proposal_id={proposal.solution_id}
              key={index}
            />
          ))}
          {proposals.length === 0 && <p>No Proposals</p>}
        </div>
      </Fragment>
    );
  };
  
  export default ProposalsList;
  