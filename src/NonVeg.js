import React from 'react';
import "./styles.css";
import {NonVegPizzas} from './App';
import { useEffect,useState } from 'react';
import {API} from "./global"

export function NonVegMenu(){
    const [nonVegPizzas,setNonVegPizzas] = useState([])

    useEffect(() => {
        fetch(`${API}?type=nonveg`,{method: "GET"})
        .then(response => response.json())
        .then(data => setNonVegPizzas(data))
    },[])
  console.log(nonVegPizzas)
    return (
        <div className="pizza-list" id="NonVeg">
  
           {nonVegPizzas.map(({name,image,summary,id},index) => (
               <NonVegPizzas key={index} name={name} image={image} summary={summary} id={id} />
           ))}
            
        
        </div>
    )
  }
