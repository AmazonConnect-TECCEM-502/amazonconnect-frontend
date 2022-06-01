import axios from "axios";
import { useEffect, useState } from "react";
import AddButton from "./addButton";
import addButton from "./addButton";

const ProductCard = (props) => {

  const [product, setProduct] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      //const productsData = await fetch(`http://3.80.44.247:8080/sales/getProduct/${props.product_id}`);
      const productData = await fetch(`http://localhost:8080/sales/getProduct/${props.product_id}`);
      const jsonProduct = await productData.json();

      setProduct(jsonProduct);
    };
    fetchData();
  });

  return(
    <div className="product-card">
        <div className="product-header">
          <img src = {require(`../../images/sales/ejemploTelmex.jpg`)} alt = "Product" />
          <div>
            <p className="product-name">{product.product_name}</p>
            <p className="product-price">Price: {product.price} $</p>
            <button className="back-button-product" onClick={props.buttonAction}>Back</button>{" "}
            <AddButton client_id ={props.client_id} product_id= {props.product_id}/>
          </div>
        </div>
        <p className="product-description"> {product.product_desc} </p>

    </div>
  )
};

export default ProductCard;
