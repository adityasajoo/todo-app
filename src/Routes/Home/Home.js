import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./Components/SideNav";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <SideNav />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
