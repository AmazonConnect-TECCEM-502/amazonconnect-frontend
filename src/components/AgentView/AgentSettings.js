import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import CardsProvider from "../AgentCards/CardsProvider";
import NavBar from "../NavBar/NavBar";
import Recording from "../Recordings/Recording";

function AgentSettings() {
    return (
      <div>
      <CardsProvider>
      <NavBar />
      <AgentBoard>
      <Card id="card-7" draggable="true" component={ <Recording />}/>
      </AgentBoard>
      </CardsProvider>
      </div>
    );
  }
  
  export default AgentSettings;