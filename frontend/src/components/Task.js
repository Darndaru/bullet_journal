import React from 'react';

const Task = (props) => {
  const task = props.task
  let isEditing = false

  return (
    <form className={"taskForm"}>
      <div className={"taskType"}>
        {task.type === "event" ? 'o' : '•' }</div>
      <textarea
        className={"taskInput"}
      >{task.text}</textarea>
      {
        isEditing ?
          <button>✔</button>
          :
          <></>
      }
      </form>
  );
};

export default Task;