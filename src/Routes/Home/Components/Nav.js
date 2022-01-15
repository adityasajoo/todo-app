import React from "react";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Nav = () => {
  const navigate = useNavigate();
  const matches = useMediaQuery("(min-width:600px)");

  return (
    <nav className="navbar">
      <ul className="navbarItemsLeft">
        <li>
          {!matches && (
            <button
              className="button"
              style={{ width: "100px" }}
              onClick={() => navigate("/analytics")}
            >
              Analytics
            </button>
          )}
          <button
            className="button"
            style={{ width: "100px" }}
            onClick={() => navigate("add")}
          >
            New Task
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
