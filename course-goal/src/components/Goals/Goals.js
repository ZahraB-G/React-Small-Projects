import React from "react";
import GoalItem from "./GoalItem";
const Goals = (props) => {
  const clickHandler = (id) => {
    props.onClick(id);
  };
  return (
    <div>
      {props.items.map((goal) => {
        return (
          <GoalItem
            key={goal.id}
            id={goal.id}
            title={goal.title}
            onClick={clickHandler}
          />
        );
      })}
    </div>
  );
};
export default Goals;
