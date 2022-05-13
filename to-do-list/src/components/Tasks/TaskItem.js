import "./TaskItem.css";
import Card from "../UI/Card";
const TaskItem = (props) => {
  return (
    <div className="task-item">
      <div className="task-item__date">
        <label>{props.date}</label>
      </div>
      <div className="task-item__title">
        <h2>{props.title}</h2>
      </div>
      <div className="task-item__rate">
        <label>{props.rate}</label>
      </div>
    </div>
  );
};
export default TaskItem;
