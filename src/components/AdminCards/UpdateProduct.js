import { Fragment } from "react";

const UpdateProduct = (props) => {
    return( 
      <Fragment>
          <div className="title">
              <p>Update Product</p>
          </div>
          <div className="new">
                <p>Product ID: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Name: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Description: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Price: </p>
                <input className="user-ID" type="text" name="Answer" />
                <p>Stock: </p>
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

export default UpdateProduct;