/*
  Authors: Omar Rodrigo Sorchini Puente
           Javier Emilio Moreno Márquez 
           Renata De Luna Flores
           
  Description: Component that shows the Agent the product selected. 
*/

import AddButton from "./addButton";
import ProductImage from "./ProductImage";

const ProductCard = (props) => {
  return(
    <div className="product-card">
        <div className="product-header">
          <ProductImage product_sku={props.product.product_sku}/>
          <div>
            <p className="product-name">{props.product.product_name}</p>
            <p className="product-price">Price: {props.product.price} $</p>
            <button className="back-button-product" onClick={props.backAction}>Back</button>{" "}
            <button className="product-header-add-button-UNUSED" onClick={props.buttonAction}>Add</button>
          </div>
        </div>
        <p className="product-description"> {props.product.product_description} </p>
    </div>
  )
};

export default ProductCard;
