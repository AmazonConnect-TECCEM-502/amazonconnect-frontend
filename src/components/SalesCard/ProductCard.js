import AddButton from "./addButton";

const ProductCard = (props) => {

  return(
    <div className="product-card">
        <div className="product-header">
          <img src = {require(`../../images/sales/ejemploTelmex.jpg`)} alt = "Product" />
          <div>
            <p className="product-name">{props.product.product_name}</p>
            <p className="product-price">Price: {props.product.price} $</p>
            <button className="back-button-product" onClick={props.buttonAction}>Back</button>{" "}
            <AddButton client_id={props.client_id} product_id={props.product.product_id}/>
          </div>
        </div>
        <p className="product-description"> {props.product.product_desc} </p>

    </div>
  )
};

export default ProductCard;
