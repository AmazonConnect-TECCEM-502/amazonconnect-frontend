import { Fragment } from "react";
import ElementConfiguration from "./ElementConfiguration"

const MenuConfiguration = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <ElementConfiguration element="Create Q & A" elementID="nqna"/>
        <ElementConfiguration element="Update Q & A" elementID="uqna"/>
        <ElementConfiguration element="Create User" elementID="nu"/>
        <ElementConfiguration element="Update User" elementID="uu"/>
        <ElementConfiguration element="Create Product" elementID="np"/>
        <ElementConfiguration element="Update Product" elementID="up"/>
        <ElementConfiguration element="Create Client" elementID="nc"/>
        <ElementConfiguration element="Create Category" elementID="nca"/>
      </div>
    </Fragment>
  );
};

export default MenuConfiguration;
