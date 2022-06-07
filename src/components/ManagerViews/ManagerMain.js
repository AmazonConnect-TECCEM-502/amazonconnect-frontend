import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ManagerMain() {
  const [name, setName] = useState("");
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  /* Checking if the user is an manager, if not it will redirect to the previous page. */
  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = new Headers({ Authorization: token });
    fetch("http://localhost:8080/user/readUser", {
      method: "GET",
      headers: header,
    })
      .then((response) => response.json())
      .then((result) => {
        setName(() => result.first_name);
      });
    
    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "manager"){
      navigate(-1);
    }
  },  [user_type, navigate]);



  if(user_type === "manager"){
    return (
      <div className="manager-container">
        <h1>Welcome home,</h1>
        <h1>{name}!</h1>
      </div>
    );
  }
}

export default ManagerMain;
