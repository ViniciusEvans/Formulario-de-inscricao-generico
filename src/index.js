import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Rotas from "./rotas.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>{" "}
  </React.StrictMode>,
  document.getElementById("root")
);
