import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import { useMediaQuery } from "@mui/material";
import { len, BRANCHES } from "../../../utils/items";
import React from "react";


const Task = ({ task, onDragStart, changeBranch, deleteTodo }) => {
  const matches = useMediaQuery("(min-width:800px)");

  const i = BRANCHES.indexOf(task.branch);
  const prev = BRANCHES[(i + len - 1) % len];
  const next = BRANCHES[(i + 1) % len];

  return (
    <div
      draggable
      className="card"
      onDragStart={(e) => {
        onDragStart(e, task.id);
      }}
      onClick={() => {
        console.log(next, prev);
      }}
    >
      <div className="card-content">
        <h3 className="card-name">
          {task.name}{" "}
          <DeleteIcon
            onClick={() => deleteTodo(task.id)}
            fontSize="small"
            sx={{ color: "#80878f" }}
          />
        </h3>
        <p className="card-description">
          {task.description ? task.description : "No Description"}
        </p>
        {!matches && (
          <div className="card-bottom">
            <KeyboardArrowLeftIcon
              onClick={() => changeBranch(task.id, prev)}
            />
            <KeyboardArrowRightIcon
              onClick={() => changeBranch(task.id, next)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
