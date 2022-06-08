/*
  Authors: Omar Rodrigo Sorchini Puente
           Javier Emilio Moreno Márquez 
           
  Description: Component that permits the Administrator the creation of a new product. 
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
            <button className="back-button-product" onClick={props.buttonAction}>Back</button>{" "}
            <AddButton client_id={props.client_id} product_id={props.product.product_id}/>
          </div>
        </div>
        <p className="product-description"> {props.product.product_description} </p>
    </div>
  )
};

export default ProductCard;
