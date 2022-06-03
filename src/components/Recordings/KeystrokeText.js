import "../../style/Recordings/KeystrokeText.css"
const KeystrokeText = (props) => {
  return (
    <div>
      <p className="title">KeyStrokes</p>
      <p>{props.text}</p>
    </div>
  );
};

export default KeystrokeText;
