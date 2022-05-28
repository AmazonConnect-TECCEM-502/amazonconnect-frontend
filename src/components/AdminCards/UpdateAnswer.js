import { Fragment, useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CardContext2 } from "./AdminCardProvider";

const UpdateAnswer = (props) => {
  

  return (
    <Fragment>
      <div className="container-question">
        <p className="question">{props.text}</p>
        <div className="buttondelete">
          <RiDeleteBin6Line className="closebutton" size={20} name={props.name} />
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateAnswer;
