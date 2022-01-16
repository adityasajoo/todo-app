import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Tooltip, useMediaQuery } from "@mui/material";
import { len, BRANCHES } from "../../../utils/Constants";
import React, { useState } from "react";
import EditTask from "./EditTask";

const Task = ({ task, onDragStart, changeBranch, deleteTodo }) => {
  const matches = useMediaQuery("(min-width:800px)");
  const [editModel, setEditModel] = useState(false);

  /**Handle branch change buttons
   * Next and prev are calculated based on the tasks branch
   * This buttons are visible onlt in small screens
   */
  const i = BRANCHES.indexOf(task.branch);
  const prev = BRANCHES[(i + len - 1) % len];
  const next = BRANCHES[(i + 1) % len];

  const closeModel = () => {
    setEditModel(false);
  };

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
          <div>
            <Tooltip title="Edit Task">
              <EditIcon
                onClick={() => setEditModel(true)}
                fontSize="small"
                sx={{ color: "#80878f", marginRight: "20px" }}
              />
            </Tooltip>
            <EditTask open={editModel} handleClose={closeModel} task={task} />

            <Tooltip title="Delete Task">
              <DeleteIcon
                onClick={() => deleteTodo(task.id)}
                fontSize="small"
                sx={{ color: "#80878f" }}
              />
            </Tooltip>
          </div>
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
