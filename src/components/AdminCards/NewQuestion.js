import { Fragment } from "react";
import "../../style/AdminCards/AdminCards.css"

const NewQuestion = (props) => {
    return( 
      <Fragment>
          <div className="title"> Create Question & Answer </div>
          <div className="new">
                <p>Question: </p>
                <input className="user-ID" type="text" name="Question" />
                <p>Category: </p>
                <input className="user-ID" type="text" name="Question" />
                <p>Answer: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p className="forget"> Add another answer</p>
                <button className="buttonSubmit"> Submit </button>
          </div>
      </Fragment>
    );
};

export default NewQuestion;

