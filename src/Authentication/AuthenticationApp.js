import React,{ useEffect,useState} from "react";
import { Switch, Route, Redirect,useParams,useHistory} from "react-router-dom";
import './AuthenticationApp.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Success from './Success';
import Failed from './Failed';
import Home from './AuthHome';
import EmailVerification from "./emailVerification";
import EmailSuccess from "./emailSuccess";
import App from '../App';


export default function AuthenticationApp() {

  const ExternalRedirect = ({ to, ...routeProps }) => {
    return <Route {...routeProps} render={() => window.location = to} />;
  };

  return (
    <div className="AuthenticationApp">

      <Switch>
        <Route exact path="/"><Home/></Route>

        {/* <Route exact path="/app"><App/></Route> */}
      
        <ExternalRedirect exact path="/app" to="https://pizza-demo1--dreamy-frangollo-39e8eb.netlify.app/" />
       
        <Route exact path="/signup" ><SignUp/></Route>

        <Route exact path="/success" ><Success /></Route>
        
        <Route  exact path="/signin" ><SignIn /></Route>

        <Route exact path="/failed"><Failed /></Route>

        <Route exact path="/email"><EmailVerification /></Route>

        <Route exact path="/emailsuccess" ><EmailSuccess /></Route>

      </Switch>
    </div>
  );
}



