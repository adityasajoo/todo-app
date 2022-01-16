import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import SecondaryNav from "./SecondaryNav";
import { useStateValue } from "../../../Contexts/StateProvider";
import { v4 as uuid } from "uuid";
import { actionTypes } from "../../../Contexts/StateReducer";
import { useNavigate } from "react-router-dom";
import { setTasksLocalStorage } from "../../../utils/LocalStorageHelper";

const AddTask = ({ isEdit, handleClose, task }) => {
  const navigate = useNavigate();
  const [branch, setBranch] = useState(
    !isEdit
      ? {
          todo: true,
          progress: false,
          done: false,
        }
      : {
          todo: task && task.branch === "todo",
          progress: task && task.branch === "progress",
          done: task && task.branch === "done",
        }
  );
  const [taskName, setTaskName] = useState(task ? task.name : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [currentBranch, setCurrentBranch] = useState(
    task ? task.branch : "todo"
  );
  const [error, setError] = useState(null);

  const [{ taskList }, dispatch] = useStateValue();

  //Handle branch button change event
  const handleBranchChange = (selected) => {
    const branches = { todo: false, progress: false, done: false };
    branches[selected] = true;
    setBranch(branches); //Update button group
    setCurrentBranch(selected); //Set current branch to make saving easy
  };

  /*Create New Task 
    Creates new task if not found, else edits the existing task 
  */
  const handleCreate = (id) => {
    if (!taskName) {
      return setError("Task Name is required");
    }

    let newTask = taskList.find((task) => task.id === id);

    if (newTask) {
      let tempTaskist = taskList.filter((task) => task.id !== id);
      newTask.name = taskName;
      newTask.description = description;
      newTask.branch = currentBranch;
      dispatch({
        type: actionTypes.SET_TASK,
        taskList: [...tempTaskist, newTask],
      });
      setTasksLocalStorage([...tempTaskist, newTask]);
    } else {
      newTask = {
        id: uuid(),
        name: taskName,
        description: description,
        branch: currentBranch,
      };
      dispatch({
        type: actionTypes.SET_TASK,
        taskList: [...taskList, newTask],
      });
      setTasksLocalStorage([...taskList, newTask]);
    }

    setTaskName("");
    setDescription("");
    setCurrentBranch("todo");
    setBranch({ todo: true, progress: false, done: false });
    isEdit ? handleClose() : navigate("/");
  };

  return (
    <>
      {!isEdit && <SecondaryNav title="Create Task" />}{" "}
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
          <button className="cancel-btn" onClick={() => navigate("/")}>
            Cancel
          </button>
          {!isEdit ? (
            <button className="create-btn" onClick={handleCreate}>
              Create
            </button>
          ) : (
            <button
              className="create-btn"
              onClick={() => handleCreate(task.id)}
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default AddTask;

AddTask.defaultProps = {
  isEdit: false,
};
