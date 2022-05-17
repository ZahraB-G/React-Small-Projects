import React, { useState } from "react";
import "./App.css";
import data from "./components/data";
import List from "./components/List";
function App() {
  const [person, setPerson] = useState(data);
  const clickHandler = () => {
    setPerson([]);
  };
  const showClickHandler = () => {
    setPerson(data);
  };
  return (
    <div className="app">
      <h1>Birthday Reminder</h1>
      <List person={person} />
      <div className="btn">
        <button type="submit" onClick={clickHandler}>
          Clear All
        </button>
        <button type="submit" onClick={showClickHandler}>
          Show All
        </button>
      </div>
    </div>
  );
}

export default App;
