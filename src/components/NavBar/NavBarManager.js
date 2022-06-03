import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import DropDownManager from "./DropDownManager";

const NavBarManager = () => {
  const [userPopup, setUserPopup] = useState(false);

  useEffect(() => {
    document.body.addEventListener("click", userPopupState);
  });

  const userPopupState = (event) => {
    event.stopPropagation();
    if(userPopup && !event.target.closest("#u-settings")){
      setUserPopup(false);
    } else if(!userPopup && event.target.closest("#u-settings")){
      setUserPopup(true);
    }
  };

  const NavBarOptions = [
    {
      title: "Home",
      url: "/manager/home",
      cName: "nav-links",
    },
    {
      title: "Overview",
      url: "/manager/overview",
      cName: "nav-links",
    },
    {
      title: "Agent Dashboards",
      url: "/manager/dashboard",
      cName: "nav-links",
    },
    {
      title: "Calls",
      url: "/manager/calls",
      cName: "nav-links",
    }
  ];

  return (
    <div>
      <nav className="navbar">
        <img src={require("../../images/TelmexLogo.jpg")} alt="logoTelmex" />
        <ul className="nav-menu">
          {NavBarOptions.map((props, index) => {
            return (
              <li>
                <Link to={props.url} className={props.cName}>{props.title}</Link>
              </li>
            );
          })}
          <BsEye className="icons" />

          <AiOutlineUser id="u-settings" className="icons" onClick={userPopupState} />
        </ul>
      </nav>
      {userPopup && <DropDownManager />}
    </div>
  );
};

export default NavBarManager;