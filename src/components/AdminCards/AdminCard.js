/*
  Authors: 
    Andrea Vianey Diaz Alvarez
    Diego Armando Ulibarri Hernández

  Description: 
    The container for the admin configuration card components.
    The cards can be dragged across the different boards.

*/
import { Fragment, useContext } from "react";
import { AdminCardContext } from "./AdminCardProvider";


const AdminCard = (props) => {
const [nqna,, uqna,, nu,, np,, up,,nc,,nca,,csol,,na,,ap] = useContext(AdminCardContext);

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  let cardStyle = {display: "block"};
  if ((props.id === "card-4" && !nqna) || (props.id === "card-5" && !uqna) || (props.id === "card-6" && !nu) || (props.id === "card-8" && !np) || (props.id === "card-9" && !up) || (props.id === "card-10" && !nc) || (props.id === "card-11" && !nca) || (props.id === "card-12" && !csol) || (props.id === "card-13" && !na) || (props.id === "card-14" && !ap)) {
    cardStyle = {display: "none"};
  }

  return (
    <Fragment>
      <div className="card"
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable={props.draggable}
        style={cardStyle}>
        <div className="cardscroll">
          {props.component}
        </div>
      </div>
    </Fragment>
  );
};

export default AdminCard;