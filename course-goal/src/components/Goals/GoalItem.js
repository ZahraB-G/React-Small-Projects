import React, { useState } from "react";
import "../Goals/GoalItem.css";
const GoalItem = (props) => {
  const DeleteHandler = () => {
    props.onClick(props.id);
  };

  return (
    <div className="container">
      <label onClick={DeleteHandler}>{props.title}</label>
    </div>
  );
};
export default GoalItem;
