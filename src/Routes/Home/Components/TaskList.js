import React from "react";
import Task from "./Task";
import { useStateValue } from "../../../Contexts/StateProvider";
import { actionTypes } from "../../../Contexts/StateReducer";
import { branchClassNames, branchHeader } from "../../../utils/Constants";
import {setTasksLocalStorage} from '../../../utils/LocalStorageHelper'

const TaskList = ({ branch }) => {
  const [{ taskList }, dispatch] = useStateValue();

  //Change branch of a task
  const changeBranch = (id, newBranch) => {
    const currentTask= taskList.filter((task) => {
      if (task.id === id) task.branch = newBranch;
      return task;
    });
    dispatch({
      type: actionTypes.SET_TASK,
      taskList: currentTask,
    });
    setTasksLocalStorage(currentTask)
  };

  /**Handle drag event
  Store the id of the dragged task to event**/
  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  //Handle drag over event
  const onDragOver = (e) => {
    e.preventDefault();
  };

  //Get the id of the dragged task and change its branch
  const onDrop = (e, newBranch) => {
    const id = e.dataTransfer.getData("id");
    changeBranch(id,newBranch)
  };

  //Delete the selected task
  const deleteTodo = (id) => {
    const newTasks= taskList.filter((task) => task.id !== id);
    dispatch({ type: actionTypes.SET_TASK, taskList: newTasks });
    setTasksLocalStorage(newTasks);
  };


  return (
    <div
      className="todoList"
      id="todoList"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => onDrop(e, branch)}
    >
      <div className={`listHeader ${branchClassNames[branch]}`}>
        <p>{branchHeader[branch]}</p>
      </div>
      <div className="todoListBody">
        {taskList
          .filter((task, i) => task.branch === branch)
          .map((task, i) => (
            <Task
              key={i}
              task={task}
              onDragStart={onDragStart}
              changeBranch={changeBranch}
              deleteTodo={deleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TaskList;

TaskList.defaultProps = {
  branch: "todo",
};
