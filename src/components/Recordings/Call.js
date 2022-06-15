import { Fragment } from "react";
import { ImSad2, ImHappy2, ImNeutral2 } from "react-icons/im";

const Call = (props) => {
  return (
    <Fragment>
      <video width="100%" height="240" controls>
        <source src={props.video_url} type="video/mp4" />
      </video>
      <div className="video-info">
        <div>
          <p>
            <b>Duration:</b> {props.duration}
          </p>
          <p>
            <b>Date:</b> {props.date}
          </p>
          {props.rating === 1 && <ImSad2 size={25} className="sad" />}
          {props.rating === 2 && <ImNeutral2 size={25} className="neutral" />}
          {props.rating === 3 && <ImHappy2 size={25} className="happy" />}
        </div>
        <div>
          <p>
            <b>Client:</b> {props.client}
          </p>
          <p>
            <b>Agent:</b> {props.agent}
          </p>
          {props.categories.map((category) => (
            <p>{category}</p>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default Call;
