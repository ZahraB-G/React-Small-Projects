import React, { useState } from "react";
import classes from "./UserForm.module.css";
const UserForm = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) return;
    const user = { username, age };
    props.onSaveUser(user);
    setUsername("");
    setAge("");
  };
  return (
    <form className={classes["form-content"]} onSubmit={submitHandler}>
      <div>
        <label>Username</label>
        <input type="text" onChange={usernameChangeHandler} value={username} />
      </div>
      <div>
        <label>Age (Years)</label>
        <input type="number" onChange={ageChangeHandler} value={age} />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};
export default UserForm;
