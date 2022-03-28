// import { StrictMode } from "react";
// import ReactDOM from "react-dom";
// import * as React from 'react';
// import { BrowserRouter as Router } from "react-router-dom";
// import { createStore } from "redux";
// import reducer from "./reducer";
// import { Provider } from "react-redux";
// // import GreatestPizza from "./App1";
// // import {Provider} from 'react-redux';
// import store from './auth/store'
// import App from "./App";



// // const store = createStore(
// //   reducer,
// //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// // );
// const rootElement = document.getElementById("root");
// ReactDOM.render(
//   <StrictMode>
//   <Router>
//   <Provider store={store}>
//      <App />
//     {/* <GreatestPizza /> */}
//    </Provider>
//   </Router>
  
//    </StrictMode>
//   ,rootElement
// );

// import { StrictMode } from "react";
import ReactDOM from "react-dom";
import * as React from 'react';
import { Provider } from "react-redux";
import store from './auth/store';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    <Provider store={store}>
     <App />
    </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
