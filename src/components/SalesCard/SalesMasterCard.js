import ProductCard from "./ProductCard";
import { useState } from "react";
import ProductList from "./ProductList";
import ProductsCategoryList from "./ProductsCategoryList";

const SalesMasterCard = (props) => {

    const ProductInfo = () => {
        return (
            <ProductCard
                products={{
                  internet: {
                    image: "ejemploTelmex",
                    name: "Internet plan",
                    price: "100",
                    desc: "Un plan de servicio de Internet con una velocidad de 50 megas.",
                  },
                  TV: {
                    image: "ejemploTelmex",
                    name: "TV plan",
                    price: "150",
                    desc: "Un plan de servicio de TV con 100 canales.",
                  },
                  mobile: {
                    image: "ejemploTelmex",
                    name: "Mobile roaming plan",
                    price: "200",
                    desc: "Un plan de datos celulares con un limite de consumo de ancho de banda de 1 gigabyte.",
                  },
                }}
              />
        );
    };

    const [stateKey, setStateKey] = useState();
    

    return (
        <div>
            <ProductsCategoryList />
        </div>

    );
};

export default SalesMasterCard;