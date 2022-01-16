import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import TaskList from "./TaskList";
import { BRANCHES } from "../../../Utils/Constants";
import { useStateValue } from "../../../Contexts/StateProvider";
import EmptyTask from "./EmptyTask";
import { Alert, Snackbar } from "@mui/material";
import { isNewUser } from "../../../Utils/LocalStorageHelper";


const Dashboard = () => {
  const [{ taskList }] = useStateValue();

  const [open, setOpen] = useState(false);

  useEffect(() => {
    taskList.length === 1 && isNewUser() && setOpen(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="dashboard-contianer" style={{ height: "100%" }}>
      <Nav />
      <div className="dashboard">
        {!taskList.length ? (
          <EmptyTask />
        ) : (
          BRANCHES.map((branch) => <TaskList branch={branch} key={branch} />)
        )}
      </div>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={5000}
      >
        <Alert
          onClose={() => setOpen(false)}
          severity="info"
          sx={{ width: "100%" }}
        >
          Task's support drag and drop! You are drag task's from one stage to
          another !!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Dashboard;
