import React from "react";
import Nav from "./Nav";
import TaskList from "./TaskList";
import { BRANCHES } from "../../../utils/Constants";
import { useStateValue } from "../../../Contexts/StateProvider";
import EmptyTask from "./EmptyTask";

const Dashboard = () => {
  const [{ taskList }] = useStateValue();

  return (
    <div className="dashboard-contianer" style={{ height: "100%" }}>
      <Nav />
      <div className="dashboard">
        {!taskList.length ? (
          <EmptyTask />
        ) : (
          BRANCHES.map((branch) => <TaskList branch={branch} key={branch} />)
        )}
      </div>
    </div>
  );
};

export default Dashboard;
