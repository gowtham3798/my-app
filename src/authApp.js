import React from "react";
import { StyledContainer } from "./loginComponent/styles";
import {Switch, Route } from "react-router-dom";
import './authApp.css'
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";

function AuthApp(){
    return(
        
        <StyledContainer>

        <Switch>
        <Route exact path="/">
        <Home />
        </Route>
        </Switch>
        
        <Switch>
        <Route path="/signup">
        <SignUp />
        </Route>
        </Switch>
        
        <Switch>
        <Route path="/login">
        <Login />
        </Route>
        </Switch>
        
        <Switch>
        <Route path="/dashboard">
        <Dashboard />
        </Route>
        </Switch>
        
        </StyledContainer>
    
    )
}

export default AuthApp;