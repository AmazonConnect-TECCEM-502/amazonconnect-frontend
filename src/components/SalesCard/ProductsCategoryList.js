import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductsCategoryList = () => {
  const [products, setProducts] = useState([]);
  const [activeLink, setActiveLink] = useState(0);

  // useEffect will be used so before the component is created it fetch the data from our back
  useEffect(() => {
    const fetchData = async () => {
      // const productsData = await fetch('http://3.80.44.247:3000/problem/getProblemCategorys');
      const productsData = await fetch(
        "http://localhost:8080/sales/getProductCategories"
      );
      const jsonProducts = await productsData.json();

      setProducts(jsonProducts);
    };
    fetchData();
  }, []);

  const displayAvailableProducts = async (id) => {
    // this function will allow us to display the available products on another card
    const data = {
      category_id: id,
    };
    console.log(JSON.stringify(data), "Product");
  };

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {products.map((product) => {
        return (
          <div className="categorys">
            <button
              type="text"
              className={
                activeLink === product.category_id && "categorys-active"
              }
              onClick={() => {
                setActiveLink(product.category_id);
                displayAvailableProducts(product.category_id);
              }}
            >
              {product.category_name}
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductsCategoryList;
