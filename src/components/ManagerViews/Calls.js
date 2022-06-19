/*
Author: José Benjamín Ruiz García
Component that represents the Calls page in the manager's profile
it shows all the calls stores in our database and it allows the manager to
filter the calls according to his o her needs.
*/

import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Select from "react-select";
import Call from "../Recordings/Call";

function ManagerCalls() {
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
        },
      },
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const user_type = localStorage.getItem("user_type");
  const navigate = useNavigate();

  useEffect(() => {
    if (user_type === "") {
      navigate("/");
    } else if (user_type !== "manager") {
      navigate(-1);
    }
    // Get all calls from our database and store them in an array with objects that represent a call
    fetch(`${process.env.REACT_APP_BACKEND_URL}/call/getCalls`)
      .then((response) => response.json())
      .then((calls) => {
        // Array in which calls are stored
        const newArr = calls.map((call) => {
          const categories = [];
          if (call.Problem_categories.length === 0) {
            categories.push("uncategorized");
          } else {
            call.Problem_categories.forEach((category) => {
              categories.push(category.category_name);
            });
          }
          // Get the date in a more visually engaging format
          const date = call.created.substring(0, 10);
          const hour = call.created.substring(11, 13);
          const int = parseInt(hour);
          var sum = int - 5;
          var time;
          if (sum < 0) {
            sum = 24 + sum;
          }
          if (sum < 10) {
            time = "0" + sum.toString();
          } else {
            time = sum.toString();
          }
          time = time + call.created.substring(13, 19);
          // Object wich represents a call with all its metadata
          const newCall = {
            video_url: call.video_url,
            duration: call.duration,
            rating: call.rating,
            client: `${call.Client.first_name} ${call.Client.last_name}`,
            agent: `${call.User.first_name} ${call.User.last_name}`,
            date: `${date} ${time}`,
            categories: categories,
          };
          return newCall;
        });
        setVideosArr(newArr);
      })
      .catch((error) => console.log(error));
    // Get all the categories for the filter options
    fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/getProblemCategorys`)
      .then((response) => response.json())
      .then((categories) => {
        const categoriesBD = categories.map((category) => {
          return { name: category.category_name, id: category.category_id };
        });

        setCategoriesFilter(categoriesBD);
      });
    // Get all the agents for the filter options
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/agentIds`)
      .then((response) => response.json())
      .then((agents) => {
        const agentsBD = agents.map((agent) => {
          return {
            name: `${agent.first_name} ${agent.last_name} : ${agent.user_id}`,
            id: agent.user_id,
          };
        });

        setAgentsFilter(agentsBD);
      });
    // Get all the clients for the filter options
    fetch(`${process.env.REACT_APP_BACKEND_URL}/user/clientIds`)
      .then((response) => response.json())
      .then((clients) => {
        const clientsBD = clients.map((client) => {
          return {
            name: `${client.first_name} ${client.last_name} : ${client.client_id}`,
            id: client.client_id,
          };
        });

        setClientsFilter(clientsBD);
      });
  }, [user_type, navigate]);

  // Define all state variables where filters and calls are going to be stored
  const [videosArr, setVideosArr] = useState([]);

  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [selectedCategories, setselectedCategories] = useState([]);

  const [agentsFilter, setAgentsFilter] = useState([]);
  const [selectedAgents, setSelectedAgents] = useState([]);

  const [clientsFilter, setClientsFilter] = useState([]);
  const [selectedClients, setSelectedClients] = useState([]);

  const [selectedRatings, setSelectedRatings] = useState([]);

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  // In this section of the code we set all of the options for the filters
  const categoryOptions = [
    {
      options: categoriesFilter.map((category) => {
        return { label: category.name, value: category.id };
      }),
    },
  ];

  const agentOptions = [
    {
      options: agentsFilter.map((agent) => {
        return { label: agent.name, value: agent.id };
      }),
    },
  ];

  const clientOptions = [
    {
      options: clientsFilter.map((client) => {
        return { label: client.name, value: client.id };
      }),
    },
  ];

  const ratingOptions = [
    { label: "Bad", value: 1 },
    { label: "Neutral", value: 2 },
    { label: "Good", value: 3 },
  ];

  // In this section of the code we obtain the values that the user selected in the filters
  // and store them in an array which will be sent to our backend
  const updateCategoriesList = (newValue) => {
    const tempArray = newValue.map((value) => {
      return value.value;
    });
    setselectedCategories(tempArray);
  };

  const updateAgentsList = (newValue) => {
    const tempArray = newValue.map((value) => {
      return value.value;
    });
    setSelectedAgents(tempArray);
  };

  const updateClientsList = (newValue) => {
    const tempArray = newValue.map((value) => {
      return value.value;
    });
    setSelectedClients(tempArray);
  };

  const updateRatingsList = (newValue) => {
    const tempArray = newValue.map((value) => {
      return value.value;
    });
    setSelectedRatings(tempArray);
  };

  const changeDay = (event) => {
    if (event.target.value > 31) {
      setDay(31);
    } else if (event.target.value < 0) {
      setDay(1);
    } else {
      setDay(event.target.value);
    }
  };

  const changeMonth = (event) => {
    if (event.target.value > 12) {
      setMonth(12);
    } else if (event.target.value < 0) {
      setMonth(1);
    } else {
      setMonth(event.target.value);
    }
  };

  const changeYear = (event) => {
    if (event.target.value > 2022) {
      setYear(2022);
    } else if (event.target.value < 20) {
      setYear(20);
    } else {
      setYear(event.target.value);
    }
  };
  // Function that gets invocked when the user clicks on the search button and applies
  // all the filters that the user selected
  const applyFilters = async () => {
    // If the user clicks on search with no filters we get all the calls again
    if (
      selectedCategories.length === 0 &&
      selectedAgents.length === 0 &&
      selectedClients.length === 0 &&
      selectedRatings === 0 &&
      day === 0 &&
      month === 0 &&
      year === 0
    ) {
      fetch(`${process.env.REACT_APP_BACKEND_URL}/call/getCalls`)
        .then((response) => response.json())
        .then((calls) => {
          const newArr = calls.map((call) => {
            const categories = [];
            if (call.Problem_categories.length === 0) {
              categories.push("uncategorized");
            } else {
              call.Problem_categories.forEach((category) => {
                categories.push(category.category_name);
              });
            }

            const date = call.created.substring(0, 10);
            const hour = call.created.substring(11, 13);
            const int = parseInt(hour);
            var sum = int - 5;
            var time;
            if (sum < 0) {
              sum = 24 + sum;
            }
            if (sum < 10) {
              time = "0" + sum.toString();
            } else {
              time = sum.toString();
            }
            time = time + call.created.substring(13, 19);

            const newCall = {
              video_url: call.video_url,
              duration: call.duration,
              rating: call.rating,
              client: `${call.Client.first_name} ${call.Client.last_name}`,
              agent: `${call.User.first_name} ${call.User.last_name}`,
              date: `${date} ${time}`,
              categories: categories,
            };
            return newCall;
          });
          setVideosArr(newArr);
        })
        .catch((error) => console.log(error));
    }
    // This is the body we will send to our backend, it is modified based on the filters
    // that the user selected
    const json = {};

    if (selectedCategories.length !== 0) {
      json["categories"] = selectedCategories;
    }

    if (selectedAgents.length !== 0) {
      json["agents"] = selectedAgents;
    }

    if (selectedClients.length !== 0) {
      json["clients"] = selectedClients;
    }

    if (selectedRatings.length !== 0) {
      json["ratings"] = selectedRatings;
    }

    if (day !== 0) {
      json["day"] = day;
    }

    if (month !== 0) {
      json["month"] = month;
    }

    if (year !== 0) {
      json["year"] = year;
    }

    const body = JSON.stringify(json);

    // POST to our backend to get all the calls that have the filtered data
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/call/getCalls`, {
      method: "POST",
      body: body,
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((calls) => {
        const newArr = calls.map((call) => {
          const categories = [];
          if (call.Problem_categories.length === 0) {
            categories.push("uncategorized");
          } else {
            call.Problem_categories.forEach((category) => {
              categories.push(category.category_name);
            });
          }

          const date = call.created.substring(0, 10);
          const hour = call.created.substring(11, 13);
          const int = parseInt(hour);
          var sum = int - 5;
          var time;
          if (sum < 0) {
            sum = 24 + sum;
          }
          if (sum < 10) {
            time = "0" + sum.toString();
          } else {
            time = sum.toString();
          }
          time = time + call.created.substring(13, 19);

          const newCall = {
            video_url: call.video_url,
            duration: call.duration,
            rating: call.rating,
            client: `${call.Client.first_name} ${call.Client.last_name}`,
            agent: `${call.User.first_name} ${call.User.last_name}`,
            date: `${date} ${time}`,
            categories: categories,
          };
          return newCall;
        });
        setVideosArr(newArr);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Fragment>
      <div className="recordings-filters">
        <div>
          <Select
            isMulti={true}
            className="input-filters"
            autoFocus={true}
            isSearchable={true}
            defaultValue={selectedCategories}
            onChange={updateCategoriesList}
            placeholder={"Categories"}
            options={categoryOptions}
            maxMenuHeight={200}
          />
          <Select
            isMulti={true}
            className="input-filters"
            autoFocus={true}
            isSearchable={true}
            defaultValue={selectedAgents}
            onChange={updateAgentsList}
            placeholder={"Agents"}
            options={agentOptions}
            maxMenuHeight={200}
          />
          <Select
            isMulti={true}
            className="input-filters"
            autoFocus={true}
            isSearchable={true}
            defaultValue={selectedClients}
            onChange={updateClientsList}
            placeholder={"Clients"}
            options={clientOptions}
            maxMenuHeight={200}
          />
          <Select
            isMulti={true}
            className="input-filters"
            autoFocus={true}
            isSearchable={true}
            defaultValue={selectedRatings}
            onChange={updateRatingsList}
            placeholder={"Ratings"}
            options={ratingOptions}
            maxMenuHeight={200}
          />
        </div>
        <div>
          <input
            type="number"
            min={2000}
            onChange={changeYear}
            placeholder="YYYY"
            value={year !== 0 && year}
          />
          <input
            type="number"
            min={1}
            max={12}
            onChange={changeMonth}
            placeholder="MM"
            value={month !== 0 && month}
          />
          <input
            type="number"
            min={1}
            max={31}
            onChange={changeDay}
            placeholder="DD"
            value={day !== 0 && day}
          />
          <button className="btn-main" onClick={applyFilters}>
            Search
          </button>
        </div>
      </div>
      <div className="carousel-recordings">
        {videosArr.length > 2 && (
          <Slider {...settings}>
            {videosArr.map((video, index) => (
              <div className="card" key={index}>
                <Call
                  video_url={video.video_url}
                  duration={video.duration}
                  rating={video.rating}
                  client={video.client}
                  agent={video.agent}
                  date={video.date}
                  categories={video.categories}
                />
              </div>
            ))}
          </Slider>
        )}
        {videosArr.length < 3 && (
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            {videosArr.map((video, index) => (
              <div className="card" key={index}>
                <Call
                  video_url={video.video_url}
                  duration={video.duration}
                  rating={video.rating}
                  client={video.client}
                  agent={video.agent}
                  date={video.date}
                  categories={video.categories}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </Fragment>
  );
}

export default ManagerCalls;
