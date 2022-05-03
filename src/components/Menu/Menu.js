import { Fragment } from "react";
import Element from "./Element";
import "../../style/Menu/Menu.css"

const Menu = () =>{
    return(
        <Fragment>
            <p className="title"> Menu </p>
            <div className="elements-container">
                <Element element = "Q & A"/>
                <Element element = "Client ID"/>
            </div>
        </Fragment>
    )
};

export default Menu;