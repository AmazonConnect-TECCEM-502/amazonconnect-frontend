import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductList = (props) => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      //const productsData = await fetch("http://3.80.44.247:3000/sales/getRecommendedProducts/1/1");
      const productsData = await fetch(`http://localhost:8080/sales/getRecommendedProducts/${props.client_id}/${props.category_id}`);
      const jsonProducts = await productsData.json();

      setProducts(jsonProducts[0]);
    };
    fetchData();
  }, []);

  const displayAvailableProducts = async () => {
    // this function will allow us to display the available products on another card
    console.log("Entre");
  }

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {products.map(product => {
        return(
          <div className="categorys">
            <button type="text" onClick={displayAvailableProducts}>{product.product_name}</button>
          </div>
        )
      })}
      <button>back</button>
      
    </Fragment>
  );
};

export default ProductList;