import "./styles.css";
import React from "react";
import { Switch, Route, Redirect,useParams,useHistory } from "react-router-dom";
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Menu } from "./Menu";
import {NonVegMenu} from "./NonVeg";
import {VegMenu} from "./Veg";
import {Beverage} from "./beverage";
import {CustomizePizza} from "./CustomizePizza"
import HomePage from "./components/HomePage";
import Payment from "./payment";



import Hero from "./components/Hero";

export default function App() {
    const [pizzaList,setList] = useState([]);
    const [nonVegList,setNonVegList] = useState([]);
    const [beverage,setBeverage] = useState([])
    const [vegList,setVegList] = useState([]);
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

       <Route path="/vegmenu">
        <VegMenu vegPizzas={vegList} setVegPizzas={setVegList}/>
       </Route>

       <Route path="/beverage">
        <Beverage beverages={beverage} setBeverage={setBeverage}/>
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

      <Route exact path="/payment">
      <Payment />
      </Route>
    </Switch>
    </div>
  )
}

function PizzaVarities() {
  const history = useHistory();
  return(
    <div >
      
      <div className="pizza-list">

      <div className="items">
            <img src="https://c.ndtvimg.com/2020-07/ds980vng_pizza_625x300_07_July_20.jpg" className='movie-img'/>
            <a href="#Veg"><h2>Veg Pizza</h2></a>
      </div>
      <div className="items">
            <img src="https://c.ndtvimg.com/2020-07/ds980vng_pizza_625x300_07_July_20.jpg" className='movie-img'/>
            <a href="#NonVeg"><h2>Non-veg Pizza</h2></a>
      </div>
      <div className="items">
            <img src="https://c.ndtvimg.com/2020-07/ds980vng_pizza_625x300_07_July_20.jpg" className='movie-img'/>
            <a href="#Beverage"><h2>Beverage</h2></a>
            </div>
      </div>

            <hr />
            <h2 style={{textAlign: 'center'}}>Veg Pizzas</h2>
            <VegMenu />
            <hr />
            <h2 style={{textAlign: 'center'}}>Nonveg Pizzas</h2>
            <NonVegMenu />
            <hr />
            <h2 style={{textAlign: 'center'}}>Beverages</h2>
            <Beverage />
            
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


export function VegPizzas({name,image,summary,id}){
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


export function Beverages({name,image,summary,id}){
  return (
      <div className="items" id="Beverage">
      <div>
          <h2>{name}</h2>
          <img src={image} className="movie-img" />
          <p >{summary}</p>
      </div>
      
      </div>
  )
}