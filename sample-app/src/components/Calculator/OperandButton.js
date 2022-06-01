import React from "react";
import { ACTION } from "./Action";
const OperandButton = (props) => {
  const clickHandler = () => {
    props.dispatch({
      type: ACTION.OPERAND,
      payload: { operand: props.operand },
    });
  };
  return <button onClick={clickHandler}>{props.operand}</button>;
};
export default OperandButton;
