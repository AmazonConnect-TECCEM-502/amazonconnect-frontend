import "./App.css";
import "./style/style.css";
import { Route, Routes } from "react-router-dom";
import AgentMain from "./components/AgentView/AgentMain";
import ManagerMain from "./components/ManagerViews/ManagerMain";
import ManagerAgentsDashboard from "./components/ManagerViews/ManagerAgentsDashboard";
import ManagerOverview from "./components/ManagerViews/ManagerOverview";
import ManagerSettings from "./components/ManagerViews/ManagerSettings";
import ManagerProfile from "./components/ManagerViews/ManagerProfile";
import LogIn from "./components/LogIn/LogIn";
import AgentStatics from "./components/AgentView/AgentStatics";
import AgentCapacitation from "./components/AgentView/AgentCapacitations";
import AgentSettings from "./components/AgentView/AgentSettings";
import AgentProfile from "./components/AgentView/AgentProfile";
import AdminMain from "./components/AdminViews/AdminMain";
import AdminSettings from "./components/AdminViews/AdminSettings";
import AdminProfile from "./components/AdminViews/AdminProfile";
import AdminConfiguration from "./components/AdminViews/AdminConfiguration";
import ManagerCalls from "./components/ManagerViews/Calls";
import VerifCode from "./components/LogIn/VerifCode";

import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [theme, setTheme] = useState("light");

  const getTheme = (newTheme) => {
    setTheme(newTheme);
  };

  const createCursor = (x, y) => {
    const cursor = document.createElement('div')
    cursor.className = 'app-cursor'
    cursor.style.display = "block";
    cursor.style.top = (y) + "px";
    cursor.style.left = (x) + "px";
    if(theme === "light" || 
      theme === "light-protanopia" || 
      theme === "light-tritanopia")
      {
      cursor.style.border = "2px solid #000";
    } else {
      cursor.style.border = "2px solid rgb(192, 192, 93)";
    }
    return cursor;
  }

  const removeCursor = cursor => {
    const timeout = setTimeout(() => {
      cursor.remove();
      clearTimeout(timeout);
    }, 1000)
  }
  useEffect(() => {
    document.body.addEventListener('click', event => {
      console.log("click");
      const cursor = createCursor(event.pageX, event.pageY);
      document.body.append(cursor);
      removeCursor(cursor);
      console.log("entre");
    })
  })

  return (
    <div className="App" data-theme={theme}>
      <NavBar newTheme={getTheme}/>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/verifCode" element={<VerifCode />} />
        <Route path="/agent/home" element={<AgentMain />} />
        <Route path="/agent/statics" element={<AgentStatics />} />
        <Route path="/agent/capacitations" element={<AgentCapacitation />} />
        <Route
          path="/agent/settings"
          element={<AgentSettings newTheme={getTheme} />}
        />
        <Route path="/agent/profile" element={<AgentProfile />} />

        <Route path="/manager/home" element={<ManagerMain />} />
        <Route path="/manager/dashboard" element={<ManagerAgentsDashboard />} />
        <Route path="/manager/overview" element={<ManagerOverview />} />
        <Route path="/manager/calls" element={<ManagerCalls />} />
        <Route
          path="/manager/settings"
          element={<ManagerSettings />}
        />
        <Route path="/manager/profile" element={<ManagerProfile />} />

        <Route path="/admin/home" element={<AdminMain />} />
        <Route
          path="/admin/settings"
          element={<AdminSettings newTheme={getTheme} />}
        />
        <Route path="/admin/profile" element={<AdminProfile />} />
        <Route path="/admin/configuration" element={<AdminConfiguration />} />
      </Routes>
      <div>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
