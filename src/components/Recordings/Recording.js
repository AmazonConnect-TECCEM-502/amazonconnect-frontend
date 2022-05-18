// Author: José Benjamín Ruiz García
// Component that allows the agent to record his or her screen and produce
// an MP4 file with the media recorded which will be uploaded to an AWS S3 bucket

import { Fragment } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { BsFillRecordFill, BsPauseFill, BsFillPlayFill } from "react-icons/bs";
import { FaStop } from "react-icons/fa";
import { GoUnmute, GoMute } from "react-icons/go";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import axios from "axios";

const Recording = (props) => {
  const uploadVideo = (file) => {
    try {
      var file = file.target.files[0];

      const awsCreds = {
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      };

      const uploadParams = {
        Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
        Key: file.name,
        Body: file,
      };

      const upload = new Upload({
        client: new S3Client({
          region: process.env.REACT_APP_AWS_S3_REGION,
          credentials: awsCreds,
        }),
        leavePartsOnError: false,
        params: uploadParams,
      });

      upload.on("httpUploadProgress", (progress) => {
        console.log(progress);
      });

      upload.done();
    } catch (err) {
      console.log("error", err);
    }
  };
  // AWS.config.update({ region: process.env.REACT_APP_AWS_S3_REGION });
  // s3 = new AWS.S3();
  // const file = "D:/Documents/Sexto Semestre/Bloque/Reto/PruebaS3.png";
  // const fileStream = fs.createReadStream(file);
  // const baseName = path.basename(file);
  // const uploadParams = {
  //   Bucket: process.env.REACT_APP_AWS_S3_BUCKET,
  //   Key: baseName,
  //   Body: fileStream,
  // };

  // s3.upload(uploadParams, function (err, data) {
  //   if (err) {
  //     console.log("Error", err);
  //   }
  //   if (data) {
  //     console.log("Upload Success", data.Location);
  //   }
  // });

  const onStop = async (url) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = "videoFile";

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    const fileName = Date.now().toString() + ".mp4";

    const blob = await fetch(url).then((r) => r.blob());

    const file = new File([blob], fileName, { type: "video/mp4" });

    axios
      .post("http://localhost:8080/call/uploadVideo", {
        fileName,
        file,
      })
      .then(({ data }) => console.log(data));
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
    onStop: onStop,
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
