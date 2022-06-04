import { useEffect, useState } from "react";

function ManagerMain() {
  const [name, setName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const header = new Headers({ Authorization: token });
    fetch("http://localhost:8080/user/readUser", {
      method: "GET",
      headers: header,
    })
      .then((response) => response.json())
      .then((result) => {
        setName(() => result.first_name);
      });
  }, []);

  return (
    <div className="manager-container">
      <h1>Welcome home,</h1>
      <h1>{name}!</h1>
    </div>
  );
}

export default ManagerMain;
