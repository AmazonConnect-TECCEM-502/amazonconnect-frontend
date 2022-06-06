/*
  Authors: Diego Armando Ulibarri Hernández
  Description: Menu card that contains the elements of the cards
  that can be displayed

  Usage:
  <Menu />
*/
import { Fragment } from "react";
import Element from "./Element";

const Menu = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <Element element="Problems Sugestion" elementID="problems" />
        <Element element="Client Info" elementID="client" />
        <Element element="Products" elementID="products" />
        <Element element="Recording" elementID="startRecording" />
        <Element element="Amazon Connect" elementID="amazonConnect" />
      </div>
    </Fragment>
  );
};

export default Menu;
