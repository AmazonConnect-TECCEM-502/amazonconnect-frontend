import { Fragment } from "react";
import NavBarAdmin from "../NavBar/NavBarAdmin";
import NotLoggedIn from "../LogIn/NotLoggedIn";

function AdminMain() {
  const token = localStorage.getItem("token");
  const user_type = localStorage.getItem("user_type");

  return (
    <Fragment>
      {(token !== "") & (user_type === "admin") && (
        <Fragment>
          <NavBarAdmin />
          <div className="manager-container">
            <h1>Welcome home,</h1>
            <h1>Rosa!</h1>
          </div>
        </Fragment>
      )}
      {user_type !== "admin" && <NotLoggedIn message="You are not an admin" />}
      {token === "" && <NotLoggedIn message="You are not logged in" />}
    </Fragment>
  );
}

export default AdminMain;
