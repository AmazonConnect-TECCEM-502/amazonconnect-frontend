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
import { AgentContext } from "../AgentView/AgentProvider";

const Card = (props) => {
  const [ problem, ,
    client, ,
    ,,,,
    product, ,
    ,,,,
    recording, ,
    keyStroke, ,
    AC, ,
    , ,
    , ,
    qna, ,
    solutionCard, ,
  ] = useContext(AgentContext);

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
    (props.id === "card-8" && !product) ||
    (props.id === "card-2" && !recording) ||
    (props.id === "card-7" && !keyStroke) ||
    (props.id === "card-0" && !AC) ||
    (props.id === "card-3" && !qna) ||
    (props.id === "card-6" && !solutionCard)
  ) {
    cardStyle = { display: "none" };
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

export default Card;
