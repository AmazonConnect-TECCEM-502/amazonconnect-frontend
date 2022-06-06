/*
  Author:
  Description: Show the statistics of the agent

  Usage:
  <AgentStatics />
*/

const user_id = localStorage.getItem("user_id");

function AgentStatics() {
  return(
  <div>
    <iframe
        width="1200"
        height="900"
        src={"https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c2baec29-5368-4e6f-be83-fffa16bb7702?directory_alias=amazonconnectbancos#p.agent=" + user_id}>
    </iframe>
  </div>);
}

export default AgentStatics;
