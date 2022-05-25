import { Fragment } from "react";

const NewUser = (props) => {
    return( 
      <Fragment>
          <div className="title"> Create User </div>
          <div className="new">
                <p>First Name: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Last Name: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Email: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Type: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Manager ID: </p>
                <input className="user-ID" type="text" name="Answer" />
                <br/>
                <button className="buttonSubmit"> Submit </button>
          </div>
      </Fragment>
    );
};

export default NewUser;