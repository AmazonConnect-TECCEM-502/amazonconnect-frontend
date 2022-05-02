/* 
    Author: Joan Daniel Guerrero Garcia
    Description: Displays the image of the client on a UserCard

    Usage: To create a UserImage, you need to import this file
    and use the following line:

    <UserImage image = {name of the .jpg image}  />
*/
import "../../style/UserCard.css";

const UserImage = (props) => {
    return (
        <img src = {require(`../../images/${props.image}.jpg`)} alt = "User" />
    );
};

export default UserImage;