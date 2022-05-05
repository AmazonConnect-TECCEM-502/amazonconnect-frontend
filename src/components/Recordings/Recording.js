// Author: José Benjamín Ruiz García
// Component that allows the agent to record his or her screen and produce
// an MP4 file with the media recorded.

import { Fragment } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { BsFillRecordFill, BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";

const Recording = (props) => {
  const onStop = (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "videoFile";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
    mediaBlobUrl,
  } = useReactMediaRecorder({
    screen: true,
    audio: true,
    askPermissionOnMount: true,
    onStop: () => onStop(mediaBlobUrl),
    blobPropertyBag: { type: "video/mp4" },
  });

  return (
    <Fragment>
      <p>Recording: {status}</p>
      <p>{isAudioMuted ? "Muted" : "Unmutted"}</p>
      <button className="button" onClick={startRecording}>
        {<BsFillRecordFill size={28} />}
      </button>
      <button className="button" onClick={stopRecording}>
        {<FaStop size={28} />}
      </button>
      <button className="button" onClick={pauseRecording}>
        {<BsPauseFill size={28} />}
      </button>
      <button className="button" onClick={resumeRecording}>
        {<BsFillPlayFill size={28} />}
      </button>
      <button className="button" onClick={muteAudio}>
        {<GoMute size={28} />}
      </button>
      <button className="button" onClick={unMuteAudio}>
        {<GoUnmute size={28} />}
      </button>
      <br />
      <video
        src={mediaBlobUrl}
        controls={true}
        autoPlay={false}
        loop={true}
        width="300px"
        height="300px"
      />
      {document.addEventListener("keydown", function (event) {
        console.log(`Tecla: ${event.key} `);
      })}
    </Fragment>
  );
};

export default Recording;
