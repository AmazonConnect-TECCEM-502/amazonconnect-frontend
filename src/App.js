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
import ManagerConfiguration from "./components/ManagerViews/ManagerConfiguration";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/agent/home" element={<AgentMain />} />
          <Route path="/agent/statics" element={<AgentStatics />} />
          <Route path="/agent/capacitations" element={<AgentCapacitation />} />
          <Route path="/agent/settings" element={<AgentSettings />} />
          <Route path="/agent/profile" element={<AgentProfile/>} />
          

          <Route path="/manager/home" element={<ManagerMain />} />
          <Route
            path="/manager/dashboard"
            element={<ManagerAgentsDashboard/>}
          />
          <Route path="/manager/overview" element={<ManagerOverview />} />
          <Route path="/manager/settings" element={<ManagerSettings />} />
          <Route path="/manager/profile" element={<ManagerProfile />} />
          <Route path="/manager/Configuration" element = {<ManagerConfiguration />} />
        </Routes>
      </div>
  );
}

export default App;
