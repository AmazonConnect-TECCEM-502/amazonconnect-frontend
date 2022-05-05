/*
Author: María Fernanda Ramirez Barragán

Navbar functionality 
*/

import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import DropDown from "./DropDown";

const NavBar = () => {
  const [userPopup, setUserPopup] = useState(false);

  const userPopupState = () => {
    setUserPopup(!userPopup);
  };

  const NavBarOptions = [
    {
      title: "Home",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Statistics",
      url: "#",
      cName: "nav-links",
    },
    {
      title: "Capacitations",
      url: "#",
      cName: "nav-links",
    },
  ];

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
