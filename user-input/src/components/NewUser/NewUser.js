import React from "react";
import UserForm from "./UserForm";
const NewUser = (props) => {
  const saveHandler = (user) => {
    const newUser = { id: Math.random().toString(), ...user };
    props.onSaveUser(newUser);
  };
  return (
    <div>
      <UserForm onSaveUser={saveHandler} />
    </div>
  );
};
export default NewUser;
