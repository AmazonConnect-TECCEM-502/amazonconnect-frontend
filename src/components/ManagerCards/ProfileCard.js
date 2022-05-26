/*
  Author: Maria Fernanda Ramirez Barragan
  Description: Show the manager information
  when clicked "profile" 

  Usage:
  <ProfileCard />
*/

import { Fragment } from "react";

const ProfileCard = () => {
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
            Agent Name
          </p>
          <p style={{ color: "blue", marginTop: "0px" }}> Agent Role</p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="personal-data">
              <p> Phone: 5500990099</p>
              <p> Email: Agent@gmail.com</p>
              <p> ID: 12345</p>
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
