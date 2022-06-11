/*
  Author: Diego Armando Ulibarri Hernández
  Description: Component that contains the videos sended by the manager.

  Usage:
  <AgentCapacitation />
*/

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Call from "../Recordings/Call";

function AgentCapacitation() {
  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  // Setings for carousel
  const settings = {
    slidesToShow: 3,
    infinite: true,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };

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
        <Slider {...settings}>
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
        </Slider>
      </div>
    )
  }
}

export default AgentCapacitation;
