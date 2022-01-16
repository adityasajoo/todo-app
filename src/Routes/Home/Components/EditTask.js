import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import React from "react";
import AddTask from "./AddTask";

const EditTask = ({ open, handleClose, task }) => {

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width: "100%" }}
      >
        <DialogTitle id="alert-dialog-title">{"Edit Task"}</DialogTitle>
        <DialogContent>
            <AddTask isEdit handleClose={handleClose} task={task}/>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditTask;
