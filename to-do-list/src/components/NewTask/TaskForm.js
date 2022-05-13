import React, { useState } from "react";
import "../NewTask/TaskForm.css";
const TaskForm = (props) => {
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const rateChangeHandler = (event) => {
    setRate(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (title === "" || rate === "" || date === "") {
      console.log("no data was enterd");
    } else {
      const task = { title, rate, date };
      props.onSaveTask(task);
    }

    setTitle("");
    setRate("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler} className="task-form">
      <div className="task-form__item">
        <label>Title:</label>
        <input
          type="text"
          placeholder="Enter task ..."
          onChange={titleChangeHandler}
          value={title}
        />
      </div>
      <div className="task-form__item">
        <label>Priority Rate:</label>
        <input
          type="number"
          onChange={rateChangeHandler}
          value={rate}
          min="1"
        />
      </div>
      <div className="task-form__item">
        <label>Due Date:</label>
        <input type="time" onChange={dateChangeHandler} value={date} />
      </div>
      <div className="task-form__item">
        <button type="submit" className="task-form__action">
          Submit
        </button>
      </div>
    </form>
  );
};
export default TaskForm;
