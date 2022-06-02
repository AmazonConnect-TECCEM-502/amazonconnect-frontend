import { Fragment } from "react";

const NewProduct = (props) => {
    return( 
      <Fragment>
          <div className="title"> Create Product </div>
          <div className="new">
                <p>ID: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Name: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Description: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Price: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Stock: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Image: </p>
                <input className="user-ID" type="text" name="Answer" />
                <br/>
                <button className="buttonSubmit"> Submit </button>
          </div>
      </Fragment>
    );
};

export default NewProduct