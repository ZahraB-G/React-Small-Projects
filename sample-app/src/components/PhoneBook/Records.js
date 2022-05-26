import React from "react";
import RecordItem from "./RecordItem";
import classes from "../PhoneBook/Records.module.css";
const Records = (props) => {
  return (
    <div className={classes.container}>
      {props.items.map((item) => (
        <RecordItem
          key={Math.random().toString()}
          first={item.first}
          last={item.last}
          phone={item.phone}
          dispatch={props.dispatch}
        />
      ))}
    </div>
  );
};
export default Records;
