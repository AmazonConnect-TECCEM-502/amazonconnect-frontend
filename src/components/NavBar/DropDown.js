/*
Author: María Fernanda Ramirez Barragán

Dropdown menu functionality 
*/

import { Link } from "react-router-dom";

const DropDown = (props) => {
  const user_type = localStorage.getItem("user_type");
  var dropdownOptions = []
  if(user_type === "agent"){
    dropdownOptions = [{
      id: "drop1",
      title: "View Profile",
      url: "/agent/profile",
    },
    {
      id: "drop2",
      title: "Settings",
      url: "/agent/settings",
    },
    {
      id: "drop3",
      title: "Exit",
      url: "/",
    }]
  }else if(user_type === "admin"){
    dropdownOptions = [{
      id: "drop1",
      title: "View Profile",
      url: "/admin/profile",
    },
    {
      id: "drop2",
      title: "Settings",
      url: "/admin/settings",
    },
    {
      id: "drop3",
      title: "Exit",
      url: "/",
    }]
  }else if(user_type === "manager"){
    dropdownOptions = [{
      id: "drop1",
      title: "View Profile",
      url: "/manager/profile",
    },
    {
      id: "drop2",
      title: "Settings",
      url: "/manager/settings",
    },
    {
      id: "drop3",
      title: "Exit",
      url: "/",
    }]
  }
  return (
    <div className="dropdown-menu">
      {dropdownOptions.map((item, index) => {
        if (item.title === "Exit"){
          return <Link key={index} to={item.url} onClick={() => localStorage.clear()} >{item.title}</Link>;
        } else {
          return <Link key={index} to={item.url} onClick={() => props.noActiveLink(10)} >{item.title}</Link>;
        }
      })}
    </div>
  );
};

export default DropDown;
