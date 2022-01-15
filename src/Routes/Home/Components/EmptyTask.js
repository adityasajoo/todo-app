import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyTask = () => {
    const navigate = useNavigate();
  return (
    <div className="empty-task-container">
      <h3>You don't have any tasks added.</h3>
      <h3> Add them now !</h3>
      <button
        className="button"
        style={{ width: "100px" }}
        onClick={() => navigate("add")}
      >
        New Task
      </button>
    </div>
  );
};

export default EmptyTask;
