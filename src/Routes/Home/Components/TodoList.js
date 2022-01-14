import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";
import { useStateValue } from "../../../Contexts/UserProvider";
import { actionTypes } from "../../../Contexts/UserReducer";


const branchClassNames = {
  todo: "todo-branch",
  progress: "progress-branch",
  done: "done-branch",
};
const branchHeader = {
  todo: "To-Do",
  progress: "In-Progress",
  done: "Done",
};

const TodoList = ({ branch,onDragOver,onDrop,onDragStart }) => {
  const [{ todoList }, dispatch] = useStateValue();

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
        {todoList
          .filter((todo, i) => todo.branch === branch)
          .map((todo, i) => (
            <Todo key={i} todo={todo} onDragStart={onDragStart} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  branch: "todo",
};
