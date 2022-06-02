import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductsCategoryList = (props) => {
  const [products, setProducts] = useState([]);

  // useEffect will be used so before the component is created it fetch the data from our back
  useEffect(() => {
    const fetchData = async () => {
      // const productsData = await fetch('http://3.80.44.247:8080/problem/getProductCategories');
      const productsData = await fetch(`${props.backend}/sales/getProductCategories`);
      const jsonProducts = await productsData.json();

      setProducts(jsonProducts);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {products.map((product) => {
        return (
          <div className="categorys">
            <button
              type="text"
              onClick={() => {
                props.buttonAction(product.category_id);
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
