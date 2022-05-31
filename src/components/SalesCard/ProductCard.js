import { useState } from "react";


const ProductCard = (props) => {

  const [productKey, setKey] = useState('TV');
  const [productsArr, setProducts] = useState(props.products['internet']);

  const NextButton = (event) => {
    if (productKey === 'internet') {
      setKey('TV');
    }
    else if (productKey === 'TV') {
      setKey('mobile');
    }
    else if (productKey === 'mobile') {
      setKey('internet');
    }
    setProducts(props.products[productKey]);
  };

  return(
    <div className="product-card">
        <div className="product-header">
          <img src = {require(`../../images/sales/${productsArr.image}.jpg`)} alt = "Product" />
          <div>
            <p className="product-name">{productsArr.name}</p>
            <p className="product-price">Price: {productsArr.price} $</p>
            <button>Back</button>
            <button className="add-button">Add</button>
          </div>
        </div>
        <p className="product-description"> {productsArr.desc} </p>

    </div>
  )
};

export default ProductCard;
