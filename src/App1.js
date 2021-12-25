import "./styles1.css";
import { useState } from "react";
import React from 'react'

function App() {
 
  const givenTasks = [
    { status: false, task: "Create Theme" },
    { status: false, task: "Work on WordPress" },
    { status: false, task: "Organize office main department" },
    { status: false, task: "Error solve in HTML template." }
  ];

  
  const [show, setShow] = useState(true);
  const [show1, setShow1] = useState(false);
  const [show2, setshow2] = useState(false);
  
  const [taskList, addTask] = useState(givenTasks);
  const [typedTask, adding] = useState({ status: false });



  function TaskDisplay({ status, task, type }) {
    const [strike, striking] = useState(status);
    const style = { display: strike ? "none" : "block" };
    const style1 = { display: strike ? "block" : "none" };

  
    return (
      <div className="tasks">
        {type === "filter" ? (
          status === false ? (
            <div style={style}>
              <input
                type="checkbox"
                onClick={() => {
                  striking(!strike);
                  for (let i of taskList) {
                    if (i.task === task) {
                      i.status = true;
                     
                    }
                  }
                }}
              />
              <span>{task}</span>
            </div>
          ) : status === true ? (
            <div style={style1}>
              <input
                type="checkbox"
                defaultChecked
                onClick={() => {
                  striking(!strike);
                  for (let i of taskList) {
                    if (i.task === task) {
                      i.status = false;
                    }
                  }
                }}
              />
              <span>
                <strike>{task}</strike>
              </span>
            </div>
          ) : (
            ""
          )
        ) : status ? (
          <div>
            <input
              type="checkbox"
              defaultChecked
              onClick={() => {
                striking(!strike);
                for (let i of taskList) {
                  if (i.task === task) {
                    i.status = !strike;
                  }
                }
              }}
            />
            {strike ? (
              <span>
                <strike>{task}</strike>
              </span>
            ) : (
              <span>{task}</span>
            )}
            
          </div>
        ) : (
          <div>
            <input
              type="checkbox"
              onClick={() => {
                striking(!strike);
                for (let i of taskList) {
                  if (i.task === task) {
                    i.status = !strike;
                  }
                }
              }}
            />
            {strike ? (
              <span>
                <strike>{task}</strike>
              </span>
            ) : (
              <span>{task}</span>
            )}
           
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <h1>TODO List</h1>
      <div className="addTask-grid">
        <div className="addTask">
          <input
            placeholder="Enter the TASK"
            onChange={(event) =>
              adding({ ...typedTask, task: event.target.value })
            }
          />
          <button
            className="button"
            onClick={() => {
              typedTask.task !== undefined
                ? addTask([...taskList, typedTask])
                : alert("Enter task");
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div >
        <div className="tasktodo">
          <button
            onClick={() => {
              setShow(true);
              setShow1(false);
              setshow2(false);
            }}
          >
            All
          </button>
          <button
            onClick={() => {
              setShow(false);
              setShow1(true);
              setshow2(false);
            }}
          >
            Active
          </button>
          <button
            onClick={() => {
              setShow(false);
              setShow1(false);
              setshow2(true);
            }}
          >
            Completed
          </button>
        </div>
        {show
          ? taskList.map(({ status, task }, index) => (
              <TaskDisplay
                key={index}
                id={index}
                status={status}
                task={task}
                remove={addTask}
                type="All"
              />
            ))
          : ""}
        {show1
          ? taskList
              .filter((task) => {
                return task.status === false;
              })
              .map(({ task, status }, index) => (
                <TaskDisplay key={index} status={status} task={task} type="filter" />
              ))
          : ""}
        {show2
          ? taskList
              .filter((task) => {
                return task.status === true;
              })
              .map(({ task, status }, index) => (
                <TaskDisplay key={index} status={status} task={task} type="filter" />
              ))
          : ""}
      </div>
    </div>
  );
}

export default App;
