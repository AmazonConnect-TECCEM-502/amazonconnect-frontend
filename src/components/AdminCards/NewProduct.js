import { Fragment, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import ProductImageInput from "./ProductImageInput";

const NewProduct = (props) => {

  const [categories, setCategories] = useState([]);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price,setPrice] = useState("");
  const [stock,setStock] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState();
  const [useImage,setUseImage] = useState(false);


  const createProduct = async () => {
    if ((sku && name && description && price && stock && category) !== '') {
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
        const response = await fetch(`http://localhost:8080/sales/createProduct`, request_options);
        if (response.status === 400) {
          toast.error("A product with this sku already exists")
        }
        else if (response.status === 200) {
          if (categoryAtUpload > 3 && categoryAtUpload <= 6) await getUrl();
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

  var dataUriNoState = "";

  const getImageD =  async (file) => {
    setUseImage(true)
    if (file){

    }
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

  return( 
    <Fragment>
      <div className="title"> Create Product </div>
      <div className="new">
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
        <p>Available Product Categories</p>
        {categories.map((category) => {
          return (
            <div className="categorys">
                {category.category_name}&nbsp;&nbsp;&nbsp;&nbsp;{"ID: "}{category.category_id}
            </div>
          );
        })}
        <p>Product Category</p>
        <input className="user-ID" type="text" name="Answer" onChange={changeCategory}/>
        <ProductImageInput category={category} maxCategoryId={categories.length} buttonAction={getImageD}/>
        <button className="btn-main" onClick={createProduct}> Submit </button>
      </div>
    </Fragment>
  );
};

export default NewProduct