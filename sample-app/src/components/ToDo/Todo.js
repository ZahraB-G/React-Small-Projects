import React, { useState, useReducer } from "react";
import { ACTION } from "../ToDo/Action";
import TodoItem from "./TodoItem";
import classes from "../ToDo/Todo.module.css";
const reducer = (todos, action) => {
  switch (action.type) {
    case ACTION.ADD_TODO: {
      return [...todos, newTodo(action.payload.title)];
    }
    case ACTION.TOGGLE_TODO: {
      return todos.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, complete: !item.complete };
        else return item;
      });
    }
    case ACTION.DELETE_TODO: {
      return todos.filter((item) => item.id !== action.payload.id);
    }
    default:
      return todos;
  }
};
const newTodo = (title) => {
  return {
    id: Math.random().toString(),
    title: title,
    date: new Date(),
    complete: false,
  };
};
const Todo = () => {
  const [title, setTitle] = useState("");
  const [todos, dispatch] = useReducer(reducer, []);
  const changeHandler = (event) => {
    setTitle(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch({ type: ACTION.ADD_TODO, payload: { title: title } });
    setTitle("");
  };
  return (
    <div className={classes.container}>
      <form onSubmit={submitHandler} className={classes.form}>
        <input type="text" value={title} onChange={changeHandler} />
        <button type="submit">Add to List</button>
      </form>
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          id={item.id}
          title={item.title}
          complete={item.complete}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
};
export default Todo;
