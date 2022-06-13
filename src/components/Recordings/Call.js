import { Fragment } from "react";

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
            <b>Rating:</b> {props.rating}
          </p>
          <p>
            <b>Date:</b> {props.date}
          </p>
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
