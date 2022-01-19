import React from "react";
import { useEffect,useState } from 'react';
import {Pizzas} from "./App"
import {API} from "./global"

export function Menu() {
    const [pizzas,setList] = useState([]);

    useEffect(() =>{
      fetch(`${API}`,{method: "GET"})
      .then(response => response.json())
      .then(data => setList(data))
    })
   
//   console.log(pizzas)

    return (
        <div className="pizza-list">
           {pizzas.map(({name,image,summary,id},index) => (
            <Pizzas name={name} image={image} summary={summary} id={id} />

           ))}
        </div>
    );
}
