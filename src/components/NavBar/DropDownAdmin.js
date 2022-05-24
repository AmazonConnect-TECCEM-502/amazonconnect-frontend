import { Link } from "react-router-dom";

const DropDownAdmin = () => {
  const dropdownOptions = [
    {
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
    },
  ];

  return (
    <div className="triangle-up">
      <div className="dropdown-menu">
        {dropdownOptions.map((item) => {
          return <Link to={item.url} >{item.title}</Link>;
        })}
      </div>
    </div>
  );
};

export default DropDownAdmin;