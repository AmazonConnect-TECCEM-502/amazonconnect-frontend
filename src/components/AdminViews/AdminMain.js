import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";

function AdminMain() {
  const token = localStorage.getItem("token");
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();
  const [name, setName] = useState("");

  /* Checking if the user is an admin, if not it will redirect to the previous page. */
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
    else if(user_type !== "admin"){
      navigate(-1);
    }
  }, [user_type, navigate]);

  if(user_type === "admin"){
    return (
      <Fragment>
        {(token !== "") & (user_type === "admin") && (
          <Fragment>
            <div className="manager-container">
              <h1>Welcome home,</h1>
              <h1>{name}</h1>
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

export default AdminMain;
