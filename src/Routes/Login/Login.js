import React, { useState } from "react";
import "./Login.css";
import Grid from "@mui/material/Grid";
import Alert from "@mui/material/Alert";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useStateValue } from "../../Contexts/StateProvider";
import { actionTypes } from "../../Contexts/StateReducer";
import axios from "axios";
import { setLocalStorage } from "../../utils/LocalStorageHelper";

const Login = () => {
  // eslint-disable-next-line no-empty-pattern
  const [ {}, dispatch] = useStateValue();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  //User Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return setError("Please enter a valid email and password");

    const user = {
      email,
      password,
    };

    axios
      .post("https://reqres.in/api/login", user)
      .then((response) => {
        setLocalStorage({ email, token: response.data.token });
        dispatch({
          type: actionTypes.SET_USER,
          user: { email, token: response.data.token },
        });
      })
      .catch(({ response }) => {
        setError(response.data.error);
      });
  };

  return (
    <Grid container spacing={2}>
      <Grid
        className="myContainer left"
        item
        md={6}
        display={{ xs: "none", md: "block" }}
      ></Grid>
      <Grid className="myContainer right" item md={6}>
        <div className="loginContainer">
          <h2 className="header">To-Do App</h2>
          {error && (
            <Alert
              severity="error"
              onClose={() => {
                setError(null);
              }}
            >
              {error}
            </Alert>
          )}
          <form
            className="loginForm"
            onSubmit={(e) => handleLogin(e)}
            autoComplete="on"
          >
            <div className="formControl">
              <EmailOutlinedIcon
                className="icon icon-left"
                style={{ fill: "#737272" }}
              />
              <input
                type="email"
                className="input"
                placeholder="Email ID"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="formControl">
              <HttpsOutlinedIcon
                className="icon icon-left"
                style={{ fill: "#737272" }}
              />
              <input
                type={showPassword ? "text" : "password"}
                className="input"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <VisibilityOff
                  onClick={() => setShowPassword(false)}
                  className="icon icon-right"
                />
              ) : (
                <Visibility
                  onClick={() => setShowPassword(true)}
                  className="icon icon-right"
                />
              )}
            </div>

            <button className="btn">Login</button>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Login;
