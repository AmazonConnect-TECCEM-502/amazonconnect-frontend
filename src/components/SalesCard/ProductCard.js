import { useEffect, useState } from "react";


const ProductCard = (props) => {

  const [product, setProduct] = useState({});
  
  useEffect(() => {
    const fetchData = async () => {
      //const productsData = await fetch(`http://3.80.44.247:8080/sales/getProduct/${props.product_id}`);
      const productData = await fetch(`http://localhost:8080/sales/getProduct/${props.product_id}`);
      const jsonProduct = await productData.json();

      setProduct(jsonProduct);
      console.log(product);
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
            <button onClick={props.buttonAction}>Back</button>
            <button className="add-button">Add</button>
          </div>
        </div>
        <p className="product-description"> {product.product_desc} </p>

    </div>
  )
};

export default ProductCard;
