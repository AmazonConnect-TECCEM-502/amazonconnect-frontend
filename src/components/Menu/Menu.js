import { Fragment } from "react";
import Element from "./Element";
import "../../style/Menu/Menu.css"

const Menu = () =>{
    return(
        <Fragment>
            <p className="title"> Menu </p>
            <div className="elements-container">
                <Element element = "Q & A"/>
                <Element element = "Client ID" input = {<input className="input-ID" type="text" name="ID"/>}/>
            </div>
        </Fragment>
    )
};

export default Menu;