/*
  Authors:  Andre
            Benjamin
            Diego Armando Ulibarri Hernández

  Description: the card component is a container 
  for different components and can be dragged 
  between different boards

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

const Card = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };
  
  return (
    <Fragment>
      <div
        id={props.id}
        onDragStart={dragStart}
        onDragOver={dragOver}
        draggable={props.draggable}
        className="card"
      >
        {props.component}
      </div>
    </Fragment>
  );
};

export default Card;
