import React from 'react';
import Task from "./Task";

const DayCard = () => {
  return (
    <div style={{width: "600px"}} className={"card"}>
      <h2>Today</h2>
      <form className={"taskForm"}>
        <div className={"taskType"}>•</div>
        <div className={"taskType"}>o</div>
        <div className={"taskType"}>–</div>
        <input
          className={"taskInput"}
          style={{marginRight: "10px"}}
          placeholder={"Write your task here..."}
        />
        <button>✔</button>
      </form>
      <Task />
      <Task />
    </div>
  );
};

export default DayCard;