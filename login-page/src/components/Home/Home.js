import React from "react";
import classes from "../Home/Home.module.css";
const Home = (props) => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Welcome to Your Page</span>
      <a onClick={props.onLogOut} className={classes.item}>
        Log Out
      </a>
    </div>
  );
};
export default Home;
