import SearchBar from "../AgentCards/SearchBar";
import { Fragment } from "react";

const ProductList = (props) => {

  return (
    <Fragment>
      <p className="title"> Products by category</p>
      <SearchBar SearchType="preguntas" />
      {props.products.map(product => {
        return(
          <div className="categorys">
            <button type="text" onClick={() => {props.buttonAction(product.product_id)}}>{product.product_name}</button>
          </div>
        )
      })}
      <button className="back-button" onClick={props.backAction}>Back</button>

    </Fragment>
  );
};

export default ProductList;
