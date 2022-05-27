/*
  Authors:  Andrea
            Benjamin
            Diego Armando Ulibarri Hernández

  Description: the card component is a container 
  for different components and can be dragged 
  between different boards

  Creation date: *
  Modiffied: *

  Usage: 
    id -> Unique identifier
    draggable -> true or false
    component -> You need to add the component
    you want to use

  <Card 
    id: "unique-id"
    draggable: "true"
    component: {<Menu/>}
  />
*/
import { Fragment } from "react";
import { useContext } from "react";
import { CardContext } from "./CardsProvider";

const Card = (props) => {
  const [problem, , client, , , , , , product] = useContext(CardContext);

  const dragStart = (e) => {
    // Change Paramater name
    // Function Description
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    // Change Paramete name
    // Function Description
    e.stopPropagation();
  };

  let cardStyle = { display: "block" };
  if (
    (props.id === "card-5" && !problem) ||
    (props.id === "card-4" && !client) ||
    (props.id === "card-8" && !product)
  ) {
    cardStyle = { display: "none" };
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

export default Card;
