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
import { Fragment } from "react";
import UserImage from "./UserImage";
import UserInfo from "./UserInfo";
import UserName from "./UserName";

const UserCard = (props) => {
  return (
    <Fragment>
        <UserImage image={props.image} />
        <UserName name={props.fname + ", " + props.lname} />
        <UserInfo text={props.email} />
        <UserInfo text={props.phone} />
    </Fragment>
  );
};

export default UserCard;
