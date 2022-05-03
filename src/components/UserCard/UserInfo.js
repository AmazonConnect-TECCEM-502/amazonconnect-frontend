/* 
  Author: Joan Daniel Guerrero Garcia
  Description: Displays additional information of a 
  client on a UserCard, managed as text

  Usage: To create a UserInfo, you need to import this file
  and use the following line:

  <UserInfo text = {text to display}  />
*/

const UserInfo = (props) => {
  return <div className="user-info">{props.text}</div>;
};

export default UserInfo;
