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
  const [Displayimg, setDisplayImg] = useState("");

    const imageSource = async () =>{
      const res = await fetch("https://images-texmex-users-2-0.s3.amazonaws.com/"+ userId +".jpg");
      const data = await res.status;
      console.log(data)

    if (data === 200){
      console.log("Se encontro la imagen que buscas")
      setDisplayImg("https://images-texmex-users-2-0.s3.amazonaws.com/"+ userId +".jpg")

    }else{
      console.log("Tu imagen no existe")
      setDisplayImg("https://images-texmex-users-2-0.s3.amazonaws.com/NoImage.jpg")
    }
  }

  const getClientData = async () => {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const header = new Headers({ Authorization: token, "Content-Type": "application/json"});
    const json = { user_id: user_id };
    console.log(JSON.stringify(json));
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/suc/userData`, {
      method: "POST",
      headers: header,
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
    imageSource();
    getClientData();
  });

  return (
    <Fragment>
      <div className="profile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Displayimg}
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
