/*
  Authors: Omar Rodrigo Sorchini Puente
           Javier Emilio Moreno Márquez 
           Renata De Luna Flores
           
  Description: Component that shows the Agent the product selected. 
*/

import { BsArrowLeftShort } from "react-icons/bs";
import ProductImage from "./ProductImage";

const ProductCard = (props) => {
  return(
    <div className="product-card">
        <div className="product-header">
          <ProductImage product_sku={props.product.product_sku}/>
          <div>
            <p className="product-name">{props.product.product_name}</p>
            <p className="product-price">Price: {props.product.price} $</p>
            < BsArrowLeftShort onClick={props.backAction} />
            {/* <button className="back-button-product" onClick={props.backAction}>back</button>{" "} */}
            <button className="product-header-add-button-UNUSED" onClick={props.buttonAction}>Add</button>
          </div>
        </div>
        <p className="product-description"> {props.product.product_description} </p>
    </div>
  )
};

export default ProductCard;
