import React from 'react';

const Task = () => {
  let isEditing = false
  return (
    <form className={"taskForm"}>
      <div className={"taskTypeActive"}>•</div>
      <textarea
        className={"taskInput"}
      >Помыть кота</textarea>
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