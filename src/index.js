import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./Contexts/StateProvider";
import reducer, { initialState } from "./Contexts/StateReducer";

ReactDOM.render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateProvider>,
  document.getElementById("root")
);

reportWebVitals();
