// Author: José Benjamín Ruiz García
// Component that allows the agent to record his or her screen and produce
// an MP4 file with the media recorded which will be uploaded to an AWS S3 bucket

import { Fragment } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { BsFillRecordFill, BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";
import axios from "axios";

const Recording = (props) => {
  const onStop = async (url, blob) => {
    const API_ENDPOINT =
      "https://6tggc5vevc.execute-api.us-east-1.amazonaws.com/default/getPresignedS3URL";

    const response = await axios({
      url: API_ENDPOINT,
      method: "GET",
    });

    if (response.status === 200) {
      const uploaded = await fetch(response.data.uploadURL, {
        method: "PUT",
        body: blob,
      });
      if (uploaded.status === 200) {
        console.log("Video subido a S3");
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

  return (
    <Fragment>
      <p className="title">Click to start recording</p>
      <p>{`Status: ${status}`}</p>
      {(status === "idle" ||
        status === "stopped" ||
        status === "acquiring_media") && (
        <button className="button" onClick={startRecording}>
          {<BsFillRecordFill size={28} />}
        </button>
      )}
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
      {document.addEventListener("keydown", function (event) {
        console.log(`Tecla: ${event.key} `);
      })}
    </Fragment>
  );
};

export default Recording;
