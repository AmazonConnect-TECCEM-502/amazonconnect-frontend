import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import CardsProvider from "../AgentCards/CardsProvider";
import Settings from "../AgentCards/Setting";
import NavBar from "../NavBar/NavBar";

function AgentSettings() {
    return (
      <div>
      <CardsProvider>
      <NavBar />
        <AgentBoard>
          <Card id="card-7" draggable="true" component={ <Settings />}/>
        </AgentBoard>
      </CardsProvider>
      </div>
    );
  }
  
  export default AgentSettings;