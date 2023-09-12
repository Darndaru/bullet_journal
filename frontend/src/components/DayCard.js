import React from 'react';
import Task from "./Task";

const DayCard = () => {
  const washDishes = {
    type: "task",
    text: "Помыть посуду",
  }
  const homework = {
    type: "task",
    text: "Сделать домашнее задание"
  }
  const walkDog = {
    type: "event",
    text: "Встретиться с научным руководителем"
  }
  return (
    <div style={{width: "600px"}} className={"card"}>
      <h2>Today</h2>
      <form className={"taskForm"}>
        <div className={"taskTypeActive"}>•</div>
        <div className={"taskType"}>o</div>
        <div className={"taskType"}>–</div>
        <input
          className={"taskInput"}
          style={{marginRight: "10px"}}
          placeholder={"Write your task here..."}
        />
        <button>✔</button>
      </form>
      <Task task={washDishes} />
      <Task task={homework} />
      <Task task={walkDog} />
    </div>
  );
};

export default DayCard;