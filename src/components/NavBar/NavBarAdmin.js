import React, { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import DropDownAdmin from "./DropDownAdmin";

const NavBarAdmin = () => {
  const [userPopup, setUserPopup] = useState(false);

  const userPopupState = () => {
    setUserPopup(!userPopup);
  };

  const NavBarOptions = [
    {
      title: "Home",
      url: "/admin/home",
      cName: "nav-links",
    },
    {
        title: "Configuration",
        url: "/admin/configuration",
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

          <AiOutlineUser className="icons" onClick={userPopupState} />
        </ul>
      </nav>
      {userPopup && <DropDownAdmin />}
    </div>
  );
};

export default NavBarAdmin;