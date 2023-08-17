import React, {useState} from 'react';
import MonthView from "../components/MonthView";

const FutureLog = () => {
  let month = new Date().toLocaleString("en-US", { month: "long" });
  //
  // const [value] = useState(new Date())
  // const nextMonthDate = new Date().getMonth() + 1
  // const currentMonth = {
  //   month: value,
  //   taskCard: {
  //     month: month
  //   }
  // }
  // const nextMonth = {
  //   month: nextMonthDate
  // }

  const now = new Date();
  const currentMonth = {
    date: new Date(),
  }
  const nextMonth = {
    date: new Date(now.getFullYear(), now.getMonth() + 1, 1),
  }
  const futureMonth = {
    date: new Date(now.getFullYear(), now.getMonth() + 2, 1),
  }

  return (
    <div className={"container"}>
      <h2>Future log</h2>
      <MonthView month={currentMonth} />
      <MonthView month={nextMonth} />
      <MonthView month={futureMonth}/>
    </div>
  );
};

export default FutureLog;