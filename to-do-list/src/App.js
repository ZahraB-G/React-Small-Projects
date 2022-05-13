import React, { useState } from "react";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";
import Card from "./components/UI/Card";
import "../src/App.css";
const INITIAL_TASKS = [
  { id: "t1", title: "Clean the House", date: "12:22:00", rate: "2" },
  { id: "t2", title: "Do laundry", date: "15:22:00", rate: "5" },
  { id: "t3", title: "Exercise", date: "06:22:00", rate: "4" },
  { id: "t4", title: "Cook Dinner", date: "20:22:00", rate: "3" },
  { id: "t5", title: "Go to Store", date: "08:22:00", rate: "1" },
];
function App() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const saveTaskHandler = (newTask) => {
    setTasks((prevTasks) => {
      return [newTask, ...prevTasks];
    });
  };
  return (
    <Card className="main-container">
      <h1>To Do List</h1>
      <NewTask onSaveTask={saveTaskHandler} />
      <Tasks tasks={tasks} />
    </Card>
  );
}

export default App;
