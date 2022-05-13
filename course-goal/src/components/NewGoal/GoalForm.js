import React, { useState } from "react";
import "../NewGoal/GoalForm.css";
const GoalForm = (props) => {
  const [goal, setGoal] = useState("");
  const goalChangeHandler = (event) => {
    setGoal(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (goal !== "") props.onSaveGoal(goal);
    setGoal("");
  };
  return (
    <form className="goal" onSubmit={submitHandler}>
      <label>Course Goal</label>
      <input type="text" value={goal} onChange={goalChangeHandler} />
      <button type="submit">Add Goal</button>
    </form>
  );
};
export default GoalForm;
