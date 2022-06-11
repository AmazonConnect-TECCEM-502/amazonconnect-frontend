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

import axios from "axios";
import { createContext, useState } from "react";
export const ClientContext = createContext();

const ClientProvider = ({ children }) => {
  const [clientID, setClientID] = useState("");
  const [clientFname, setClientFname] = useState("");
  const [clientLname, setClientLname] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [products, setProducts] = useState([]);
  const [showClient, setShowClient] = useState(false);
  const [showError, setShowError] = useState(false);
  const [inputEmail, setInputEmail] = useState("");
  const [result, setResult] = useState(""); // AuthenticationType

  const showContent = (message) => {
    if(message === "authenticated"){
      getClientData();
    }
    setResult(message);
    console.log(result);
  };

  const getClientData = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/getUserData`,{
      "phoneNumber": clientPhone
    })
    .then(res => {
      setClientID(res.data.userData.client_id)
      setClientFname(res.data.userData.first_name)
      setClientLname(res.data.userData.last_name)
      setClientEmail(res.data.userData.email)
      setProducts(res.data.userProducts)
      localStorage.removeItem('clientID')
      localStorage.setItem('clientID', res.data.userData.client_id.toString())
    })
    .catch(function(err) {
      console.log(err);
      showContent("not yet");
    });
    console.log(clientID);
  }

  const resetUserData = async () => {
    console.log("Reseting....................");
    showContent("not yet");
    setShowClient(false);
    setShowError(false);
    const clientPhone = localStorage.getItem("clientPhone");
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/reset`,{
      "phoneNumber": clientPhone
    }).catch(function(err) {
      console.log(err);
    });
  };

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
        setShowError,
        result,
        setResult,
        showContent,
        products,
        setProducts,
        resetUserData,
        inputEmail,
        setInputEmail
      ]}
    >
      {children}
    </ClientContext.Provider>
  );
};

export default ClientProvider;
