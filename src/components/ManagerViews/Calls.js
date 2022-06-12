import React, { Fragment, useEffect, useState } from "react";
import Select from "react-select";
import Call from "../Recordings/Call";

function ManagerCalls() {
  useEffect(() => {
    fetch(`http://localhost:8080/call/getCalls`)
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

          const newCall = {
            video_url: call.video_url,
            duration: call.duration,
            rating: call.rating,
            client: `${call.Client.first_name} ${call.Client.last_name}`,
            agent: `${call.User.first_name} ${call.User.last_name}`,
            date: `${call.created.substring(0, 10)}`,
            categories: categories,
          };
          return newCall;
        });
        setVideosArr(newArr);
      })
      .catch((error) => console.log(error));

    fetch(`${process.env.REACT_APP_BACKEND_URL}/problem/getProblemCategorys`)
      .then((response) => response.json())
      .then((categories) => {
        const categoriesBD = categories.map((category) => {
          return { name: category.category_name, id: category.category_id };
        });

        setCategoriesFilter(categoriesBD);
      });

    fetch("http://localhost:8080/user/agentIds")
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

    fetch("http://localhost:8080/user/clientIds")
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
  }, []);

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
    { label: "Good", value: 5 },
  ];

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
    if (tempArray.includes(2)) {
      tempArray.push(3);
    }
    setSelectedRatings(tempArray);
  };

  const changeDay = (event) => {
    setDay(event.target.value);
  };

  const changeMonth = (event) => {
    setMonth(event.target.value);
  };

  const changeYear = (event) => {
    setYear(event.target.value);
  };

  const applyFilters = async () => {
    if (
      selectedCategories.length === 0 &&
      selectedAgents.length === 0 &&
      selectedClients.length === 0 &&
      selectedRatings === 0 &&
      day === 0 &&
      month === 0 &&
      year === 0
    ) {
      fetch(`http://localhost:8080/call/getCalls`)
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

            const newCall = {
              video_url: call.video_url,
              duration: call.duration,
              rating: call.rating,
              client: `${call.Client.first_name} ${call.Client.last_name}`,
              agent: `${call.User.first_name} ${call.User.last_name}`,
              date: `${call.created.substring(0, 10)}`,
              categories: categories,
            };
            return newCall;
          });
          setVideosArr(newArr);
        })
        .catch((error) => console.log(error));
    }

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

    await fetch(`http://localhost:8080/call/getCalls`, {
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

          const newCall = {
            video_url: call.video_url,
            duration: call.duration,
            rating: call.rating,
            client: `${call.Client.first_name} ${call.Client.last_name}`,
            agent: `${call.User.first_name} ${call.User.last_name}`,
            date: `${call.created.substring(0, 10)}`,
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
      <div className="App">
        <Select
          isMulti={true}
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
          autoFocus={true}
          isSearchable={true}
          defaultValue={selectedRatings}
          onChange={updateRatingsList}
          placeholder={"Ratings"}
          options={ratingOptions}
          maxMenuHeight={200}
        />
        <input type="number" min={0} onChange={changeYear} placeholder="YYYY" />
        <input
          type="number"
          min={0}
          max={12}
          onChange={changeMonth}
          placeholder="MM"
        />
        <input
          type="number"
          min={0}
          max={31}
          onChange={changeDay}
          placeholder="DD"
        />
        <br />
        <button className="btn-main" onClick={applyFilters}>
          Search
        </button>
        <br />
        <br />
        {videosArr.map((video) => (
          <div className="call">
            <div className="call-card">
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
          </div>
        ))}
      </div>
    </Fragment>
  );
}

export default ManagerCalls;
