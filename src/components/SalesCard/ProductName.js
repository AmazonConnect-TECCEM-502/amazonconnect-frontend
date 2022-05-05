/*
Author: Renata de Luna
Description: Component for product name.
*/

const ProductName = (props) => {
    return(
        <div className="product-name">
            <p>{props.name}</p>
        </div>
    );
}; 
export default ProductName;