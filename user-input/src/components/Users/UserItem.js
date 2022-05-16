import React from "react";
import classes from "./UserItem.module.css";
const UserItem = (props) => {
  const clickHandler = () => {
    props.onDeleteUser(props.id);
  };
  return (
    <li className={classes["item-content"]} onClick={clickHandler}>
      <label>{props.username}</label>
      <label> ( {props.age} years old)</label>
    </li>
  );
};
export default UserItem;
