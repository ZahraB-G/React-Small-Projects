import React, { useState } from "react";
import TaskItem from "./TaskItem";
import "../Tasks/Tasks.css";
import Card from "../UI/Card";
import TaskFilter from "../Tasks/TaskFilter";
const Tasks = (props) => {
  const [selectedRate, setSelectedRate] = useState("1");
  const selectedRateHandler = (selectedRate) => {
    setSelectedRate(selectedRate);
  };
  let filter = props.tasks.filter((tasks) => tasks.rate === selectedRate);
  return (
    <Card className="tasks">
      <TaskFilter onSelectedRate={selectedRateHandler} />
      {filter.map((task) => {
        return (
          <TaskItem
            key={task.id}
            title={task.title}
            date={task.date}
            rate={task.rate}
          />
        );
      })}
    </Card>
  );
};
export default Tasks;
