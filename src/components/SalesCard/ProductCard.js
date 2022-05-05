import { Fragment } from "react";
//import Tarjeta from "./Tarjeta";

/*const productos = [{title: "producto1",
                    desc: "la desc"},
                    {title: "producto2",
                    desc: "la desc"},
                    {title: "producto3",
                    desc: "la desc"},
                ];

/*const ProductCard = (props) => {
  return (
    <Tarjeta
      componente={productos.map((producto) => (
        <Fragment>
          <h1>{producto.title}</h1>
          <p>{producto.desc}</p>
        </Fragment>
      ))}
    />
  );
};

export default ProductCard; */


import ProductImage from './ProductImage';
import ProductName from './ProductName';
import ProductPrice from './ProductPrice';
import ProductDescription from './ProductDescription';

const ProductCard = (props) => {
  return(
    <div className="product-card">
        <div className="product-info">
          <img src = {require(`../../images/sales/${props.image}.jpg`)} alt = "Product" />
          <p className="product-name">{props.name}</p>
          <p className="product-price">Price:</p><p className="product-price">{props.price} $</p>
          <br/>
          <button>Add</button>
        </div>
        <p className="product-description"> {props.desc} </p>
      
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
