
import { useReducer } from "react";
import React from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: action.payload };
    case "background":
      return { ...state, color: action.payload };

    default:
      return state;
  }
};

const initialState = { count: 0 ,color:""};

export function BasicForm() {
   return(
    <div >
    <Counter />
  </div>
   )}

   function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const a={background:state.color}
    console.log(state.color)
    return (
        <div className="colorgame1">
        <h1>Count :{state.count}</h1>
      <div className="colorgame">
        <button onClick={() => dispatch({ type: "increment" })}>➕</button>
        <button onClick={() => dispatch({ type: "decrement" })}>➖</button>
        <button onClick={() => dispatch({ type: "reset", payload: 5 })}>
         🔃
        </button>
        <input style={a} placeholder="enter color"  onChange={(event)=> dispatch({type:"background",payload:event.target.value})}/>
      </div>
      </div>
    );
  }
  
