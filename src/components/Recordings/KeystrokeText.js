import "../../style/Recordings/KeystrokeText.css"
const KeystrokeText = (props) => {
    return (
      <div className="scroll">
        <p>{props.text}</p>
      </div>
    );
  };
  
  export default KeystrokeText;
  