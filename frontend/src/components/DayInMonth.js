import React from 'react';

const DayInMonth = (props) => {
  let isEditing = false;
  return (
    <div className={"dayInMonth"}>
      <p className={"dayNumber"}>{props.day.number}</p>
      <p className={"weekday"}>{props.day.weekday}</p>
      <textarea
        className={"taskInput dailyEvent"}
      >Помыть кота</textarea>
      {
        isEditing ?
          <button>✔</button>
          :
          <></>
      }
    </div>
  );
};

export default DayInMonth;