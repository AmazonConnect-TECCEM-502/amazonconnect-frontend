// Author: José Benjamín Ruiz García
// Component that allows the agent to record his or her screen and produce
// an MP4 file with the media recorded which will be uploaded to an AWS S3 bucket

import { Fragment, useContext, useEffect } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { BiVideoRecording } from "react-icons/bi";
import { FaStop } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";
import axios from "axios";
import { AgentContext } from "../AgentView/AgentProvider";
import { ClientContext } from "../ClientCard/ClientProvider";
import "amazon-connect-streams";

var onload = true;
var isCall = true;

const Recording = () => {
  const [, , , , , , , , , , , , , , , , , , , , , setCategoryProblem] =
    useContext(AgentContext);
  const [
    ,
    ,
    ,
    setClientFname,
    ,
    setClientLname,
    ,
    setClientEmail,
    ,
    setClientPhone,
    ,
    setClientProducts,
    ,
    ,
    ,
    setInputEmail,
    showContent,
  ] = useContext(ClientContext);

  const onStop = async (url, blob) => {
    // await setCategoryProblem([...categoryProblem]);
    const clientID = parseInt(localStorage.getItem("clientID"));
    const categories = JSON.parse(localStorage.getItem("categoryProblem"));

    const API_ENDPOINT = process.env.REACT_APP_PRESIGNEDURL_URL;

    const response = await axios({
      url: API_ENDPOINT,
      method: "GET",
    });

    var key = response.data.Key.toString();
    console.log(key);
    key = key.split("/")[1];
    key = key.split(".")[0];
    key = key + "_SUB.mp4";
    const videoURL = process.env.REACT_APP_S3_OBJECTS_URL + key;
    const token = localStorage.getItem("token");
    const user_id = localStorage.getItem("user_id");

    if (response.status === 200) {
      const uploaded = await fetch(response.data.uploadURL, {
        method: "PUT",
        body: blob,
      });
      if (uploaded.status === 200) {
        console.log("Video subido a S3");
        //Url from the video created

        // Headers
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", token);

        var raw = JSON.stringify({
          file: videoURL,
          agent_id: user_id,
          client_id: clientID,
        });

        var requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
        };

        fetch(
          `${process.env.REACT_APP_BACKEND_URL}/call/postVideoBD`,
          requestOptions
        )
          .then((response) => response.json())
          .then((result) => {
            const call_id = result.call_id;

            var myHeaders = new Headers();
            myHeaders.append("Authorization", token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
              call_id: call_id,
              categories: categories,
            });

            var requestOptions = {
              method: "POST",
              headers: myHeaders,
              body: raw,
            };

            fetch(
              `${process.env.REACT_APP_BACKEND_URL}/callProblemCategory/createCallPC`,
              requestOptions
            )
              .then((response) => {
                console.log(response.status);
                localStorage.removeItem("categoryProblem");
                setCategoryProblem([]);
              })
              .catch((error) => console.log("error", error));
          })
          .catch((error) => console.log("error", error));
      } else {
        console.log("Error al subir video");
      }
    } else {
      console.log("Error al obtener el link de subida");
    }
  };

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    muteAudio,
    unMuteAudio,
    isAudioMuted,
  } = useReactMediaRecorder({
    screen: true,
    audio: true,
    onStop: onStop,
    blobPropertyBag: { type: "video/mp4" },
  });

  useEffect(() => {
    if (onload) {
      /*const eventBus = connect.core.getEventBus();
      eventBus.subscribe(connect.EventType.TERMINATED, () => {
        console.log("Logged out");
      });*/

      connect.contact(function (contact) {
        // Called when the contact is finished (including After Call Work)
        contact.onDestroy(function (contact) {
          if (isCall) {
            console.log("#==========>\nCONTACT ENDED\n<==========#");
            stopRecording();

            // Reset Client values
            const clientPhone = localStorage.getItem("clientPhone");
            axios
              .post(`${process.env.REACT_APP_BACKEND_URL}/vid/reset`, {
                phoneNumber: clientPhone,
              })
              .catch(function (err) {
                console.log(err);
              });
            showContent("not yet");
            //setClientID("");
            setClientFname("");
            setClientLname("");
            setClientEmail("");
            setClientProducts([]);
            localStorage.removeItem("clientID");
            localStorage.setItem("clientID", "--");
            localStorage.removeItem("clientPhone");
            localStorage.setItem("clientPhone", "");
            setInputEmail("");
            console.log(localStorage);
            isCall = false;
          }
        });
        // Called when a new call starts
        contact.onAccepted(function (contact) {
          console.log("#==========>\nCONTACT STARTED\n<==========#");
          startRecording();

          // Get Client phone number from Connect
          const voiceConnection = contact.getAgentConnection();
          voiceConnection
            .getVoiceIdSpeakerId()
            .then((data) => {
              setClientPhone("+" + data.speakerId);
              localStorage.removeItem("clientPhone");
              localStorage.setItem(
                "clientPhone",
                "+" + data.speakerId.toString()
              );
            })
            .catch((err) => {
              console.error(err);
            });
          // USEFUL TO UNENROLL CUSTOMER FROM VOICEID.
          /*voiceConnection.deleteVoiceIdSpeaker()
          .then(() => {
          })
          .catch((err) => {
            console.error(err);
          });*/

          isCall = true;
        });
      });
      onload = false;
    }
  });

  return (
    <Fragment>
      <p className="title">Recordings controlls</p>
      {(status === "recording" || status === "paused") && (
        <button className="button" onClick={stopRecording}>
          {<FaStop size={28} />}
        </button>
      )}
      {status === "recording" && (
        <button className="button" onClick={pauseRecording}>
          {<BsPauseFill size={28} />}
        </button>
      )}
      {status === "paused" && (
        <button className="button" onClick={resumeRecording}>
          {<BsFillPlayFill size={28} />}
        </button>
      )}
      {isAudioMuted === false &&
        (status === "recording" || status === "paused") && (
          <button className="button" onClick={muteAudio}>
            {<GoUnmute size={28} />}
          </button>
        )}
      {isAudioMuted && (
        <button className="button" onClick={unMuteAudio}>
          {<GoMute size={28} />}
        </button>
      )}
    </Fragment>
  );
};

export default Recording;
