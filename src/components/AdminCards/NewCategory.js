import { Fragment } from "react";

const NewCategory = (props) => {
    return( 
      <Fragment>
          <div>
          <div className="title"> Create Category </div>
          <div className="new">
                <p>Name: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Description: </p>
                <input className="user-ID" type="text" name="Answer" />
                <br/>
                <button className="btn-main"> Submit </button>
          </div>
          </div>

      </Fragment>
    );
};

export default NewCategory