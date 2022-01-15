import React from "react";
import Nav from "./Nav";
import TodoList from "./TodoList";
import "./Dashboard.css";
import {BRANCHES} from '../../../utils/items'


const Dashboard = () => {
  return (
    <div className="dashboard-contianer" style={{ height: "100%" }}>
      <Nav />
      <div className="dashboard">
        {BRANCHES.map((branch) => (
          <TodoList
            branch={branch}
            key={branch}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
