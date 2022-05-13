import React from "react";
import TaskForm from "./TaskForm";

const NewTask = (props) => {
  const saveTaskHandler = (task) => {
    const newTask = { id: Math.random().toString(), ...task };
    props.onSaveTask(newTask);
  };
  return <TaskForm onSaveTask={saveTaskHandler} />;
};
export default NewTask;
