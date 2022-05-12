import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectedYear={selectedYearHandler}
          selected={enteredYear}
        />
        <ExpenseItem
          expenseDate={props.items[0].date}
          expenseTitle={props.items[0].title}
          expenseAmount={props.items[0].amount}
        />
        <ExpenseItem
          expenseDate={props.items[1].date}
          expenseTitle={props.items[1].title}
          expenseAmount={props.items[1].amount}
        />
        <ExpenseItem
          expenseDate={props.items[2].date}
          expenseTitle={props.items[2].title}
          expenseAmount={props.items[2].amount}
        />
        <ExpenseItem
          expenseDate={props.items[3].date}
          expenseTitle={props.items[3].title}
          expenseAmount={props.items[3].amount}
        />
      </Card>
    </div>
  );
};
export default Expenses;
