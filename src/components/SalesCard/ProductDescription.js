/*
Author: Renata de Luna
Description: Component for product description included in porduct card
*/

const ProductDescription = (props) => {
    return (
        <div className = "product-description">
          {props.text}
        </div>
    );
};

export default ProductDescription;