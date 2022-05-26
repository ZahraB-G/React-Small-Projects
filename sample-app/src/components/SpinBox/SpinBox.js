import React, { useReducer } from "react";
import classes from "../SpinBox/SpinBox.module.css";
import { ACTION } from "./Action";
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.DECREMENT: {
      if (state.val === 0) return state;
      return { val: state.val-- };
    }
    case ACTION.INCREMENT: {
      return { val: state.val++ };
    }
    default:
      return state;
  }
};
const SpinBox = () => {
  const [state, dispatch] = useReducer(reducer, { val: 0 });
  console.log(state.val);
  return (
    <div className={classes.container}>
      <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
      <span>{state.val}</span>
      <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
    </div>
  );
};
export default SpinBox;
