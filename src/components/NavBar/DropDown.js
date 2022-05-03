/*
Autor: María Fernanda Ramirez Barragán
*/

const DropDown = () => {
  const dropdownOptions = [
    {
      id: "drop1",
      title: "View Profile",
      url: "#",
    },
    {
      id: "drop2",
      title: "Settings",
      url: "#",
    },
    {
      id: "drop3",
      title: "Exit",
      url: "#",
    },
  ];

  return (
    <div className="triangle-up">
      <div className="dropdown-menu">
        {dropdownOptions.map((item) => {
          return <a href={item.url}>{item.title}</a>;
        })}
      </div>
    </div>
  );
};

export default DropDown;
