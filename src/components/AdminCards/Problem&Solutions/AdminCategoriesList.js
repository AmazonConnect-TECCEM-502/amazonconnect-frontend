/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 
*/
import { Fragment, useEffect, useState} from "react";
import AdminCategory from "./AdminCategory";



const AdminCategoriesList = (props) => {
  const [Categories, setCategories] = useState([])

  useEffect(() => {
    console.log("Descargando datos...");
    fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/getCategories`)
      .then((response) => response.json())
      .then((data) => {
        const categories = data;
        setCategories(categories);
      })
  }, []);


  return (
    <Fragment>
      <p className="title">Categories</p>
      <div className="container-questions">
        {Categories.map((category, index) => (
          <AdminCategory text={category.category_name} category_id={category.category_id} key={index}/>
        ))}
        {Categories.length === 0 && <p>No Problems</p>}
      </div>
    </Fragment>
  );
};

export default AdminCategoriesList;