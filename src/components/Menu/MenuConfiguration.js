/*
  Authors: Andrea Vianey Diaz Alvarez
  Description: 
    Menu for the components in the admin configuration tab.
*/

import { Fragment } from "react";
import ElementConfiguration from "./ElementConfiguration"

const MenuConfiguration = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <ElementConfiguration element="Create P & S" elementID="nqna"/>
        <ElementConfiguration element="Update P & S" elementID="uqna"/>
        <ElementConfiguration element="Create User" elementID="nu"/>
        <ElementConfiguration element="Create Product" elementID="np"/>
        <ElementConfiguration element="Update Product" elementID="up"/>
        <ElementConfiguration element="Create Client" elementID="nc"/>
        <ElementConfiguration element="Create Category" elementID="nca"/>
      </div>
    </Fragment>
  );
};

export default MenuConfiguration;
