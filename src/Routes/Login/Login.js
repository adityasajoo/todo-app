import React, { useState } from "react";
import "./Login.css";
import Alert from "@mui/material/Alert";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HttpsOutlinedIcon from "@mui/icons-material/HttpsOutlined";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useStateValue } from "../../Contexts/StateProvider";
import { actionTypes } from "../../Contexts/StateReducer";
import axios from "axios";
import { setLocalStorage } from "../../utils/LocalStorageHelper";
import ClipLoader from "react-spinners/ClipLoader";
import background from '../../assets/background.svg'

const Login = () => {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useStateValue();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  //User Inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //Handle user login
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password)
      return setError("Please enter a valid email and password");

    let user = {
      email,
      password,
    };

    setLoading(true);
    try {
      const response = await axios.post("https://reqres.in/api/login", user);

      //Get the user detials from reqres, to use it as the user placeholder.
      //id=4 is set a default value
      const userDetails = await axios.get("https://reqres.in/api/users/4");
      user = {
        email: userDetails.data.data.email,
        token: response.data.token,
        name:
          userDetails.data.data.first_name +
          " " +
          userDetails.data.data.last_name,
        avatar: userDetails.data.data.avatar,
      };
      setLoading(false);
      setLocalStorage(user);
      dispatch({
        type: actionTypes.SET_USER,
        user: user,
      });
    } catch (error) {
      setError(error.response.data.error);
      setLoading(false);
    }
  };

  return (
    <div className="myContainer">
      {loading && (
        <div className="loaderContainer">
          <ClipLoader loading={loading} size={200} />
        </div>
      )}
      <div className="leftContainer">
        <h2>Assignment</h2>
        <img className="background" src={background} alt="Error"/>
      </div>
      <div className="rightContainer">
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
      </div>
    </div>
  );
};

export default Login;
