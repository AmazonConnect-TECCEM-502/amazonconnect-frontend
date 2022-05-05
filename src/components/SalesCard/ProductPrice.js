/*
Author: Renata de Luna 
Description: Component for prodcut price included in product card
*/

const ProductPrice = (props) => {
    return (
        <div className = "product-price">
          <p className="price-fomat">{props.price}</p>
        </div>
    );
};

export default ProductPrice;