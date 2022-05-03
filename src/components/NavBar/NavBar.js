import React, { useState } from "react";
import "../../style/NavBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { NavBarOptions } from "./NavBarOptions";
import "../../style/NavBarOptions.css";
import DropDown from "./DropDown";

const NavBar = () => {
  const [userPopup, setUserPopup] = useState(false);

  const userPopupState = () => {
    setUserPopup(!userPopup);
  };

  return (
    <div>
      <nav className="navbar">
        <img src={require("../../images/TelmexLogo.jpg")} alt="logoTelmex" />
        <ul className="nav-menu">
          {NavBarOptions.map((props, index) => {
            return (
              <li>
                <a className={props.cName} href={props.url}>
                  {props.title}
                </a>
              </li>
            );
          })}
          <BsEye className="icons" />

          <AiOutlineUser className="icons" onClick={userPopupState} />
        </ul>
      </nav>
      {userPopup && <DropDown />}
    </div>
  );
};

export default NavBar;
