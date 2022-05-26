import React, { useState } from "react";
import Action from "../PhoneBook/Action";
import classes from "../PhoneBook/RecordForm.module.css";
const RecordForm = (props) => {
  const [record, setRecord] = useState({ first: "", last: "", phone: "" });
  const firstnameHandler = (event) => {
    setRecord((prev) => {
      return { ...prev, first: event.target.value };
    });
  };
  const lastnameHandler = (event) => {
    setRecord((prev) => {
      return { ...prev, last: event.target.value };
    });
  };
  const phoneHandler = (event) => {
    setRecord((prev) => {
      return { ...prev, phone: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddNewRecord(record);
    setRecord({ first: "", last: "", phone: "" });
  };
  return (
    <form onSubmit={submitHandler} className={classes.container}>
      <div>
        <label>First Name</label>
        <input
          type="text"
          placeholder="Enter First Name"
          onChange={firstnameHandler}
          value={record.first}
        />
      </div>
      <div>
        <label>Last Name</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          onChange={lastnameHandler}
          value={record.last}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Enter Phone Number"
          onChange={phoneHandler}
          value={record.phone}
        />
      </div>
      <button type="submit">Add to Phone Book</button>
    </form>
  );
};
export default RecordForm;
