import React from "react";
import Todo from "./Todo";
import "./TodoList.css";
import { useStateValue } from "../../../Contexts/UserProvider";
import { actionTypes } from "../../../Contexts/UserReducer";
import { branchClassNames, branchHeader } from "../../../utils/items";

const TodoList = ({ branch }) => {
  const [{ todoList }, dispatch] = useStateValue();

  const changeBranch = (id, newBranch) => {
    const currentTodo = todoList.filter((todo) => {
      if (todo.id === id) todo.branch = newBranch;
      return todo;
    });
    dispatch({
      type: actionTypes.SET_TODO,
      todoList: currentTodo,
    });
    console.log(currentTodo);
  };

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onTouchStart = (e, id) => {
    console.log("Touched");
  };

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, b) => {
    const id = e.dataTransfer.getData("id");
    console.log(b);
    const currentTodo = todoList.filter((todo) => {
      console.log("id", id, "todo : ", todo.id);
      if (todo.id == id) todo.branch = b;
      return todo;
    });
    dispatch({
      type: actionTypes.SET_TODO,
      todoList: currentTodo,
    });
  };

  const deleteTodo = (id) => {
    const newList = todoList.filter((todo) => todo.id !== id);
    dispatch({ type: actionTypes.SET_TODO,todoList:newList });
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
        {todoList
          .filter((todo, i) => todo.branch === branch)
          .map((todo, i) => (
            <Todo
              key={i}
              todo={todo}
              onDragStart={onDragStart}
              changeBranch={changeBranch}
              deleteTodo = {deleteTodo}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;

TodoList.defaultProps = {
  branch: "todo",
};
