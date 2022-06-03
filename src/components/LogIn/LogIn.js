/*
Author: Benjamín Ruiz A01750246
Component that allows the login of a user in our system validating
the provided email and password
*/

import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // This function sends two requests to the backend with the input data to
  // get a session token and relevant information of the user (user_id and user_type)
  const login = async (email, password) => {
    localStorage.clear();

    //Check that both, email and password fields are filled
    if ((email === "") | (password === "")) {
      toast.error("Please fill both fields");
      return;
    }
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
      .then((response) => {
        if (response.status !== 200) {
          toast.error("Incorrect email or password");
          return;
        }
        response.json().then((result) => {
          tempToken = "Bearer " + result.AccessToken.toString();
          localStorage.setItem("token", tempToken);
          toast.success("Welcome!");
          const tokenHeader = new Headers({ Authorization: tempToken });
          const requestOptions2 = {
            method: "GET",
            headers: tokenHeader,
          };
          fetch(USER_TYPE_API_URL, requestOptions2)
            .then((response) => {
              response.json().then((result) => {
                const user_type = result.user_type.toString();
                const user_id = result.id;
                localStorage.setItem("user_type", user_type);
                localStorage.setItem("user_id", user_id);
                if (localStorage.getItem("user_type") === "agent") {
                  navigate("/agent/home");
                } else if (localStorage.getItem("user_type") === "manager") {
                  navigate("/manager/home");
                } else if (localStorage.getItem("user_type") === "admin") {
                  navigate("/admin/home");
                }
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      })
      .catch((err) => {
        toast.error("Incorrect email or password");
        console.log(err);
      });
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
            <button className="forget" onClick={() => navigate("/verifCode")}>
              I have a verification code
            </button>
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
