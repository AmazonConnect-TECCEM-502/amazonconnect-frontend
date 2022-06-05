import SearchBar from "../AgentCards/SearchBar";
import { Fragment, useEffect, useState } from "react";

const ProductsCategoryList = (props) => {
  const [categories, setCategories] = useState([]);

  // useEffect will be used so before the component is created it fetch the data from our back
  useEffect(() => {
    const fetchData = async () => {
      // const productsData = await fetch('http://3.80.44.247:8080/problem/getProductCategories');
      // const productsData = await fetch(`${props.backend}/sales/getProductCategories`); // This line gives a warning 
      const productsData = await fetch(`localhost:8080/sales/getProductCategories`);
      const jsonProducts = await productsData.json();

      setCategories(jsonProducts);
    };
    fetchData();
  }, []);

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {categories.map((category) => {
        return (
          <div className="categorys" key={category.category_id}>
            <button
              type="text"
              onClick={() => {
                props.buttonAction(category.category_id);
              }}
            >
              {category.category_name}
            </button>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductsCategoryList;
