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
        url: process.env.REACT_APP_IMAGE_UPLOAD_URL + 'sales/' + sku,
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
    const sku_response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sales/validateSku/${sku}`);
    //const sku_response = await fetch(`http://localhost:8080/sales/validateSku/${sku}`);
    if (sku_response.status === 200) {
      //await fetchProduct(sku);
      const responseData = await sku_response.json();
      setProductToUpdate(responseData.product);
      setPrevCategory(responseData.category.category_id);
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
    let changed = false;
    let imageChanged = false;
    if (name !== '' && name !== productToUpdate.product_name.toString()) {
      body['product_name'] = name;
      changed = true;
    }
    if (description !== '' && description !== productToUpdate.product_description.toString()) {
      body['product_description'] = description;
      changed = true;
    }
    if (price !== '' && price !== productToUpdate.price.toString()) {
      console.log(`prevprice: ${productToUpdate.price} newprice: ${price}`);
      body['price'] = price;
      changed = true;
    }
    if (stock !== '' && stock !== productToUpdate.stock.toString()) {
      body['stock'] = stock;
      changed = true;
    }
    if (category !== '' && category !== prevCategory.toString()) {
      body['category_id'] = category;
      changed = true;
    }
    if (image) {
      imageChanged = true;
    }
    if (changed) {
      body['product_id'] = productToUpdate.product_id;
      const request_options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sales/updateProduct`, request_options);
      //const response = await fetch(`http://localhost:8080/sales/updateProduct`, request_options);
      if (response.status === 200) {
        if (imageChanged) {
        await getUrl();
        }
        const card = document.getElementById("card-9");
        card.style.display = "none";
        toast.success('Product updated successfully');
      }
      else {
        toast.error(`Server responded with status ${response.status} while updating product`);
      }
    }
    else if (imageChanged) {
      await getUrl();
      const card = document.getElementById("card-16");
      card.style.display = "none";
      toast.success('Product image updated successfully');
    }
    else {
      toast.error('No changes were detected')
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
        <ProductImageInput category={prevCategory} maxCategoryId={categories.length} buttonAction={getImageD}/>
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
