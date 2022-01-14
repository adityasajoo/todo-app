import React from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <ul className="navbarItemsLeft">
        <li>
          <button className="myBtn" style={{width: '100px'}} onClick={() => navigate("add")}>New Task</button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

