import { Fragment } from "react";
import "../../style/AdminCards/AdminCards.css"

const NewQuestion = (props) => {
    return( 
      <Fragment>
          <div className="title"> Create Problem & Solutions </div>
          <div className="new">
                <p>Question: </p>
                <input className="user-ID" type="text" name="Question" />
                <p>Category: </p>
                <select className="user-ID" name="select">
                  <option value="value1">Value 1</option>
                  <option value="value2">Value 2</option>
                  <option value="value3">Value 3</option>
                </select>
                <p>Answer: </p>
                <input className="user-ID" type="text" name="Answer" />
                <button className="forget"> Add another answer</button>
                <button className="buttonSubmit"> Submit </button>
          </div>
      </Fragment>
    );
};

export default NewQuestion;

