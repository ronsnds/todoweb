import React from "react";
import ReactDOM from "react-dom";
import "./styles/reset.css";
import Home from "./pages/home";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);
reportWebVitals();
