import { Fragment } from "react";
import Element from "./Element";

const Menu = () => {
  return (
    <Fragment>
      <p className="title"> Menu </p>
      <div className="elements-container">
        <Element element="Q & A" elementID="qna"/>
        <Element
          element="Client ID"
          elementID="client"
          input={<input className="input-ID" type="text" name="ID" />}
        />
      </div>
    </Fragment>
  );
};

export default Menu;
