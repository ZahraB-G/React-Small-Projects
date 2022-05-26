import React from "react";
import { ACTION } from "../PhoneBook/Action";
import classes from "../PhoneBook/RecordItem.module.css";
const RecordItem = (props) => {
  const deleteHandler = () => {
    props.dispatch({
      type: ACTION.DELETE_RECORD,
      payload: { first: props.first },
    });
  };
  return (
    <div className={classes.container}>
      <label>{props.first}</label>
      <label>{props.last}</label>
      <label>{props.phone}</label>

      <button onClick={deleteHandler}>Delete</button>
      {/* <button>Block</button> */}
    </div>
  );
};
export default RecordItem;
