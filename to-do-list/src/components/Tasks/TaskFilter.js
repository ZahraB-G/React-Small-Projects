import React from "react";
import "../Tasks/TaskFilter.css";
const TaskFilter = (props) => {
  const rateChangeHandler = (event) => {
    props.onSelectedRate(event.target.value);
  };
  return (
    <div className="filter">
      <label>Filter by Priority Rate</label>
      <select onChange={rateChangeHandler}>
        <option value="1">1 Lowest Priority</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10 Highest Priority</option>
      </select>
    </div>
  );
};
export default TaskFilter;
