import { ACTION } from "../ToDo/Action";
import classes from "../ToDo/TodoItem.module.css";
const TodoItem = (props) => {
  const deleteHandler = () => {
    props.dispatch({
      type: ACTION.DELETE_TODO,
      payload: { id: props.id },
    });
  };
  const toggleHandler = () => {
    props.dispatch({
      type: ACTION.TOGGLE_TODO,
      payload: { id: props.id },
    });
  };
  return (
    <div className={classes.container}>
      <label style={{ color: props.complete ? "red" : "black" }}>
        {props.title}
      </label>
      <div className={classes["button-container"]}>
        <button type="submit" onClick={toggleHandler}>
          Toggle
        </button>
        <button type="submit" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
