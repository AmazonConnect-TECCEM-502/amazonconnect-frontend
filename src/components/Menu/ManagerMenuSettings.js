import { Fragment } from "react";
import Element from "./Element"

const MenuSettings = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <Element element="Create Q & A" elementID="cqna"/>
        <Element element="Update Q & A" elementID="cqna"/>
        <Element element="Create User" elementID="cqna"/>
        <Element element="Create Product" elementID="cqna"/>
        <Element element="Update Product" elementID="cqna"/>
      </div>
    </Fragment>
  );
};

export default MenuSettings;
