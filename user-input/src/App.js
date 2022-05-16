import React, { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import Users from "./components/Users/Users";
import "../src/App.css";
const INITIAL_USERS = [
  { id: "u1", username: "Max", age: "31" },
  { id: "u2", username: "Ronnie", age: "40" },
  { id: "u3", username: "Yasi", age: "33" },
  { id: "u4", username: "Ehsan", age: "37" },
];
function App() {
  const [users, setUsers] = useState(INITIAL_USERS);

  const saveUserHandler = (newUser) => {
    setUsers((prevUser) => [newUser, ...prevUser]);
  };
  const deleteUserHandler = (id) => {
    console.log(id);
    setUsers((prevUser) => prevUser.filter((user) => user.id !== id));
  };
  return (
    <div>
      <NewUser onSaveUser={saveUserHandler} />
      <Users items={users} onDeleteUser={deleteUserHandler} />
    </div>
  );
}

export default App;
