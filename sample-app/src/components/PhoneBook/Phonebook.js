import { useReducer, useState } from "react";
import { ACTION } from "./Action";
import RecordForm from "./RecordForm";
import Records from "./Records";
const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.ADD_RECORD: {
      return [...state, action.payload];
    }
    case ACTION.DELETE_RECORD: {
      return state.filter((item) => item.first !== action.payload.first);
    }
    default:
      return state;
  }
};
const PhoneBook = () => {
  const [items, dispatch] = useReducer(reducer, []);
  const [record, setRecord] = useState({ first: "", last: "", phone: "" });
  const addNewRecord = (newRecord) => {
    setRecord(newRecord);
    // console.log(record.first\);
    dispatch({
      type: ACTION.ADD_RECORD,
      payload: { first: record.first, last: record.last, phone: record.phone },
    });
  };
  return (
    <div>
      <RecordForm onAddNewRecord={addNewRecord} value={record} />
      <Records items={items} dispatch={dispatch} />
    </div>
  );
};
export default PhoneBook;
