/* 
  Author: Joan Daniel Guerrero Garcia.

  Last modified date: May 25th, 2022.

  Description: Displays additional information of a 
  client on a ClientCard, managed as text.

  Usage: To create a ClientInfo, you need to import this file
  and use the following line:

  <ClientInfo text = {text to display}  />
*/

const ClientInfo = (props) => {
  return <div className="client-info">{props.text}</div>;
};

export default ClientInfo;
