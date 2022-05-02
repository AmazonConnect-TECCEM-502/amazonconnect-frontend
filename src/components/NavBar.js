import "../style/NavBar.css";
import { AiOutlineUser } from "react-icons/ai";
import { IoOptionsOutline } from "react-icons/io5";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <img src={require("../images/TelmexLogo.jpg")} alt="logoTelmex" />
      <div className="navbar-options">
        <IoOptionsOutline />
        <AiOutlineUser />
      </div>
    </div>
  );
};

export default NavBar;
