import React from "react";
import Item from "./Item";
import classes from "./List.module.css";

const List = (props) => {
  return (
    <div className={classes.list}>
      <ul>
        {props.person.map((user) => (
          <Item
            key={user.id}
            id={user.id}
            image={user.image}
            name={user.name}
            age={user.age}
          />
        ))}
      </ul>
    </div>
  );
};
export default List;
