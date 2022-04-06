import React from 'react';
import "./styles.css";
import {Beverages} from './App';
import { useEffect,useState } from 'react';
import {API} from "./global"

export function Beverage(){
    const [beverages,setBeverage] = useState([])

    useEffect(() => {
        fetch(`${API}?type=beverage`,{method: "GET"})
        .then(response => response.json())
        .then(data => setBeverage(data))
    },[])
    return (
        <div className="pizza-list" id="Beverage">
  
           {beverages.map(({name,image,summary,id},index) => (
               <Beverages key={index} name={name} image={image} summary={summary} id={id} />
           ))}
            
        
        </div>
    )
  }
