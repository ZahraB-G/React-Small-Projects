import React from "react";
import classes from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={classes.item}>
      <img src={props.image} />
      <section>
        <h3>{props.name}</h3>
        <span>{props.age} years</span>
      </section>
    </li>
  );
};
export default Item;
