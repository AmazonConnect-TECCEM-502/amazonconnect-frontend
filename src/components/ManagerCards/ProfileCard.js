/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the manager information
  when clicked "profile" 

  Usage:
  <ProfileCard />
*/
//modified by Eric Alexis Castañeda -- Know showing the real data *need changes
import { Fragment, useEffect, useState } from "react";
const ProfileCard = () => {
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");

  const getClientData = async () => {
    const json = { user_id: 14 };
    console.log(JSON.stringify(json));
    await fetch("http://localhost:8080/suc/userData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data.user_id);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setUserType(data.user_type);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    getClientData();
  });

  return (
    <Fragment>
      <div className="profile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://experiencia21.tec.mx/users/221/files/4808076/preview?verifier=trAIuyGaUvXXaoLmpScp3A2GU9IkVMiBCpu6HNOc"
            alt="Profile Photo"
          />
        </div>
        <div className="person-info">
          <p className="agent-title" style={{ marginBottom: "3px" }}>
            {" "}
            {firstName + " " + lastName}
          </p>
          <p className="user-type">{userType}</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="personal-data">
              <p> Phone: 5500990099</p>
              <p> Email: {email}</p>
              <p> ID: {userId}</p>
            </div>
            <div className="personal-data">
              <p> Birthday: May 5th</p>
              <p> Gender: Male</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProfileCard;
