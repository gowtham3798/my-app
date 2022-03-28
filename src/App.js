import "./styles.css";
import React from "react";
import { Switch, Route, Redirect,useParams,useHistory } from "react-router-dom";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Menu } from "./Menu";
import {NonVegMenu} from "./NonVeg";
import {CustomizePizza} from "./CustomizePizza"
import HomePage from "./components/HomePage";



import Hero from "./components/Hero";

export default function App() {
    const [pizzaList,setList] = useState([]);
    const [nonVegList,setNonVegList] = useState([]);
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
      <Button color="inherit" onClick={() => history.push("/allmenu")}>
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
       
       <Route path="/allmenu">
        <PizzaVarities />
       </Route>

       <Route path="/nonvegmenu">
        <NonVegMenu nonVegPizzas={nonVegList} setNonVegPizzas={setNonVegList}/>
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

function PizzaVarities() {
  const history = useHistory();
  return(
    <div className="items">
            <img src="https://c.ndtvimg.com/2020-07/ds980vng_pizza_625x300_07_July_20.jpg" className='movie-img'/>
            <h2 onClick={() => history.push('menu')}>Non-veg Pizza</h2>
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

export function NonVegPizzas({name,image,summary,id}){
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