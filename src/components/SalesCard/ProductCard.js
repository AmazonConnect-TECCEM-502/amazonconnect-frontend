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
        <Fragment>
        <div className="product-card">
            <div class="clearfix">
              <ProductImage image = {props.image} />
                <ProductName name = {props.name} />
                <ProductPrice price = {props.price} />
                <ProductDescription desc = {props.desc} />
            </div>

        </div>
        </Fragment>
    )
}

export default ProductCard;
