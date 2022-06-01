import React, { useState } from "react";
import classes from "../Login/Login.module.css";
const Login = (props) => {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const userChangeHandler = (event) => {
    const user = event.target.value;
    setUser(user);
  };
  const passChangeHandler = (event) => {
    const pass = event.target.value;
    setPass(pass);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const newUser = { user, pass };
    props.onSave(newUser);
    setUser("");
    setPass("");
  };
  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div className={classes.items}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter Username"
          onChange={userChangeHandler}
          value={user}
        />
      </div>
      <div className={classes.items}>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter Password"
          onChange={passChangeHandler}
          value={pass}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Login;
