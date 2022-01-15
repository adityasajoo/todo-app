import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import SecondaryNav from "./SecondaryNav";
import { useStateValue } from "../../../Contexts/UserProvider";
import { v4 as uuid } from "uuid";

import "./AddTodo.css";
import { actionTypes } from "../../../Contexts/UserReducer";
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
  const navigate = useNavigate();
  const [branch, setBranch] = useState({
    todo: true,
    progress: false,
    done: false,
  });
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [currentBranch, setCurrentBranch] = useState("todo");
  const [error, setError] = useState(null);

  const [{ todoList }, dispatch] = useStateValue();

  const handleBranchChange = (selected) => {
    const b = { todo: false, progress: false, done: false };
    b[selected] = true;
    setBranch(b);
    setCurrentBranch(selected);
  };

  const handleCreate = () => {
    if (!taskName) {
      return setError("Task Name is required");
    }
    const todo = {
      id: uuid(),
      name: taskName,
      description: description,
      branch: currentBranch,
    };
    console.log("TODO : ",todo)
    dispatch({ type: actionTypes.SET_TODO, todoList: [...todoList, todo] });
    setTaskName("");
    setDescription("");
    navigate("/");
  };

  return (
    <>
      <SecondaryNav title="Create Task" />
      <div className="todo-form">
        <div>
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                setError(null);
              }}
            >
              {error}
            </Alert>
          )}
          <p className="label">Enter Task Name</p>
          <input
            type="text"
            className="todo-input"
            placeholder="Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>
        <div>
          <p className="label">Enter Description</p>
          <textarea
            type="textarea"
            className="todo-textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <p className="label">Branch to</p>
          <div className="btnGroup">
            <button
              className={`todo-btn ${branch.todo ? "selected" : ""}`}
              onClick={() => handleBranchChange("todo")}
            >
              To-Do
            </button>
            <button
              className={`todo-btn ${branch.progress ? "selected" : ""}`}
              onClick={() => handleBranchChange("progress")}
            >
              In-Progress
            </button>
            <button
              className={`todo-btn ${branch.done ? "selected" : ""}`}
              onClick={() => handleBranchChange("done")}
            >
              Done
            </button>
          </div>
        </div>
        <div className="btns">
          <button className="cancel-btn" onClick={() => navigate('/')}>Cancel</button>
          <button className="create-btn" onClick={handleCreate}>
            Create
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTodo;
