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

  const update = async () => {
    fetch('http://3.80.44.247:8080/vid/getAuthRes')
    .then(response => response.json())
    .then(data => {
      console.log(data)
      console.log(data.phoneNumber)
      setPhoneUser(data.phoneNumber)
      showContent(data.authenticationType)
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
  }

  useEffect( () => {
    update();
    const interval=setInterval(()=>{
      update();
     },5000)
      
     return()=>clearInterval(interval)
  });

  const showContent = (message) => {
    setResult(message);
    console.log(result);
  };

  const resetUserData = async () => {
    showContent("not yet");
    await axios.post('http://3.80.44.247:8080/vid/reset',{
      "message": "not yet"
    })
  };

  return (
    <div className="user">
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
        //Show verification question 
        (result === "not authenticated" || result === "inconclusive") && <UserQuestion />
      }
      {
        //Show no data error
        (result !== "authenticated") && (result !== "not enrolled") && (result !== "inconclusive")
        && (result !== "not authenticated") && <h1 className="title">Data not recieved yet</h1>
      }
      <button className="button-reset" onClick={() => resetUserData()}> Reset values </button>
      <button className="button-reset" onClick={() => update()}> Refresh </button>
    </div>
  );
};

export default UserCard;
