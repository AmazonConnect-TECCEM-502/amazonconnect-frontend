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

import { useState } from "react";
import { Toaster } from "react-hot-toast";

function App() {
  const [theme, setTheme] = useState("light");

  const getTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
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
          element={<ManagerSettings newTheme={getTheme} />}
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
