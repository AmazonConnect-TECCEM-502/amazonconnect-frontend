import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";

const NewProduct = (props) => {

  const [categories, setCategories] = useState([]);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [category, setCategory] = useState("");


    const createProduct = async () => {

      if ((sku && name && description && price && stock && category) !== ''){
      const request_options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          product_sku: sku.toString(),
          product_name: name.toString(),
          product_description: description.toString(),
          price: price.toString(),
          stock: stock.toString(),
          category: category.toString()
        })};
     await fetch(`http://localhost:8080/sales/createProduct`, request_options);
      const card = document.getElementById("card-6");
      card.style.display = "none";
      toast.success("New Product created")
    }else{
      toast.error("All fields must be filled")
    }
  };

    useEffect(() => {
      const fetchData = async () => {
        const categoriesData = await fetch(
          "http://localhost:8080/sales/getProductCategories"
        );
        const jsonCategories = await categoriesData.json();

        setCategories(jsonCategories);
      };

      fetchData();
    }, []);

    const changeSku = (event) => {
      setSku(event.target.value);
    };
    const changeName = (event) => {
      setName(event.target.value);
    };
    const changeDescription = (event) => {
      setDescription(event.target.value);
    };
    const changePrice = (event) => {
      setPrice(event.target.value);
    };
    const changeStock = (event) => {
      setStock(event.target.value);
    };
    const changeCategory = (event) => {
      setCategory(event.target.value);
    };

    return( 
      <Fragment>
          <div className="title"> Create Product </div>
          <div className="new">
            <form >
                <p>SKU: </p>
                <input className="user-ID" type="text" name="Answer" onChange={changeSku}/>
                <p>Name: </p>
                <input className="user-ID" type="text" name="Answer" onChange={changeName}/>
                <p>Description: </p>
                <input className="user-ID" type="text" name="Answer" onChange={changeDescription}/>
                <p>Price: </p>
                <input className="user-ID" type="text" name="Answer" onChange={changePrice}/>
                <p>Stock: </p>
                <input className="user-ID" type="text" name="Answer" onChange={changeStock}/>
                <p>Product Category</p>
                <input className="user-ID" type="text" name="Answer" onChange={changeCategory}/>
                <p>Available Product Categories</p>
                {categories.map((problem) => {
                  return (
                    <div className="categorys">
                        {problem.category_name}{" ID: "}{problem.category_id}
                    </div>
                  );
                })}
                <p>Image: </p>
                <input className="user-ID" type="text" name="Answer" />
                <button className="btn-main" onClick={createProduct} > Submit </button>
            </form>
          </div>
      </Fragment>
    );
};

export default NewProduct