import React from "react";
import Nav from "./Nav";
import TaskList from "./TaskList";
import {BRANCHES} from '../../../utils/Constants'


const Dashboard = () => {
  return (
    <div className="dashboard-contianer" style={{ height: "100%" }}>
      <Nav />
      <div className="dashboard">
        {BRANCHES.map((branch) => (
          <TaskList
            branch={branch}
            key={branch}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
