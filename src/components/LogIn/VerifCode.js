/*
Author: Benjamín Ruiz A01750246
Component that allows users to verify their newly created accounts in
our system
*/

import { useState } from "react";
import toast from "react-hot-toast";
import ReactInputVerificationCode from "react-input-verification-code";
import { useNavigate } from "react-router-dom";

const VerifCode = () => {
  const [value, setValue] = useState("");
  const clearValue = () => setValue("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const verify = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email.toString(),
      code: value.toString(),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.REACT_APP_BACKEND_URL}/auth/verify`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        toast.success("Code verified");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid code or email");
        console.log("error", error);
      });
  };

  const changeEmailValue = (event) => {
    setEmail(event.target.value);
  };

  return (
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
          <b>Code</b>
          <div className="verif-code">
            <ReactInputVerificationCode
              length={6}
              onChange={setValue}
              value={value}
            />
            &nbsp;&nbsp;
            <button className="btn-main" onClick={clearValue}>
              Clear
            </button>
          </div>
          <button className="btn-main" onClick={verify}>
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifCode;
