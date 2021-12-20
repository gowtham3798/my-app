import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";





import App1 from "./App1";
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Router>

    <App1 />
  </Router>
  
  </StrictMode>,
  rootElement
);
