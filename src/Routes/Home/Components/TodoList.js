import React, { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const branchClassNames = {
  todo : "todo-branch",
  progress : "progress-branch",
  done : "done-branch",
}
const branchHeader = {
  todo : "To-Do",
  progress : "In-Progress",
  done : "Done",
}

const TodoList = ({ branch }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Walk", description: "Go for a walk", branch: "todo" },
    { id: 2, name: "Dance", description: "Dance in the Hall", branch: "todo" },
    { id: 3, name: "Sleep", description: " ", branch: "todo" },
    { id: 3, name: "Sleep", description: " ", branch: "progress" },
  ]);

  const changeBranch = (id,newBranch) => {
    const todo = todoList.filter((todo,i)=> todo.id===id);
    todo[0].branch = newBranch;
    setTodoList(todoList.filter((todo,i)=> todo.id!==id).concat(todo[0]));
  }

  return (
    <div className="todoList" id="todoList">
      <div className={`listHeader ${branchClassNames[branch]}`}>
        <p>{branchHeader[branch]}</p>
      </div>
      <div className="todoListBody">
        {todoList
          .filter((todo, i) => todo.branch === branch)
          .map((todo, i) => (
            <Todo key={i} todo={todo} />
          ))}
      </div>
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  branch: "todo",
};
