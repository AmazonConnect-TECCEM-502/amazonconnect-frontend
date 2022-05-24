/* 
  Author: Joan Daniel Guerrero Garcia
  Description: Card displaying a client's main information
  (image, full name, and any other additional info given)

  Usage: To create a UserCard, you need to import this file
  and use the following line:

  <UserCard 
    image = {name of the .jpg image} 
    fname = {first name}
    lname = {last name}
    email = {email}
    phone = {phone number} 
  />
*/

import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import UserForms from "./UserForms";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserName from "./UserName";
import UserQuestion from "./UserQuestion";

const UserCard = (props) => {
  const [result, setResult] = useState("");
  const [phoneUser, setPhoneUser] = useState("");

  useEffect( () => {
    fetch('http://187.208.199.168:80/voiceid/getAuthRes')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        console.log(data.phoneNumber)
        setPhoneUser(data.phoneNumber)
        showContent(data.authenticationType)
      });
  });

  const showContent = (message) => {
    setResult(message);
    console.log(result);
  };

  const resetUserData = () => {
    //postReset();
    //showContent("not yet");
  };

  const postReset = async () => {
    await axios.post('http://187.208.199.168:80/voiceid/reset',{
    "message": "not yet"
    })
  }

  return (
    <div className="user">
      <button onClick={() => showContent("authenticated")}>Mostrar carta</button>
      <button onClick={() => showContent("not enrolled")}>Mostrar forms</button>
      <button onClick={() => showContent("not authenticated")}>Mostrar pregunta</button>
      {
        //Show User Info
        (result === "authenticated") &&
        <Fragment>
          <UserImage image={props.image} />
          <UserName name={props.fname + ", " + props.lname} />
          <UserInfo text={props.email} />
          <UserInfo text={phoneUser} />
        </Fragment>
      }
      {
        //Show Message error and form 
        (result === "not enrolled") && <UserForms />
      }
      {
        //Show Message error and form 
        (result === "not authenticated" || result === "inconclusive") && <UserQuestion />
      }
      {
        (result !== "authenticated") && (result !== "not enrolled") && (result !== "inconclusive")
        && (result !== "not authenticated") && <h1 className="title">Data not recieved yet</h1>
      }
      <button className="button-reset" onClick={() => resetUserData()}> Reset values </button>
    </div>
  );
};

export default UserCard;
