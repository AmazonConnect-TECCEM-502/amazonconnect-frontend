import { Fragment } from "react";
import {AiFillEdit} from "react-icons/ai"
import {RiDeleteBin6Line} from "react-icons/ri"

const UpdateQuestions = (props) => {

    return( 
      <Fragment>
        <div className = "container-question">
            <p className = "question">{props.text}</p>
            <div className="buttondelete"> 
                <AiFillEdit size={20} name= {props.edit}/>
                <RiDeleteBin6Line size={20} name = {props.delete}/>
            </div>
        </div>
            

      </Fragment>
    );
  };
  
  export default UpdateQuestions;