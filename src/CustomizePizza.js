import React from "react";
import {useState } from 'react';

export function CustomizePizza() {
    const defaultTasks = [
        { check: false, task: "Regular" },
        { check: false, task: "Whole Wheat" },
        { check: false, task: "Thin Crust" },
        { check: false, task: "Double Decker" },
        { check: false, task: "Gluter Free" },
        { check: false, task: "Mozarella(cheese)" },
        { check: false, task: "Cottage(cheese)" },
        { check: false, task: "Parmesan(cheese)" },
        { check: false, task: "Cheddar(cheese)" },
        { check: false, task: "Feta(cheese)" },
        { check: false, task: "Pesto(sauce)" },
        { check: false, task: "Garlic Ranch(sauce)" },
        { check: false, task: "Creamy Bechamel(sauce)" },
        { check: false, task: "White Garlic(sauce)" },
        { check: false, task: "Marinara(sauce)" },
        { check: false, task: "Pepperoni(topping)" },
        { check: false, task: "Mushrooms(topping)" },
        { check: false, task: "Roasted Red Peppers(topping)" },
        { check: false, task: "Fresh Tomato(topping)" }
      ];
    
      const defaultSizes = [
        { check: false, task: "Regular" },
        { check: false, task: "Whole Wheat" },
        { check: false, task: "Thin Crust" },
        { check: false, task: "Double Decker" },
        { check: false, task: "Gluter Free" }
      ];
    
      const defaultCheese = [
        { check: false, task: "Mozarella(cheese)" },
        { check: false, task: "Cottage(cheese)" },
        { check: false, task: "Parmesan(cheese)" },
        { check: false, task: "Cheddar(cheese)" },
        { check: false, task: "Feta(cheese)" }
      ];
    
      const defaultSauce = [
        { check: false, task: "Pesto(sauce)" },
        { check: false, task: "Garlic Ranch(sauce)" },
        { check: false, task: "Creamy Bechamel(sauce)" },
        { check: false, task: "White Garlic(sauce)" },
        { check: false, task: "Marinara(sauce)" }
      ];
    
      const defaultToppings = [
        { check: false, task: "Pepperoni(topping)" },
        { check: false, task: "Mushrooms(topping)" },
        { check: false, task: "Roasted Red Peppers(topping)" },
        { check: false, task: "Fresh Tomato(topping)" },
        { check: false, task: "Sliced Italian(topping)" },
        { check: false, task: "Fresh Garlic(topping)" },
        { check: false, task: "Green Peppers(topping)" },
        { check: false, task: "American Corn(topping)" },
        { check: false, task: "Gorgonzola(topping)" },
        { check: false, task: "Pastrami(topping)" }
      ];
    
      const [taskList, addTask] = useState(defaultTasks);
      const [crustList, addCrust] = useState(defaultSizes);
    
    
      const [cheeseList, addCheese] = useState(defaultCheese);
      const [sauceList, addSauce] = useState(defaultSauce);
      const [toppingsList, addTopings] = useState(defaultToppings);
     
      const [show, setShow] = useState(true);
      const [show1, setShow1] = useState(false);
      const [show2, setshow2] = useState(false);
      const [show3, setshow3] = useState(false);
      const [show4, setshow4] = useState(false);
      const [show5, setshow5] = useState(false);
      //function to render the tasks
      function Display({ check, task, type, id, remove }) {
        const [addcart, setCart] = useState(check);
        const style = { textDecoration: addcart ? "" : "underline" };
        const style1 = { textDecoration: addcart ? "underline" : "" };
    
        // const removing = (id) => {
        //   const removedList = taskList.filter((task, index) => index !== id);
        //   remove(removedList);
        // };
    
        return (
          <div className="tasks">
            {type === "filter" ? (
              check === false ? (
                <div style={style}>
                  <input
                    type="checkbox"
                    onClick={() => {
                      setCart(!addcart);
                      for (let i of taskList) {
                        if (i.task === task) {
                          i.check = true;
                        }
                      }
                    }}
                  />
                  <span>{task}</span>
                </div>
              ) : check === true ? (
                <div style={style1}>
                  <input
                    type="checkbox"
                    defaultChecked
                    onClick={() => {
                      setCart(!addcart);
                      for (let i of taskList) {
                        if (i.task === task) {
                          i.check = false;
                        }
                      }
                    }}
                  />
                  <span>
                    <addcart>{task}</addcart>
                  </span>
                </div>
              ) : (
                ""
              )
            ) : check ? (
              <div>
                <input
                  type="checkbox"
                  defaultChecked
                  onClick={() => {
                    setCart(!addcart);
                    for (let i of cheeseList) {
                      if (i.task === task) {
                        i.check = !addcart;
                      }
                    }
                  }}
                />
                {addcart ? (
                  <span>
                    <addcart>{task}</addcart>
                  </span>
                ) : (
                  <span>{task}</span>
                )}
                {/* <button onClick={() => removing(id)}>Remove</button> */}
              </div>
            ) : (
              <div>
                <input
                  type="checkbox"
                  onClick={() => {
                    setCart(!addcart);
                    for (let i of taskList) {
                      if (i.task === task) {
                        i.check = !addcart;
                      }
                    }
                  }}
                />
                {addcart ? (
                  <span>
                    <addcart>{task}</addcart>
                  </span>
                ) : (
                  <span>{task}</span>
                )}
                {/* <button onClick={() => removing(id)}>Remove</button> */}
              </div>
            )}
          </div>
        );
      }
    
      return (
        <div className="App">
          <h1>Make Your Own Combination!!!</h1>
          <div className="addTask-grid"></div>
          <div className="status-and-tasks-grid">
            <div className="taskStatus">
              <button
                onClick={() => {
                  setShow(true);
                  setShow1(false);
                  setshow2(false);
                  setshow3(false);
                  setshow4(false);
                  setshow5(false);
                }}
              >
                All Items
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  setShow1(true);
                  setshow2(false);
                  setshow3(false);
                  setshow4(false);
                  setshow5(false);
                }}
              >
                Cheese
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  setShow1(false);
                  setshow2(false);
                  setshow3(true);
                  setshow4(false);
                  setshow5(false);
                }}
              >
                Sauce
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  setShow1(false);
                  setshow2(false);
                  setshow3(false);
                  setshow4(true);
                  setshow5(false);
                }}
              >
                Toppings
              </button>
              <button
                onClick={() => {
                  setShow1(false);
                  setShow(false);
                  setshow2(false);
                  setshow3(false);
                  setshow4(false);
                  setshow5(true);
                }}
              >
                Crust and Size
              </button>
              <button
                onClick={() => {
                  setShow(false);
                  setShow1(false);
                  setshow2(true);
                  setshow3(false);
                  setshow4(false);
                  setshow5(false);
                }}
              >
                confirm
              </button>
            </div>
            {show
              ? taskList.map(({ check, task }, index) => (
                  <Display key={index} id={index} check={check} task={task} />
                ))
              : ""}
            {show1
              ? cheeseList.map(({ check, task }, index) => (
                  <Display key={index} id={index} check={check} task={task} />
                ))
              : ""}
            {show3
              ? sauceList.map(({ check, task }, index) => (
                  <Display key={index} id={index} check={check} task={task} />
                ))
              : ""}
            {show4
              ? toppingsList.map(({ check, task }, index) => (
                  <Display key={index} id={index} check={check} task={task} />
                ))
              : ""}
              {show5
              ? crustList.map(({ check, task }, index) => (
                  <Display key={index} id={index} check={check} task={task} />
                ))
              : ""}
            {show2
              ? taskList
                  .filter((task) => {
                    return task.check === true;
                  })
                  .map(({ task, check }, index) => (
                    <Display
                      key={index}
                      id={index}
                      check={check}
                      task={task}
                      type="filter"
                    />
                  ))
              : ""}
          </div>
        </div>
      );
}
