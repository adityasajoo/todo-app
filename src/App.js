import React, { useState } from "react";
import "./App.css";
import Login from "./Routes/Login/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/Home";
import Dashboard from "./Routes/Home/Components/Dashboard";
import AddTodo from "./Routes/Home/Components/AddTodo";
import { useStateValue } from "./Contexts/UserProvider";
import Analytics from "./Routes/Home/Components/Analytics";

function App() {
  const [{ user }] = useStateValue();
 
  return (
    <Routes>
      {!user ? (
        <Route path="/login" element={<Login />} />
      ) : (
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddTodo />} />
          <Route path="/analytics" element={<Analytics />} />
        </Route>
      )}
      <Route path="*" element={<Navigate to={user ? "/" : "/login"} />} />
    </Routes>
  );
}

export default App;
