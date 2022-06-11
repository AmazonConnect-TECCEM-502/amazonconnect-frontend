/* 
  Author: Joan Daniel Guerrero García.

  Last modified date: June 9th, 2022.
  
  Description: Card displaying a verification question 
  for a not authenticated client.

  Usage: To create a ClientQuestion, you need to import 
  this file and use the following line:

  <ClientQuestion />
*/

import axios from "axios";
import { Fragment, useContext } from "react";
import toast from "react-hot-toast";
import { ClientContext } from "./ClientProvider";

const ClientQuestion = (props) => {
  const [ , , , setClientFname, , setClientLname, , setClientEmail, clientPhone, , , , , , inputEmail, setInputEmail, , update] = useContext(ClientContext);

  const clientEmailHandler = (event) => {
    setInputEmail(event.target.value);
  };
  
  const getClientData = async () => {
    if(inputEmail === "")
    {
      toast.error("Please fill in the email");
    }
    else if(!inputEmail.includes("@") || !inputEmail.includes("."))
    {
      toast.error("Invalid email format, please include '@' and '.'");
    }
    else
    {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/getUserData`,{
        "phoneNumber": clientPhone
      })
      .then(res => {
        setClientFname(res.data.userData.first_name);
        setClientLname(res.data.userData.last_name);
        setClientEmail(res.data.userData.email);
        if (res.data.userData.email === inputEmail) {    
          sendAuth();
        } else {
          toast.error('Authentication failed, please try again');
        }
      })
      .catch(function (err) {
        console.log(err);
      });
    }
  };

  const sendAuth = async () => {
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/vid/sendAuthRes`, {
      phoneNumber: clientPhone,
      authenticationType: "authenticated"
    })
    .catch(function (err) {
      console.log(err);
    });
    toast.success('Client authenticated');
    update();
  }

  return (
    <div className="client">
      <Fragment>
        <h1 className="title"> Authentification question </h1>
        <br />
        <div className="element">
          <label htmlFor={props.elementID}>
            &nbsp;{"Confirm email"}
            &nbsp;{
              <input
                className="user-ID"
                type="email"
                placeholder="example@gmail.com"
                onChange={clientEmailHandler}
              />
            }
          </label>
        </div>
        <button className="btn-main" onClick={getClientData}> Submit </button>
      </Fragment>
    </div>
  );
};

export default ClientQuestion;
