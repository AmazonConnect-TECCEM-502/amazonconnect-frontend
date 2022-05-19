import React, { Fragment } from "react";
import {useState} from 'react'
import KeystrokeText from "./KeystrokeText"
const KeystrokeRecording = () =>{

    const [display,Update] = useState('')
    const placeholder = {
        text: ""
    }

    React.useEffect(() =>{
      document.addEventListener("keyup",function (event) {
        
        refresh(event)
      })
      }, []);

    

    function refresh(event)
    {
      placeholder.text = placeholder.text + event.key 
      console.log(`Tecla: ${placeholder.text} `);
      Update(placeholder.text)
    }


return (
    <Fragment>
      <KeystrokeText text = {display} />
    </Fragment>
  );
};

export default KeystrokeRecording;