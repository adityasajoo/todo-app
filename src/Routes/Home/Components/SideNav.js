import React from "react";
import "./SideNav.css";
import { useNavigate, useLocation } from "react-router-dom";
import PieChartIcon from "@mui/icons-material/PieChart";

const SideNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isDashboard = location.pathname === "/";

  return (
    <div className="sideNav">
      <ul className="sideNavList">
        <div className="userProfile">
          <div className="userPicture"></div>
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
