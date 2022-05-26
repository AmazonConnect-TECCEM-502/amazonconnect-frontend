import { Fragment } from "react";
import Element from "./Element";

const Menu = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <Element element="Problems" elementID="problems" />
        <Element element="Client Info" elementID="client" />
      </div>
    </Fragment>
  );
};

export default Menu;
