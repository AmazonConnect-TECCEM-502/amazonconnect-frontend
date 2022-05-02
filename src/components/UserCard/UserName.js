/* 
    Author: Joan Daniel Guerrero Garcia
    Description: Displays the name of the client on a UserCard

    Usage: To create a UserName, you need to import this file
    and use the following line:

    <UserName name = {name of the client}  />
*/
import "../../style/UserCard.css";

const UserName = (props) => {
    return (
        <div className = "user-name">
            <p>{props.name}</p>
        </div>
    );
};

export default UserName;