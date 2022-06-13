import { Link } from "react-router-dom";

const DropDownHamburguer = (props) => {
  return(
    <div className="dropdown-menu">
      {
        props.hamburguerLinks.map((link, index) => {
          return(
            <Link
              to={link.url}
              key={index}
            >
              {link.title}
            </Link>
          )
        })
      }
    </div>
  );
};

export default DropDownHamburguer;
