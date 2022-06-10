/*
  Author: Diego Armando Ulibarri Hernández
  Description: Component that contains the videos sended by the manager.

  Usage:
  <AgentCapacitation />
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Call from "../Recordings/Call";

function AgentCapacitation() {
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  /* Checking if the user is an agent, if not it will redirect to the previous page. */
  useEffect(() => {
    if(user_type === ""){
      navigate("/");
    }
    else if(user_type !== "agent"){
      navigate(-1);
    }

    fetch(`${process.env.REACT_APP_BACKEND_URL}/call/getCalls`)
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
  }, [user_type, navigate]);

  const [videosArr, setVideosArr] = useState([]);

  if (user_type === "agent") {
    return(
      <div className="carousel-recordings">
        {videosArr.map((video) => (
            <div className="card">
              <Call
                video_url={video.video_url}
                duration={video.duration}
                rating={video.rating}
                client={video.client}
                agent={video.agent}
              />
            </div>
        ))}
      </div>
    )
  }
}

export default AgentCapacitation;
