/*
  Author: 
  Description: Show the statistics of the agent

  Usage:
  <AgentStatics />
*/
import NavBar from "../NavBar/NavBar";

function AgentStatics() {
  return(
  <div>
      <NavBar />
    <iframe
        width="1200"
        height="900"
        src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c2baec29-5368-4e6f-be83-fffa16bb7702?directory_alias=amazonconnectbancos#p.agent=7">
    </iframe>
  </div>);
}

export default AgentStatics;