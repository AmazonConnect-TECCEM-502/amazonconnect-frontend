/*
Author: María Fernanda Ramirez Barragán

Navbar functionality 
*/

import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsEye } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import ThemeOptions from "../AgentCards/ThemeOptions";
import DropDownHamburguer from "./DropDownHamburguer";

const NavBar = (props) => {
  const [userPopup, setUserPopup] = useState(false);
  const [userPopupThemes, setUserPopupThemes] = useState(false);
  const [userPopupHamburger, setUserPopupHamburger] = useState(false);
  const user_type = localStorage.getItem("user_type");
  var nav = [];
  // Used to see wich links are active
  const [active_link, setActiveLink] = useState(localStorage.getItem("active_link") ? parseInt(localStorage.getItem("active_link")) : 0)
  

  useEffect(() => {
    document.body.addEventListener("click", userPopupState);
  });

  const newActiveLink = (index) => {
    setActiveLink(index);
    localStorage.setItem("active_link", index.toString());
  } 

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
      }
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
    if (userPopupHamburger && !event.target.closest("#u-hamburger")) {
      setUserPopupHamburger(false);
    } else if (!userPopupHamburger && event.target.closest("#u-hamburger")) {
      setUserPopupHamburger(true);
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
                      active_link === index
                        ? `${link.cName} activeLink`
                        : link.cName
                    }
                    onClick={() => newActiveLink(index)}
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
          {/* It will only displays on small screens */}
          <ul className="nav-menu2">
            {
              nav.length < 2 &&
              nav.map((link, index) => {
                return (
                  <li key={index}>
                    <Link
                      id={index}
                      to={link.url}
                      className={
                        active_link === index
                          ? `${link.cName} activeLink`
                          : link.cName
                      }
                      onClick={() => newActiveLink(index)}
                    >
                      {link.title}
                    </Link>
                  </li>
                );
              })
            }
            <BsEye className="icons" id="u-themes" onClick={userPopupState} />
            <AiOutlineUser
              id="u-settings"
              className="icons"
              onClick={userPopupState}
            />
            {nav.length > 1 && 
              <GiHamburgerMenu 
                id="u-hamburger"
                className="icons"
                onClick={userPopupState}
              />
            }
          </ul>
        </nav>
        {userPopup && <DropDown noActiveLink={newActiveLink} />}
        {userPopupThemes && <ThemeOptions newTheme={props.newTheme} />}
        {userPopupHamburger && <DropDownHamburguer hamburguerLinks={nav} />}
      </div>
    );
  }
};

export default NavBar;
