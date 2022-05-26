/*
  Author: Diego Armando Ulibarri Hernández
  Description: groups the boards and the cards 
  that the agent will occupy

  Usage:
  <AgentMain />
*/

import AgentBoard from "../AgentCards/AgentBoard";
import Card from "../AgentCards/Card";
import Menu from "../Menu/Menu";
import Recording from "../Recordings/Recording";
import QuestionList from "../AgentCards/QuestionList";
import ClientCard from "../ClientCard/ClientCard";
import ProblemCategoryList from "../AgentCards/ProblemCategoryList";
import AnswerList from "../AgentCards/AnswerList";
import ProductCard from "../SalesCard/ProductCard";
import NavBar from "../NavBar/NavBar";
import CardsProvider from "../AgentCards/CardsProvider";

function AgentMain() {
  return (
    <CardsProvider>
      <NavBar />
      <div className="agent-container">
        <AgentBoard id="board-1" className="board board-menu">
          <Card id="card-1" draggable="false" component={<Menu />} />
          <Card id="card-2" draggable="false" component={<Recording />} />
        </AgentBoard>

        <AgentBoard id="board-2" className="board">
          <Card
            id="card-5"
            draggable="true"
            component={<ProblemCategoryList />}
          />
          <Card id="card-3" draggable="true" component={<QuestionList />} />
          <Card id="card-6" draggable="true" component={<AnswerList />} />
        </AgentBoard>


        <AgentBoard id="board-3" className="board">
          <Card
            id="card-4"
            draggable="true"
            component={
              <ClientCard
                image="IconClient"
                fname="Rosa"
                lname="Example"
                email="example@gmail.com"
                phone="55 5555 5555"
              />
            }
          />
          <Card
            id="card-7"
            draggable="true"
            component={
              <ProductCard
                products={{
                  internet: {
                    image: "ejemploTelmex",
                    name: "Internet plan",
                    price: "100",
                    desc: "Un plan de servicio de Internet con una velocidad de 50 megas.",
                  },
                  TV: {
                    image: "ejemploTelmex",
                    name: "TV plan",
                    price: "150",
                    desc: "Un plan de servicio de TV con 100 canales.",
                  },
                  mobile: {
                    image: "ejemploTelmex",
                    name: "Mobile roaming plan",
                    price: "200",
                    desc: "Un plan de datos celulares con un limite de consumo de ancho de banda de 1 gigabyte.",
                  },
                }}
              />
            }
          />
        </AgentBoard>
      </div>
    </CardsProvider>
  );
}

export default AgentMain;
