/*
  Authors: Omar Rodrigo Sorchini Puente
            Javier Emilio Moreno Márquez
  Description: Component that permits the Administrator the creation of a new product.
*/

import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import ProductImageInput from "./ProductImageInput";

const UpdateProduct = (props) => {

  /*
    State vars:
    categories: A json that has all the available cateogries for the products
    sku: An integer id that is used for each product
    name: A string containing the complete name of the product
    description: A string containing the complete description of the product
    price: A number containing the price of the product
    stock: A number containing the stock available for the product
    category: A string containig the category in which the product is contained
    image: An image file for the product
    useImage: A statement that determines if a image is deployed
  */

  const [categories, setCategories] = useState([]);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();
  const [useImage,setUseImage] = useState(false);
  const [skuValidated, setSkuValidated] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState();
  const [prevCategory, setPrevCategory] = useState();


  const createProduct = async () => {
    if ((sku && name && description && price && stock && category) !== '') {
      if (typeof(sku) === "number" && typeof(name) === "string" && typeof(description) === "string" && typeof(price) === "number" && typeof(stock) === "number" && typeof(category) === "number") {
        if (category >= 1 && category <= categories.length) {
          const categoryAtUpload = category;
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
          const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sales/createProduct`, request_options);
          if (response.status === 400) {
            toast.error("A product with this sku already exists")
          }
          else if (response.status === 200) {
            if (categoryAtUpload > 3 && categoryAtUpload <= 6)
              await getUrl();
            const card = document.getElementById("card-8");
            card.style.display = "none";
            toast.success("New Product created")
          }
          else {
            toast.error(`Server responded with status ${response.status}`)
          }
        }
        else {
          toast.error("Please provide a valid category id")
        }
      }
      else {
      toast.error("One or more fields have incorrect input datatypes")
      }
    }
    else {
      toast.error("All fields must be filled")
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const categoriesData = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/sales/getProductCategories`
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

  var dataUriNoState = "";

  const getImageD =  async (file) => {
    setUseImage(true)
    if (file) {
      console.log(file);
      const fileToDataUri = (file) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          resolve(event.target.result)
        };
        reader.readAsDataURL(file);
        })

      await fileToDataUri(file)
        .then((fileb64) => {
          dataUriNoState = fileb64.split(',')[1].toString()
        })

      console.log("dataUriNoState " ,dataUriNoState)

      const base64 = dataUriNoState
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i); //infomracion en BIN
      }
      console.log(bytes.buffer)
      setImage(bytes.buffer)
    }
  }

  const getUrl = async () => {
    if (useImage && sku.length !== 0) {
      console.log("img:",image)
      const file = new File([image], sku, {type: 'image/jpg', lastModified:Date.now()})

      const response = await axios({
        url:'https://g6fpu8h62l.execute-api.us-east-1.amazonaws.com/default/image-user-lamda-2-0?pet=sales/'+sku,
        method: 'GET'
      });
      console.log(response.data)

      if (response.status === 200) {
        const uploaded = await fetch(response.data.uploadURL, {
          method: "PUT",
          body: file,
        });
        if (uploaded.status === 200) {
          console.log("Imagen subida a S3");
        } else {
          console.log("Error al subir imagen");
        }
      }
      else {
      console.log("Error al obtener el link de subida");
      }
    }
  };

  const validateSku = async (sku) => {
    const sku_response = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/sales/validateSku/${sku}`
    );
    if (sku_response.status === 200) {
      //await fetchProduct(sku);
      setProductToUpdate(await sku_response.product.json());
      setPrevCategory(await sku_response.category_id.json());
      setSkuValidated(true);
    }
    else if (sku_response.status === 400) {
      toast.error("No product was found with the given sku");
      setSkuValidated(false);
    }
    else {
      toast.error(`Server responded with status ${sku_response.status}`);
      setSkuValidated(false);
    }
  }

  const updateProduct = async (name, description, price, stock, category) => {
    let body = {};
    if (name !== productToUpdate.product_name) {
      body['product_name'] = name;
    }
    if (description !== productToUpdate.product_description) {
      body['product_description'] = description;
    }
    if (price !== productToUpdate.price) {
      body['price'] = price;
    }
    if (stock !== productToUpdate.stock) {
      body['stock'] = stock;
    }
    if (category !== prevCategory) {
      body['category_id'] = category;
    }
    if (body.length > 0) {
      const request_options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sales/updateProduct`, request_options);
      if (response.status === 200) {
        if (file) {
        await getUrl();
        }
        const card = document.getElementById("card-8");
        card.style.display = "none";
        toast.success('Product updated successfully');
      }
      else {
        toast.error(`Server responded with status ${response.status} while updating product`);
      }
    }
  }

  if (skuValidated)
  return(
    <Fragment>
      <div className="title"> Create Product </div>
      <div className="new">
        <p>Name: </p>
        <input className="user-ID" type="text" name="Answer" placeholder={productToUpdate.product_name} onChange={changeName}/>
        <p>Description: </p>
        <input className="user-ID" type="text" name="Answer" placeholder={productToUpdate.product_description} onChange={changeDescription}/>
        <p>Price: </p>
        <input className="user-ID" type="text" name="Answer" placeholder={productToUpdate.price} onChange={changePrice}/>
        <p>Stock: </p>
        <input className="user-ID" type="text" name="Answer" placeholder={productToUpdate.stock} onChange={changeStock}/>
        <p>Available Product Categories</p>
        {categories.map((category) => {
          return (
            <div className="categorys" key={category.category_id}>
                {category.category_name}&nbsp;&nbsp;&nbsp;&nbsp;{"ID: "}{category.category_id}
            </div>
          );
        })}
        <p>Product Category</p>
        <input className="user-ID" type="text" name="Answer" placeholder={prevCategory} onChange={changeCategory}/>
        <ProductImageInput category={category} maxCategoryId={categories.length} buttonAction={getImageD}/>
        <button className="btn-main" onClick={() => updateProduct(name, description, price, stock, category)}> Submit </button>
      </div>
    </Fragment>
  );
  else
      return(
          <Fragment>
            <p>Provide the sku of the product to be edited</p>
            <input className="user-ID" type="text" name="Answer" onChange={changeSku}/>
            <button className="btn-main" onClick={async () => await validateSku(sku)}> Submit </button>
          </Fragment>
        );
};

export default UpdateProduct;
