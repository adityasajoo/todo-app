import React from "react";
import Task from "./Task";
import { useStateValue } from "../../../Contexts/StateProvider";
import { actionTypes } from "../../../Contexts/StateReducer";
import { branchClassNames, branchHeader } from "../../../utils/items";

const TaskList = ({ branch }) => {
  const [{ taskList }, dispatch] = useStateValue();

  //Change branch of a task
  const changeBranch = (id, newBranch) => {
    const currentTodo = taskList.filter((todo) => {
      if (todo.id === id) todo.branch = newBranch;
      return todo;
    });
    dispatch({
      type: actionTypes.SET_TASK,
      taskList: currentTodo,
    });
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, b) => {
    const id = e.dataTransfer.getData("id");
    console.log(b);
    const currentTask = taskList.filter((task) => {
      if (task.id === id) task.branch = b;
      return task;
    });
    dispatch({
      type: actionTypes.SET_TASK,
      taskList: currentTask,
    });
  };

  const deleteTodo = (id) => {
    const newList = taskList.filter((task) => task.id !== id);
    dispatch({ type: actionTypes.SET_TASK,taskList:newList });
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
              deleteTodo = {deleteTodo}
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
