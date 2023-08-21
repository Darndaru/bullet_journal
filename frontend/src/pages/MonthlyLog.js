import React from 'react';
import DayInMonth from "../components/DayInMonth";
import Tracker from "../components/Tracker";

const MonthlyLog = () => {
  const monthName = new Date().toLocaleString("en-US", {month: "long"});

  const first = {
    number: 1,
    weekday: 'M'
  }

  return (
    <div className={"monthLogContainer"}>
      <div className={"card monthVerticalCard"} >
        <h3>{monthName}</h3>
        <div className={"monthVertical"}>
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
          <DayInMonth day={first} />
        </div>
      </div>
      <div className={"card"}>
        <h3>Tasks</h3>
        <form className={"taskForm"}>
          <div className={"taskType"}>•</div>
          <input
            className={"taskInput"}
            style={{marginRight: "10px"}}
            placeholder={"Write your task here..."}
          />
          <button>✔</button>
        </form>
      </div>
      <div className={"card"}>
        <h3>Events</h3>
        <form className={"taskForm"}>
          <div className={"taskType"}>o</div>
          <input
            className={"taskInput"}
            style={{marginRight: "10px"}}
            placeholder={"Write your event here..."}
          />
          <button>✔</button>
        </form>
      </div>
      {/*<Tracker />*/}
    </div>
  );
};

export default MonthlyLog;