import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router";

import "./styles/common.scss";
import "./styles/reset.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router />
  </>
);