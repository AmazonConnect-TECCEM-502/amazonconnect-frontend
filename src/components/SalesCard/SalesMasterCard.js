/*
  Authors: Omar Rodrigo Sorchini Puente
           Javier Emilio Moreno Márquez 
           Renata De Luna Flores
           
  Description: Master component that decides which view is provided to the Agent.
  The route goes like this...
  
  ProductCategoryList <-> ProductList <-> ProductCard
*/

import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { ClientContext } from "../ClientCard/ClientProvider";
import ConfirmCard from "./ConfirmCard";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import ProductsCategoryList from "./ProductsCategoryList";

const SalesMasterCard = () => {

    const backend = process.env.REACT_APP_BACKEND_URL;

    const [
      clientID, , , , , , , , , , , , , , , , , ] = useContext(ClientContext);

    const Views = {
      CATEGORIES : 1,
      PRODUCTS : 2,
      PRODUCT : 3,
      CONFIRM: 4
    };

    const [currentView, setCurrentView] = useState(Views.CATEGORIES);
    const [currentCategory, setCurrentCategory] = useState();
    const [currentProduct, setCurrentProduct] = useState();

    //const client_id = clientID;
    //const client_id = 1;
    //console.log("CLIENT ID: " + client_id);

    const goToProducts = async (client_id, category_id) => {
      if (client_id) {
        const productsData = await fetch(`${backend}/sales/getRecommendedProducts/${client_id}/${category_id}`);
        if (productsData.status === 200) {
          const jsonProducts = await productsData.json();
          setCurrentCategory(jsonProducts);
          setCurrentView(Views.PRODUCTS);
        }
        else if (productsData.status === 400) {
          toast.error(productsData);
        }
        else {
          toast.error(`Server responded with status ${productsData.status}`);
        }
      }
      else {
        toast.error("No client identified at the moment.")
      }
    };

    const goToProduct = async (product_id) => {
      const productData = await fetch(`${backend}/sales/getProduct/${product_id}`);
      const jsonProduct = await productData.json();
      setCurrentProduct(jsonProduct);
      setCurrentView(Views.PRODUCT);
    };

    const goToConfirm = () => {
      setCurrentView(Views.CONFIRM);
    };

    const backToCategories = () => {
      setCurrentView(Views.CATEGORIES);
    };

    const backToProducts = () => {
      setCurrentView(Views.PRODUCTS);
    };

    const backToProduct = () => {
      setCurrentView(Views.PRODUCT);
    }

    const buyProduct = async (productID, clientID) => {
      const request_options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: productID,
          client_id: clientID,
        }),
      };
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/sales/buyProduct`, request_options);
      if (response.status === 200) {
        toast.success(`Product was added to client ${clientID}`);
        backToCategories();
      }
      else if (response.status === 400) {
        toast.error(response);
      }
      else {
        toast.error(`Server responded with status ${response.status}`);
      }
    };

    if (currentView === Views.CATEGORIES)
      return (<ProductsCategoryList backend={backend} client_id={clientID} buttonAction={goToProducts}/>)
    else if (currentView === Views.PRODUCTS)
      return (<ProductList products={currentCategory} buttonAction={goToProduct} backAction={backToCategories}/>)
    else if (currentView === Views.PRODUCT)
      return (<ProductCard product={currentProduct} client_id={clientID} backAction={backToProducts} buttonAction={goToConfirm}/>);
    else if (currentView === Views.CONFIRM)
      return (<ConfirmCard product={currentProduct} client_id={clientID} backAction={backToProduct} buttonAction={buyProduct} afterAction={backToCategories} />);
};

export default SalesMasterCard;
