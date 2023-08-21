import React, {useState} from 'react';
import Calendar from "react-calendar";
import MonthTasks from "./MonthTasks";

const MonthView = (props) => {
  const month = props.month

  return (
    <div className={"monthView"}>
      <Calendar
        value={month.date}
        showNavigation={false}
        locale='en-GB'
        formatShortWeekday = {(locale, date) =>
        ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
      />
      <MonthTasks month={month} />
    </div>
  );
};

export default MonthView;