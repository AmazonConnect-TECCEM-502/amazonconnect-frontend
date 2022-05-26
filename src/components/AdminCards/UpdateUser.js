import { Fragment } from "react";

const UpdateUser = (props) => {
    return( 
      <Fragment>
          <div className="title"> Update User</div>
          <div className="new">
                <p>User ID: </p>
                <input className="user-ID" type="text" name="Answer" />
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
                <div className="buttondelete">
                    <button className="buttonSubmit"> Make changes </button>
                    &nbsp;
                    <button className="buttonSubmit"> Delete </button>
                </div>
                
          </div>
      </Fragment>
    );
};

export default UpdateUser;