import { Fragment, useContext } from "react";
import { CardContext2 } from "./AdminCardProvider";


const AdminCard = (props) => {
const [nqna,, uqna,, nu,, uu,, np,, up,] = useContext(CardContext2);

  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  let cardStyle = {display: "block"};
  if ((props.id === "card-4" && !nqna) || (props.id === "card-5" && !uqna) || (props.id === "card-6" && !nu) || (props.id === "card-7" && !uu) || (props.id === "card-8" && !np) || (props.id === "card-9" && !up)) {
    cardStyle = {display: "none"};
  }

  
  return (
    <Fragment>
      <div
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable={props.draggable}
        className="card"
        style={cardStyle}
      >
        {props.component}
      </div>
    </Fragment>
  );
};

export default AdminCard;