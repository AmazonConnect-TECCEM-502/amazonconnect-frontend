/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: June 9th, 2022.
  
  Description: Card displaying a client's main information.
  (image, full name, and any other additional info given)

  Usage: To create a ClientCard, you need to import this file
  and use the following line:

  <ClientCard />
*/

import { Fragment, useContext, useEffect } from "react";
import ClientForms from "./ClientForms";
import ClientInfo from "./ClientInfo";
import ClientName from "./ClientName";
import ClientQuestion from "./ClientQuestion";
import { ClientContext } from "./ClientProvider";
import { VscRefresh } from "react-icons/vsc"

const ClientCard = () => {
  const [ , , clientFname, , clientLname, , clientEmail, , clientPhone, , clientProducts, , result, , , , , update] = useContext(ClientContext);

  // Functionality in progress
  useEffect(() => {
    update();
  });

  return (
    <div className="client">
      <VscRefresh onClick={update}/>
      {
        //Show User Info
        (result === "authenticated") &&
        <Fragment>
          <ClientName name={clientFname + ", " + clientLname} />
          <ClientInfo text={clientEmail} />
          <ClientInfo text={clientPhone} />
          <br/><h2 className="subtitle">Acquired products</h2>
          {
            clientProducts.map((product) => (
              <div className="element">
                {product.product_name}
              </div>
            ))
          }
        </Fragment>
      }
      {
        //Show Message error and form 
        (result === "not enrolled") &&  <ClientForms />
      }
      {
        //Show verification question 
        (result === "not authenticated" || result === "inconclusive" || result === "opted out") && 
        <ClientQuestion />
      }
      {
        //Show no data error
        (result !== "authenticated") && (result !== "opted out") && (result !== "not enrolled") && (result !== "inconclusive")
        && (result !== "not authenticated") && <h1 className="title"> Data not recieved yet </h1>
      }
      <button className="btn-main refresh" onClick={update}> Refresh </button>
    </div>
  );
};

export default ClientCard;
