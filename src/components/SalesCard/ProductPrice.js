/*
Author: Renata de Luna 
Description: Component for prodcut price included in product card
*/

const ProductPrice = (props) => {
    return (
        <div className = "product-price">
          {props.text}
        </div>
    );
};

export default ProductPrice;