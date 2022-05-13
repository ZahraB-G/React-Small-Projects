import React from "react";
import GoalForm from "./GoalForm";
const NewGoal = (props) => {
  const saveGoalHandler = (newGoal) => {
    const addedGoal = { id: Math.random().toString(), title: newGoal };
    props.onSaveGoal(addedGoal);
  };
  return (
    <div>
      <GoalForm onSaveGoal={saveGoalHandler} />
    </div>
  );
};
export default NewGoal;
