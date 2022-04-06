import React from 'react';
import "./styles.css";
import {VegPizzas} from './App';
import { useEffect,useState } from 'react';
import {API} from "./global"

export function VegMenu(){
    const [vegPizzas,setVegPizzas] = useState([])

    useEffect(() => {
        fetch(`${API}?type=veg`,{method: "GET"})
        .then(response => response.json())
        .then(data => setVegPizzas(data))
    },[])
  console.log(vegPizzas)
    return (
        <div className="pizza-list" id="Veg">
  
           {vegPizzas.map(({name,image,summary,id},index) => (
               <VegPizzas key={index} name={name} image={image} summary={summary} id={id} />
           ))}
            
        
        </div>
    )
  }
