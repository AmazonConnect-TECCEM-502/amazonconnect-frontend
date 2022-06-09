const Call = (props) => {
  return (
    <div>
      <video width="320" height="240" controls>
        <source src={props.video_url} type="video/mp4" />
      </video>
      <br />
      <br />
      <p>
        <b>Duration:</b> {props.duration}
      </p>
      <p>
        <b>Rating:</b> {props.rating}
      </p>
      <p>
        <b>Client:</b> {props.client}
      </p>
      <p>
        <b>Agent:</b> {props.agent}
      </p>
    </div>
  );
};

export default Call;
