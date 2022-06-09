/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: June 5th, 2022.
  
  Description: Contains the Client context provider to manage
  useStates with client's data

  Usage: To use the ClientContext, you need to import this file
  and use the following line:

    const [ clientID, setClientID, clientFname, setClientFname, clientLname, setClientLname, clientEmail, setClientEmail, clientPhone, setClientPhone, showClient, setShowClient, showError, setShowError] = useContext(ClientContext);

  And only include the attributes needed

*/

import { createContext, useState } from "react";
export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clientID, setClientID] = useState("");
  const [clientFname, setClientFname] = useState("");
  const [clientLname, setClientLname] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [showClient, setShowClient] = useState(false);
  const [showError, setShowError] = useState(false);

  return (
    <ClientContext.Provider
      value={[
        clientID,
        setClientID,
        clientFname, 
        setClientFname,
        clientLname, 
        setClientLname,
        clientEmail,
        setClientEmail,
        clientPhone,
        setClientPhone,
        showClient,
        setShowClient,
        showError, 
        setShowError
      ]}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
