import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
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
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

export default EditTask;
