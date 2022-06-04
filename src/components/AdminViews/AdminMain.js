import { Fragment, useEffect, useState } from "react";
import NotLoggedIn from "../LogIn/NotLoggedIn";

function AdminMain() {
  const token = localStorage.getItem("token");
  const user_type = localStorage.getItem("user_type");

  const [name, setName] = useState("");

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
  }, []);

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
      {user_type !== "admin" && <NotLoggedIn message="You are not an admin" />}
      {token === "" && <NotLoggedIn message="You are not logged in" />}
    </Fragment>
  );
}

export default AdminMain;
