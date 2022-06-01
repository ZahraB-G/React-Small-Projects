import React from "react";
import { ACTION } from "./Action";
const DigitButton = (props) => {
  const clickHandler = () => {
    props.dispatch({ type: ACTION.DIGIT, payload: { digit: props.digit } });
  };
  return <button onClick={clickHandler}>{props.digit}</button>;
};
export default DigitButton;
