/*
  Author: Diego Armando Ulibarri Hernández
  
  Description: Component that show a list with all
  the categorys of products
*/
import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  
  // useEffect will be used so before the component is created it fetch the data from our back
  useEffect(() => {
    const fetchData = async () => {
       //const productsData = await fetch('http://3.80.44.247:3000/problem/getProblemCategorys');
      //const productsData = await fetch('http://localhost:8080/product/getProductsCategorys');
      //const productsData = await fetch('http://localhost:8080/sales/getRecommendedProducts');
      const json = {category_id : 1, client_id: 1}; // Cambiar el numero por el valor real del usuario
            console.log(JSON.stringify(json));
            const productsData = await fetch('http://localhost:8080/sales/getRecommendedProducts',{
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
            })
      const jsonProducts = await productsData.json();
      
      setProducts(jsonProducts[0]);
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
            <button type="text" onClick={displayAvailableProducts}>{product.product_name}</button>
          </div>
        )
      })}
      
    </Fragment>
  );
};

export default ProductList;