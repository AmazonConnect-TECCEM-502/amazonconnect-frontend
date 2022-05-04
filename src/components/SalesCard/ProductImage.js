/*
Author: Renata de Luna
Description: Component for product image included in porduct card
*/

const ProductImage = (props) => {
    return (
        <img src = {require(`../../images/${props.image}.jpg`)} alt = "Product" />
    );
};

export default ProductImage;