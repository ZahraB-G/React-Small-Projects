import React, { useReducer } from "react";
import { ACTION } from "./Action";
import DigitButton from "./DigitButton";
import OperandButton from "./OperandButton";
import classes from "../Calculator/Calculator.module.css";
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.DIGIT: {
      if (action.payload.digit === "0" && state.curVal === "0") return state;
      if (action.payload.digit === "." && state.curVal.includes("."))
        return state;
      return {
        ...state,
        curVal: `${state.curVal || ""}${action.payload.digit}`,
      };
    }
    case ACTION.EVALUATE: {
      if (state.curVal == null || state.preVal == null || state.operand == null)
        return state;
      return {
        ...state,
        preVal: null,
        curVal: null,
        operand: evaluate(state),
      };
    }
    case ACTION.OPERAND: {
      if (state.curVal == null && state.preVal == null) {
        return state;
      }
      if (state.curVal == null) {
        return {
          ...state,
          operand: action.payload.operand,
        };
      }
      if (state.preVal == null) {
        return {
          ...state,
          operand: action.payload.operand,
          preVal: state.curVal,
          curVal: null,
        };
      }
      if (state.operand == null)
        return {
          ...state,
          preVal: evaluate(state),
          operand: action.payload.operand,
          curVal: null,
        };
    }
    case ACTION.CLEAR: {
      return {};
    }
    default:
      return state;
  }
};
const evaluate = (state) => {
  const prev = parseFloat(state.preVal);
  const cur = parseFloat(state.curVal);
  if (isNaN(prev) || isNaN(cur)) return "";
  let comp = "";
  switch (state.operand) {
    case "+":
      comp = prev + cur;
      break;
    case "-":
      comp = prev - cur;
      break;
    case "*":
      comp = prev * cur;
      break;
    case "/":
      comp = prev / cur;
      break;
  }
  return comp.toString();
};

const Calculator = () => {
  const [{ curVal, preVal, operand }, dispatch] = useReducer(reducer, {});
  return (
    <div className={classes.container}>
      <div>
        {preVal} {operand}
      </div>
      <div>{curVal}</div>
      <div className={classes.items}>
        <button
          onClick={() => {
            dispatch({ type: ACTION.CLEAR });
          }}
        >
          AC
        </button>
        <button>DEL</button>
        <OperandButton dispatch={dispatch} operand="/" />

        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperandButton dispatch={dispatch} operand="+" />

        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />

        <OperandButton dispatch={dispatch} operand="-" />

        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperandButton dispatch={dispatch} operand="*" />

        <DigitButton digit="0" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <button
          onClick={() => {
            dispatch({ type: ACTION.EVALUATE });
          }}
        >
          =
        </button>
      </div>
    </div>
  );
};
export default Calculator;
