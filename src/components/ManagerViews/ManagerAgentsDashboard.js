/*
  Author: Maria Fernanda Ramirez Barragan, Octavio Andrick Sánchez Perusquia
  Description: It displays each agent in the database
  and show them to the manager in order to get each agent 
  dashboards
*/

const user_id = localStorage.getItem("user_id");

function ManagerAgentsDashboard() {
  return (
    <div>
      <iframe
        height="900"
        width="1200"
        src={"https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/559202700801/dashboards/c5a9e5b8-1d67-4e0c-9785-d58175d18898?directory_alias=amazonconnectbancos#p.manager="+user_id}
      ></iframe>
    </div>
  );
}

export default ManagerAgentsDashboard;
