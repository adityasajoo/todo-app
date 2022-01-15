import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useStateValue } from "../../../Contexts/StateProvider";
import { actionTypes } from "../../../Contexts/StateReducer";
import { removeLocalStorage } from "../../../utils/helper";

const SideNav = () => {
  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch({ type: actionTypes.REMOVE_USER });
    removeLocalStorage();
  };

  const isDashboard = location.pathname === "/";

  return (
    <div className="sideNav">
      <ul className="sideNavList">
        <div className="userProfile">
          <div className="userPicture" onClick={handleClickOpen}></div>
          <Dialog
            open={open}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Do you want to Logout ?"}</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose}>No</Button>
              <Button onClick={handleLogout}>Yes</Button>
            </DialogActions>
          </Dialog>

          <div className="userDetails">
            <ul className="userDetailsItems">
              <li className="username">Jonas Khanwald</li>
              <li className="email">jonas@todo.com</li>
            </ul>
          </div>
        </div>
        <li className="sideNavListItem">
          {isDashboard && (
            <button className="myBtn" onClick={() => navigate("/analytics")}>
              <PieChartIcon sx={{ marginRight: "10px" }} /> Analytics
            </button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
