import { useContext, useState } from "react";
import { ClientContext } from "../ClientCard/ClientProvider";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import ProductsCategoryList from "./ProductsCategoryList";

const SalesMasterCard = () => {
  const [clientID, , , , , , , , , , , , , ] = useContext(ClientContext);

    const Views = {
      CATEGORIES : 1,
      PRODUCTS : 2,
      PRODUCT : 3
    };

    const [currentView, setCurrentView] = useState(Views.CATEGORIES);
    const [currentCategory, setCurrentCategory] = useState();
    const [currentProduct, setCurrentProduct] = useState();
 
    const client_id = clientID;
    console.log("CLIENT ID: " + client_id);

    const goToProducts = (category_id) => {
      setCurrentCategory(category_id);
      setCurrentView(Views.PRODUCTS);
    };

    const goToProduct = (product_id) => {
      setCurrentProduct(product_id);
      setCurrentView(Views.PRODUCT);
    };

    const backToProducts = () => {
      setCurrentView(Views.PRODUCTS);
    };

    const backToCategories = () => {
      setCurrentView(Views.CATEGORIES);
    };

    if (currentView === Views.CATEGORIES)
      return (<ProductsCategoryList buttonAction={goToProducts}/>)
    else if (currentView === Views.PRODUCTS) 
      return (<ProductList client_id={client_id} category_id={currentCategory} buttonAction={goToProduct} backAction={backToCategories}/>) 
    else if (currentView === Views.PRODUCT) 
      return (<ProductCard product_id={currentProduct} client_id={client_id} buttonAction={backToProducts}/>);
};

export default SalesMasterCard;