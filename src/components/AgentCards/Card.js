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
