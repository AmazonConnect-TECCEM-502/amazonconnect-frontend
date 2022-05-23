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
import { Fragment, useState } from "react";
import UserForms from "./UserForms";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserName from "./UserName";
import UserQuestion from "./UserQuestion";

const UserCard = (props) => {
  const [result, setResult] = useState("");

  const GetData = () => {
    fetch('http://187.208.195.218:80/voiceid/getAuthRes')
      .then(response => response.json())
      .then(data => {
        console.log(data.phoneNumber)
        console.log(data.authenticationType)
        showContent(data.authenticationType)
      })
  }

  const showContent = (message) => {
    setResult(message);
  };
  
  //GetData();

  return (
    <div>
      <button onClick={() => showContent("Authenticated")}>Mostrar carta</button>
      <button onClick={() => showContent("Not registered")}>Mostrar forms</button>
      <button onClick={() => showContent("Not authenticated")}>Mostrar pregunta</button>
      {
        //Show User Info
        (result === "Authenticated") &&
        <Fragment>
          <UserImage image={props.image} />
          <UserName name={props.fname + ", " + props.lname} />
          <UserInfo text={props.email} />
          <UserInfo text={props.phone} />
        </Fragment>
      }
      {
        //Show Message error and form 
        (result === "Not registered") && <UserForms />
      }
      {
        //Show Message error and form 
        (result === "Not authenticated") && <UserQuestion />
      }
    </div>
  );
};

export default UserCard;
