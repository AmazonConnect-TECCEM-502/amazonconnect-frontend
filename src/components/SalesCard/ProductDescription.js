/*
Author: Renata de Luna
Description: Component for product description included in porduct card
*/

const ProductDescription = (props) => {
    return (
        <div className = "product-description">
          <p>{props.desc}</p>
        </div>
    );
};

export default ProductDescription;