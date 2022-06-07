/*
  Authors:  Andrea Vianey Diaz Alvarez
            José Benjamín Ruiz García
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
import { useContext } from "react";
import { AgentContext } from "../AgentView/AgentProvider";

const Card = (props) => {
  /** Contains the values ​​of the cards that are used in the agentView, 
   * it helps us to see which ones are hidden at the beginning of the 
   * application
   */
  const [ 
    problem,,
    client,,
    ,,
    product,,
    recording,,
    ,,
    AC,,
    ,,
    qna,,
    solutionCard,
  ] = useContext(AgentContext);

  /**
   * When the dragStart event is triggered, the target is set to the id 
   * of the element that triggered the event.
   * @param e - The event object.
   */
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("card_id", target.id);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  /* 
    Setting the style of the card to display:none 
    if the condition is met. 
  */
  let cardStyle = { display: "block" };
  if (
    (props.id === "card-5" && !problem) ||
    (props.id === "card-4" && !client) ||
    (props.id === "card-8" && !product) ||
    (props.id === "card-2" && !recording) ||
    (props.id === "card-0" && !AC) ||
    (props.id === "card-3" && !qna) ||
    (props.id === "card-6" && !solutionCard)
  ) {
    cardStyle = { display: "none"};
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
