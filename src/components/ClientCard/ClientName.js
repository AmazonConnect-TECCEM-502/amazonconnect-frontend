/* 
  Author: Joan Daniel Guerrero Garcia.

  Last modified date: May 25th, 2022.

  Description: Displays the name of the client on a ClientCard

  Usage: To create a ClientName, you need to import this file
  and use the following line:

  <ClientName name = {name of the client}  />
*/

const ClientName = (props) => {
  return (
    <div className="client-name">
      <p>{props.name}</p>
    </div>
  );
};

export default ClientName;
