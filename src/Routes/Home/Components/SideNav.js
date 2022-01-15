import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material";
import { useStateValue } from "../../../Contexts/StateProvider";
import { actionTypes } from "../../../Contexts/StateReducer";
import { removeLocalStorage } from "../../../utils/LocalStorageHelper";

const SideNav = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();

  const navigate = useNavigate();
  const location = useLocation();

  //State of MUI Menu
  const [open, setOpen] = React.useState(false);

  /*Logout user  */ 
  const handleLogout = () => {
    dispatch({ type: actionTypes.REMOVE_USER });
    removeLocalStorage();
  };

  /* Display Analytic button only on the Dashboard*/
  const isDashboard = location.pathname === "/";

  return (
    <div className="sideNav">
      <ul className="sideNavList">
        <div className="userProfile">
          <div className="userPicture" onClick={() => setOpen(true)}></div>
          <Dialog
            open={open}
            keepMounted
            onClose={() => setOpen(false)}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Do you want to Logout ?"}</DialogTitle>
            <DialogActions>
              <Button onClick={() => setOpen(false)}>No</Button>
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
