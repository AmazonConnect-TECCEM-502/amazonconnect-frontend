import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (email, password) => {
    localStorage.clear();
    const LOGIN_API_URL = "http://localhost:8080/auth/signin";
    const USER_TYPE_API_URL = "http://localhost:8080/user/userType";
    var tempToken = "";

    var headers = new Headers();
    headers.append("Content-Type", "application/json");

    const BODY = JSON.stringify({
      email: email,
      password: password,
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: BODY,
    };

    // Llamada al endpoint que regresa el token de la sesión del usuario (inicia sesión)
    fetch(LOGIN_API_URL, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        tempToken = "Bearer " + result.AccessToken.toString();
        localStorage.setItem("token", tempToken);
      })
      .then((result) => {
        console.log("Token: ", tempToken);
        const tokenHeader = new Headers({ Authorization: tempToken });

        const requestOptions2 = {
          method: "GET",
          headers: tokenHeader,
        };

        // Llamada al endpoint que regresa el rol que tiene el usuario que inició sesión
        fetch(USER_TYPE_API_URL, requestOptions2)
          .then((response) => response.json())
          .then((result) => {
            console.log(result);
            const user_type = result.user_type.toString();
            const user_id = result.id;
            localStorage.setItem("user_type", user_type);
            localStorage.setItem("user_id", user_id);
          })
          .then(() => {
            if (localStorage.getItem("user_type") === "agent") {
              navigate("/agent/home");
            } else if (localStorage.getItem("user_type") === "manager") {
              navigate("/manager/home");
            } else if (localStorage.getItem("user_type") === "admin") {
              navigate("/admin/home");
            }
          })
          .catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  };

  const changeEmailValue = (event) => {
    setEmail(event.target.value);
  };

  const changePasswordValue = (event) => {
    setPassword(event.target.value);
  };

  return (
    <Fragment>
      <div className="logCard">
        <div className="card">
          <div className="login">
            <b>Email</b>
            <input
              className="user-ID"
              type="text"
              name="userID"
              onChange={changeEmailValue}
            />
            <b>Password</b>
            <input
              className="user-ID"
              type="password"
              name="password"
              onChange={changePasswordValue}
            />
            <button className="forget"> Did you forget your password?</button>
            <button
              className="btn-main"
              onClick={() => login(email, password)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LogIn;
