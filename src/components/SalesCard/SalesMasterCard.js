import { useContext, useState } from "react";
import { ClientContext } from "../ClientCard/ClientProvider";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import ProductsCategoryList from "./ProductsCategoryList";

const SalesMasterCard = () => {

    const backend = "http://localhost:8080";
    //const backend = "http://3.80.44.247:8080";

    const [clientID, , , , , , , , , , , , , ] = useContext(ClientContext);

    const Views = {
      CATEGORIES : 1,
      PRODUCTS : 2,
      PRODUCT : 3
    };

    const [currentView, setCurrentView] = useState(Views.CATEGORIES);
    const [currentCategory, setCurrentCategory] = useState();
    const [currentProduct, setCurrentProduct] = useState();

    //const client_id = clientID;
    const client_id = 1;
    //console.log("CLIENT ID: " + client_id);

    const goToProducts = async (category_id) => {
      const productsData = await fetch(`${backend}/sales/getRecommendedProducts/${client_id}/${category_id}`);
      const jsonProducts = await productsData.json();
      setCurrentCategory(jsonProducts);
      setCurrentView(Views.PRODUCTS);
    };

    const goToProduct = async (product_id) => {
      const productData = await fetch(`${backend}/sales/getProduct/${product_id}`);
      const jsonProduct = await productData.json();
      setCurrentProduct(jsonProduct);
      setCurrentView(Views.PRODUCT);
    };

    const backToProducts = () => {
      setCurrentView(Views.PRODUCTS);
    };

    const backToCategories = () => {
      setCurrentView(Views.CATEGORIES);
    };

    if (currentView === Views.CATEGORIES)
      return (<ProductsCategoryList backend={backend} buttonAction={goToProducts}/>)
    else if (currentView === Views.PRODUCTS)
      return (<ProductList products={currentCategory} buttonAction={goToProduct} backAction={backToCategories}/>)
    else if (currentView === Views.PRODUCT)
      return (<ProductCard product={currentProduct} client_id={client_id} buttonAction={backToProducts}/>);
};

export default SalesMasterCard;
