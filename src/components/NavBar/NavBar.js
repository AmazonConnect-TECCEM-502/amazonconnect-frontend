import React, { Component } from "react";
import "../../style/NavBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";
import { NavBarOptions } from "./NavBarOptions";
import "../../style/NavBarOptions.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <img src={require("../../images/TelmexLogo.jpg")} alt="logoTelmex" />
        <ul className="nav-menu">
          {NavBarOptions.map((props) => {
            return (
              <li>
                <a className={props.cName} href={props.url}>
                  {props.title}
                </a>
              </li>
            );
          })}
          <IoOptionsOutline className="icons" />
          <AiOutlineUser className="icons" />
        </ul>
      </nav>
    );
  }
}

export default NavBar;
