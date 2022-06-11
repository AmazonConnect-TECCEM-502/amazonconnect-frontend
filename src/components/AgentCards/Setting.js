/*
  Author: Eric Alexis Castañeda Bravo
  Description: Show the info of the user and allow him to 
  change Name and Last name

  Usage:
  <Settigns />
*/
import { Fragment, useEffect, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import UserInfo from "./UserInfo";

const Settings = () => {
  //Info from the json
  const [userId, setUserId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [img, setImg] = useState("");
  const [Displayimg, setDisplayImg] = useState("");
  const [useImage,setUseImage] = useState(false);

        const imageSource = async () =>{
            const res = await fetch(process.env.REACT_APP_S3_IMAGES_URL + userId +".jpg");
            const data = await res.status;
            console.log(data)

          if (data === 200){
            console.log("Se encontro la imagen que buscas")
            setDisplayImg(process.env.REACT_APP_S3_IMAGES_URL + userId +".jpg")

          }else{
            console.log("Tu imagen no existe")
            setDisplayImg(process.env.REACT_APP_S3_IMAGES_URL + "NoImage.jpg")
          }
        }
        var dataUriNoState = "";
        
        const getImageD =  async (file) => {
          setUseImage(true)
          if (file){

          }
          const fileToDataUri = (file) => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
              resolve(event.target.result)
            };
            reader.readAsDataURL(file);
            })

          await fileToDataUri(file)
            .then((fileb64) => {
              dataUriNoState = fileb64.split(',')[1].toString()
            })
            
              console.log("dataUriNoState " ,dataUriNoState)

          const base64 = dataUriNoState
          var binary_string = window.atob(base64);
          var len = binary_string.length;
          var bytes = new Uint8Array(len);
          for (var i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i); //infomracion en BIN
          }
          console.log(bytes.buffer)
          setImg(bytes.buffer)

      }

  //Request to back end to get the info of X user
  const getClientData = async () => {
    const user_id = localStorage.getItem("user_id");
    const token = localStorage.getItem("token");
    const header = new Headers({ Authorization: token, "Content-Type": "application/json"});
    const json = { user_id: user_id }; // Cambiar el numero por el valor real del usuario
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/suc/userData`, {
      method: "POST",
      headers: header,
      body: JSON.stringify(json),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserId(data.user_id);
        setFirstName(data.first_name);
        setLastName(data.last_name);
        setEmail(data.email);
        setUserType(data.user_type);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    getClientData();
    imageSource();
  });

  const navigate = useNavigate();
  // Input info
  const [nuevoFirstName, setNuevoFirstName] = useState("");
  const [nuevoLastName, setNuevoLastName] = useState("");
  // Change of the input
  const cambioFirstName = (event) => {
    setNuevoFirstName(event.target.value);
  };
  const cambioLastName = (event) => {
    setNuevoLastName(event.target.value);
  };

  //Send new data to the back end
  const sendNewName = async () => {
    const token = localStorage.getItem("token");
    const header = new Headers({ Authorization: token, "Content-Type": "application/json"});
    await axios.post(`${process.env.REACT_APP_BACKEND_URL}/suc/changeName`, {
      user_id: 14, //Modificar No siempre tiene que ser 14
      first_name: nuevoFirstName,
      last_name: nuevoLastName,
      headers:header
    });
  };

  //sendFile();
  const getUrl = async () => {
    console.log("img:",img)
    const file = new File([img], userId, {type: 'image/jpg', lastModified:Date.now()})

    const response = await axios({
      url: process.env.REACT_APP_IMAGE_UPLOAD_URL + userId,
      method: 'GET'
    });
    console.log(response.data)
    
    
    if (response.status === 200) {
      const uploaded = await fetch(response.data.uploadURL, {
        method: "PUT",
        body: file,
      });
      if (uploaded.status === 200) {
        console.log("Imagen subida a S3");
      } else {
        console.log("Error al subir imagen");
      }
    } else {
      console.log("Error al obtener el link de subida");
    }
  };

  //Navegate button
  const callFunctions = () => {
    sendNewName();
        if (useImage){

          getUrl();
        }
        
        navigate("/agent/profile");
  };
  return (
    <Fragment>
      <div className="profile-info">
        <div style={{ display: "flex", alignItems: "center" }}>
          <p><img
            src={Displayimg}
            alt="Profile"
          />
          <input type="file" accept=".jpg" alt="login" onChange={(event) => getImageD(event.target.files[0])} />
          
          </p>
        </div>
        
        <div className="person-info">
          <p className="agent-title" style={{ marginBottom: "3px" }}>
            <UserInfo text={firstName + " " + lastName} />
          </p>
          <p className="user-type"> {userType} </p>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className="personal-data">
              <p> First_Name: </p>
              <div>
                <input
                  className="user-name-changed"
                  type="text"
                  name="First Name"
                  onChange={cambioFirstName}
                  placeholder={firstName}
                />
              </div>
              <div>
                <p>Email: {email} </p>
                <p> </p>
              </div>
              <div>
                <p> ID: {userId}</p>
              </div>
            </div>
            <div className="personal-data">
              <p> Last Name:</p>
              <div>
                <input
                  className="user-name-changed"
                  type="text"
                  name="Last Name"
                  onChange={cambioLastName}
                  placeholder={lastName}
                />
              </div>
              <p> Gender: Male</p>
            </div>
          </div>
          <button className="btn-main" onClick={callFunctions}>
            {" "}
            Actualizar{" "}
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Settings;
