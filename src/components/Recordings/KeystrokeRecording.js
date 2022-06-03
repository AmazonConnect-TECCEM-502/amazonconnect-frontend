/*
  Author: Ariel Alvarez
          Diego Armando Ulibarri Hernández
  Description: Detect the keys that are being typed by the agent

  Usage:
  <KeystrokeRecording />
*/

import React, { Fragment } from "react";
import { useState } from "react";
import KeystrokeText from "./KeystrokeText";
const KeystrokeRecording = () => {
  const [display, Update] = useState(".");

  const placeholder = {
    text: "",
  };
  let time = performance.now();

  React.useEffect(() => {
    document.addEventListener("keyup", event => {
      if (placeholder.text === "" || placeholder.text === "."){
        placeholder.text = event.key;
      }else if (performance.now() - time > 1000){
        placeholder.text = event.key;
      } else{
        placeholder.text = placeholder.text + " + " + event.key;
      }

      time = performance.now();
      Update(placeholder.text);
    });
  }, []);

  return (
    <Fragment>
      <KeystrokeText text={display} />
    </Fragment>
  );
};

export default KeystrokeRecording;
