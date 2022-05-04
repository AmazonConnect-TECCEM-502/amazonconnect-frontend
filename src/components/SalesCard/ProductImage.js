/*
Author: Renata de Luna
Description: Component for product image included in product card
*/

const ProductImage = (props) => {
    return (
        <img src = {require(`../../images/sales/${props.image}.jpg`)} alt = "Product" />
    );
};

export default ProductImage;