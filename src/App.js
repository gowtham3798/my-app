import "./styles.css";
import React from "react";
import { Switch, Route, Redirect,useParams,useHistory } from "react-router-dom";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Menu } from "./Menu";
import {CustomizePizza} from "./CustomizePizza"
import HomePage from "./components/HomePage";

import Hero from "./components/Hero";

export default function App() {
    const [pizzaList,setList] = useState([]);
  const history = useHistory();
console.log(pizzaList);

  return (
    <div >
     
    <AppBar position="static">
    <nav className="menu-bar">
      <Toolbar>
      <Button color="inherit" onClick={() => history.push("/")}>
      Home
      </Button>
      </Toolbar>
      <Toolbar>
      <Button color="inherit" onClick={() => history.push("/menu")}>
      Menu
      </Button>
      </Toolbar>
      <Toolbar>
      <Button color="inherit" onClick={() => history.push("/customize")}>
      Customize
      </Button>
      </Toolbar>
      <Toolbar>
      <Button color="inherit" onClick={() => history.push("/orders")}>
      Place Order
      </Button>
      </Toolbar>
      </nav>
    </AppBar>

    <Switch>
      <Route exact path="/">
      <Hero />
      </Route>
      <Route path="/menu">
        <Menu pizzas={pizzaList} setList={setList}/>
      </Route>
      <Route path="/customize">
        <CustomizePizza />
      </Route>
      <Route path="/orders">
        <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
      <HomePage />
        </div>
      </Route>
    </Switch>
    </div>
  )
}

export function Pizzas({name,image,summary,id}){
    return (
        <div className="items">
        <div>
            <h2>{name}</h2>
            <img src={image} className="movie-img" />
            <p >{summary}</p>
        </div>
        
        </div>
    )
}
