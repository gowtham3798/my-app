import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from "redux";
import reducer from "./reducer";
import { Provider } from "react-redux";
import AuthenticationApp from "./Authentication/AuthenticationApp"
import App from "./App";




const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
  <Router>
  <Provider store={store}>
     <App />
     {/* <AuthenticationApp /> */}
   </Provider>
  </Router>
  
   </StrictMode>
  ,rootElement
);

