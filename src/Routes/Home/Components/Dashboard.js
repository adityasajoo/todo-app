import React from "react";
import Nav from "./Nav";
import TodoList from "./TodoList";
import "./Dashboard.css";
import { actionTypes } from "../../../Contexts/UserReducer";
import { useStateValue } from "../../../Contexts/UserProvider";

const branches = ["todo", "progress", "done"];

const Dashboard = () => {
  const [{ todoList }, dispatch] = useStateValue();

  const onDragStart = (e, id) => {
    e.dataTransfer.setData("id", id);
  };

  const onTouchStart = (e,id) =>{
    console.log("Touched");
  }

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
    console.log(currentTodo);
  };

  return (
    <div className="dashboard-contianer" style={{ height: "100%" }}>
      <Nav />
      <div className="dashboard">
        {branches.map((branch) => (
          <TodoList
            branch={branch}
            key={branch}
            onDragStart={onDragStart}
            onDrop={onDrop}
            onDragOver={onDragOver}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
