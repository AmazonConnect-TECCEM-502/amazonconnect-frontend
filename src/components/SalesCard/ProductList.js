import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //const productsData = await fetch(`http://3.80.44.247:8080/sales/getRecommendedProducts/${props.client_id}/${props.category_id}`);
      const productsData = await fetch(`http://localhost:8080/sales/getRecommendedProducts/${props.client_id}/${props.category_id}`);
      const jsonProducts = await productsData.json();

      setProducts(jsonProducts);
    };
    fetchData();
  });

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {products.map(product => {
        return(
          <div className="categorys">
            <button type="text" onClick={() => {props.buttonAction(product.product_id)}}>{product.product_name}</button>
          </div>
        )
      })}
      <button onClick={props.backAction}>back</button>

    </Fragment>
  );
};

export default ProductList;
