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
