/*
  Author: Diego Armando Ulibarri Hernández
  
  Description: Component that show a list with all
  the categorys of products
*/
import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductsCategoryList = () => {
  const [products, setProducts] = useState([]);
  
  // useEffect will be used so before the component is created it fetch the data from our back
  useEffect(() => {
    const fetchData = async () => {
      // const productsData = await fetch('http://3.80.44.247:3000/problem/getProblemCategorys');
      const productsData = await fetch('http://localhost:8080/product/getProductsCategorys');
      const jsonProducts = await productsData.json();
      
      setProducts(jsonProducts);
    }
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
            <button type="text" onClick={displayAvailableProducts}>{product.category_name}</button>
          </div>
        )
      })}
      
    </Fragment>
  );
};

export default ProductsCategoryList;
