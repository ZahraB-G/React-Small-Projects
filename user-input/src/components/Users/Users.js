import React from "react";
import UserItem from "./UserItem";
import classes from "./Users.module.css";
const Users = (props) => {
  const deleteUserHandler = (id) => {
    props.onDeleteUser(id);
  };
  return (
    <ul class={classes.container}>
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          username={user.username}
          age={user.age}
          onDeleteUser={deleteUserHandler}
        />
      ))}
    </ul>
  );
};
export default Users;
