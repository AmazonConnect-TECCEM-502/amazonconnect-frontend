import { Fragment } from "react";
import Element from "./Element";

const Menu = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <Element element="Problems" elementID="problems" />
        <Element element="Client Info" elementID="client" />
        <Element element="Products" elementID="products" />
        <Element element="Recording" elementID="startRecording" />
        <Element element="KeyStroke" elementID="captureKeyStrokes" />
        <Element element="Amazon Connect" elementID="amazonConnect" />
      </div>
    </Fragment>
  );
};

export default Menu;
