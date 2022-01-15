import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMediaQuery } from "@mui/material";
import { len, BRANCHES } from "../../../utils/items";
import React from "react";
import "./Todo.css";

const Todo = ({ todo, onDragStart, changeBranch, deleteTodo }) => {
  const matches = useMediaQuery("(min-width:800px)");

  const i = BRANCHES.indexOf(todo.branch);
  const prev = BRANCHES[(i + len - 1) % len];
  const next = BRANCHES[(i + 1) % len];

  return (
    <div
      draggable
      className="card"
      onDragStart={(e) => {
        onDragStart(e, todo.id);
      }}
      onClick={() => {
        console.log(next, prev);
      }}
    >
      <div className="card-content">
        <h3 className="card-name">
          {todo.name}{" "}
          <DeleteIcon
            onClick={() => deleteTodo(todo.id)}
            fontSize="small"
            sx={{ color: "#80878f" }}
          />
        </h3>
        <p className="card-description">
          {todo.description ? todo.description : "No Description"}
        </p>
        {!matches && (
          <div className="card-bottom">
            <KeyboardArrowLeftIcon
              onClick={() => changeBranch(todo.id, prev)}
            />
            <KeyboardArrowRightIcon
              onClick={() => changeBranch(todo.id, next)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Todo;
