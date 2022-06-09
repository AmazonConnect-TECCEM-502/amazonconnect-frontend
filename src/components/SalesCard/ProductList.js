/*
  Authors: Omar Rodrigo Sorchini Puente
           Javier Emilio Moreno Márquez 
           Renata De Luna Flores
           
  Description: Component that shows the Agent the product list from the category selected. 
*/

import { Fragment } from "react";

const ProductList = (props) => {

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      {props.products.map(product => {
        return(
          <div className="categorys" key={product.product_id}>
            <button type="text" onClick={() => {props.buttonAction(product.product_id)}}>{product.product_name}</button>
          </div>
        )
      })}
      <button className="back-button" onClick={props.backAction}>Back</button>

    </Fragment>
  );
};

export default ProductList;
