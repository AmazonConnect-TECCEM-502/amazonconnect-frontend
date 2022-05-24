import "./App.css";
import "./style/style.css";
import { Route, Routes } from "react-router-dom";
import CardsProvider from "./components/AgentCards/CardsProvider";
import AgentMain from "./components/AgentMain";
import ManagerMain from "./components/ManagerViews/ManagerMain";
import ManagerAgentsDashboard from "./components/ManagerViews/ManagerAgentsDashboard";
import ManagerOverview from "./components/ManagerViews/ManagerOverview";
import ManagerSettings from "./components/ManagerViews/ManagerSettings";
import ManagerProfile from "./components/ManagerViews/ManagerProfile";
import NavBar from "./components/NavBar/NavBar";
import LogIn from "./components/LogIn/LogIn";

function App() {
  return (
    <CardsProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/agent/home" element={<AgentMain />} />
          <Route path="/agent/statics" element={<AgentMain />} />
          <Route path="/agent/capacitations" element={<AgentMain />} />
          <Route path="/agent/settings" element={<AgentMain />} />
          <Route path="/agent/profile" element={<AgentMain />} />

          <Route path="/manager/home" element={<ManagerMain />} />
          <Route
            path="/manager/agentsdashboard"
            element={<ManagerAgentsDashboard />}
          />
          <Route path="/manager/overview" element={<ManagerOverview />} />
          <Route path="/manager/settings" element={<ManagerSettings />} />
          <Route path="/manager/profile" element={<ManagerProfile />} />
        </Routes>
      </div>
    </CardsProvider>
  );
}

export default App;
