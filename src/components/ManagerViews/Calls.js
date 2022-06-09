import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import Call from "../Recordings/Call";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function ManagerCalls() {
  useEffect(() => {
    fetch("http://localhost:8080/call/getCalls")
      .then((response) => response.json())
      .then((calls) => {
        const newArr = calls.map((call) => {
          const newCall = {
            video_url: call.video_url,
            duration: call.duration,
            rating: call.rating,
            client: `${call.Client.first_name} ${call.Client.last_name}`,
            agent: `${call.User.first_name} ${call.User.last_name}`,
          };
          return newCall;
        });
        setVideosArr(newArr);
      })
      .catch((error) => console.log(error));
  }, []);

  const [videosArr, setVideosArr] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <Fragment>
      <div className="App">
        <Select
          isMulti={true}
          autoFocus={true}
          isSearchable={true}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          placeholder={"Category"}
          options={options}
        />

        {videosArr.map((video) => (
          <div className="call">
            <div className="card">
              <Call
                video_url={video.video_url}
                duration={video.duration}
                rating={video.rating}
                client={video.client}
                agent={video.agent}
              />
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ManagerCalls;
