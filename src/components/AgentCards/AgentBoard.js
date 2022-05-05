/*
  Author: Diego Armando Ulibarri Hernández

  Description: The AgentBoard component serves 
  as a container for the cards which can be 
  selected and arranged in differents positions
  of the board or in different boards

  Usage: 
    id -> Serves as a unique board identifier so 
    cards can be associated with a specific board

  <AgentBoard 
    id: "unique-id"
    className: "board"
  />
*/

const AgentBoard = (props) => {
  //
  const drop = (e) => {
    const card_id = e.dataTransfer.getData("card_id");
    const card = document.getElementById(card_id);
    card.style.display = "block";
    e.target.appendChild(card);
  };

  const dragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};

export default AgentBoard;
