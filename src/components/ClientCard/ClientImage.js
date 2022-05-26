/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: May 25th, 2022. 

  Description: Displays the image of the client on a ClientCard.

  Usage: To create a ClientImage, you need to import this file
  and use the following line:

  <ClientImage image = {name of the .jpg image}  />
*/

const ClientImage = (props) => {
  return <img src={require(`../../images/${props.image}.jpg`)} alt="Client" className="client-image" />;
};

export default ClientImage;
