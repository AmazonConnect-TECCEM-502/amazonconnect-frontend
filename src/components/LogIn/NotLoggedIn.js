/*
Author: Benjamín Ruiz A01750246
Component that redirects the user to the login screen when he/she
is not logged in or does not have the permission to view a page
*/

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotLoggedIn = (props) => {
  const token = localStorage.getItem("token");
  const user_type = localStorage.getItem("user_type");
  const user_id = localStorage.getItem("user_id");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("token: ", token);
    console.log("userType: ", user_type);
    console.log("userId: ", user_id);
    console.log(props.message);
    navigate("/");
  });
};

export default NotLoggedIn;
