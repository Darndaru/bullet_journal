import React from 'react';


const MonthTasks = (props) => {
  const monthName = props.month.date.toLocaleString("en-US", { month: "long" });

  return (
    <div className={"card"}>
      <h3>{monthName}</h3>
      <form className={"taskForm"}>
        <div className={"taskType"}>•</div>
        <div className={"taskType"}>o</div>
        <input
          className={"taskInput"}
          style={{marginRight: "10px"}}
          placeholder={"Write your task here..."}
        />
        <button>✔</button>
      </form>
    </div>
  );
};

export default MonthTasks;