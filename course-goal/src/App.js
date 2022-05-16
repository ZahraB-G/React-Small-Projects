import React, { useState } from "react";
import NewGoal from "./components/NewGoal/NewGoal";
import Goals from "./components/Goals/Goals";
import "../src/App.css";
const INITIAL_GOALS = [
  { id: "g1", title: "Do all exercises!" },
  { id: "g2", title: "Finish the Course!" },
];
function App() {
  const [goals, setGoals] = useState(INITIAL_GOALS);
  const saveGoalHandler = (newGoal) => {
    console.log(newGoal);
    setGoals((prevGoals) => [newGoal, ...prevGoals]);
  };
  const DeleteHandler = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goals) => goals.id !== id));
  };
  return (
    <div>
      <NewGoal onSaveGoal={saveGoalHandler} />
      <Goals items={goals} onClick={DeleteHandler} />
    </div>
  );
}

export default App;
