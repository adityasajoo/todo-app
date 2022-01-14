import React from "react";
import { Outlet } from "react-router-dom";
import SideNav from "./Components/SideNav";
import Nav from "./Components/Nav";
import { actionTypes } from "../../Contexts/UserReducer";
import { useStateValue } from "../../Contexts/UserProvider";
import "./Home.css";

const Home = ({ setToken, token }) => {
  const [{ user }, dispatch] = useStateValue();

  console.log("In Home :", user);

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
