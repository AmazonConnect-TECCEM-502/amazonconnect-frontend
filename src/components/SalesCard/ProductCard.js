import { Fragment } from "react";
import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';
import { useState } from "react";


const ProductCard = (props) => {

  const [productKey, setKey] = useState('internet');
  const [productsArr, setProducts] = useState(props.products[productKey]);

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
    //console.log(productKey);
    setProducts(props.products[productKey]);
  };
  
  return(
    <div className="product-card">
        <div className="product-header">
          <img src = {require(`../../images/sales/${productsArr.image}.jpg`)} alt = "Product" />
          <div>
            <p className="product-name">{productsArr.name}</p>
            <p className="product-price">Price: {productsArr.price} $</p>
            <button className="add-button">Add</button>
            <button onClick={NextButton}>{productKey}</button>
          </div>
        </div>
        <p className="product-description"> {productsArr.desc} </p>
      
    </div>
  )
    /*return(
        
        <div className="product-card">
            <Fragment>
              <div>
                <img src={props.img} />
                <ProductImage image = {props.image} />
                <ProductName name = {props.name} />
                <ProductPrice price = {props.price} />
              </div>
              <ProductDescription desc = {props.desc} />
            
            </Fragment>
        </div>
        
    );*/
};

export default ProductCard;
