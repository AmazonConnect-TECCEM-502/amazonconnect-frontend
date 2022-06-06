/*
Author: María Fernanda Ramirez Barragán

Navbar functionality 
*/

import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import ThemeOptions from "../AgentCards/ThemeOptions";

const NavBar = (props) => {
  const [userPopup, setUserPopup] = useState(false);
  const [userPopupThemes, setUserPopupThemes] = useState(false);
  const user_type = localStorage.getItem("user_type");
  var nav = [];
  // Used to see wich links are active
  const [activeLink, setActiveLink] = useState(0);

  useEffect(() => {
    document.body.addEventListener("click", userPopupState);
  });

  if (user_type === "agent") {
    nav = [
      {
        title: "Home",
        url: "/agent/home",
        cName: "nav-links",
      },
      {
        title: "Statistics",
        url: "/agent/statics",
        cName: "nav-links",
      },
      {
        title: "Capacitations",
        url: "/agent/capacitations",
        cName: "nav-links",
      },
    ];
  } else if (user_type === "manager") {
    nav = [
      {
        title: "Home",
        url: "/manager/home",
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
      },
    ];
  } else if (user_type === "admin") {
    nav = [
      {
        title: "Home",
        url: "/admin/home",
        cName: "nav-links",
      },
      {
        title: "Configuration",
        url: "/admin/configuration",
        cName: "nav-links",
      },
    ];
  }

  const userPopupState = (event) => {
    event.stopPropagation();
    if (userPopup && !event.target.closest("#u-settings")) {
      setUserPopup(false);
    } else if (!userPopup && event.target.closest("#u-settings")) {
      setUserPopup(true);
    }
    if (userPopupThemes && !event.target.closest("#u-themes")) {
      setUserPopupThemes(false);
    } else if (!userPopupThemes && event.target.closest("#u-themes")) {
      setUserPopupThemes(true);
    }
  };

  if (nav.length === 0) {
    return <div></div>;
  } else {
    return (
      <div>
        <nav className="navbar">
          <img src={require("../../images/TelmexLogo.jpg")} alt="logoTelmex" />
          <ul className="nav-menu">
            {nav.map((link, index) => {
              return (
                <li key={index}>
                  <Link
                    id={index}
                    to={link.url}
                    className={
                      activeLink === index
                        ? `${link.cName} activeLink`
                        : link.cName
                    }
                    onClick={() => setActiveLink(index)}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <BsEye className="icons" id="u-themes" onClick={userPopupState} />

            <AiOutlineUser
              id="u-settings"
              className="icons"
              onClick={userPopupState}
            />
          </ul>
        </nav>
        {userPopup && <DropDown noActiveLink={setActiveLink} />}
        {userPopupThemes && <ThemeOptions newTheme={props.newTheme} />}
      </div>
    );
  }
};

export default NavBar;
