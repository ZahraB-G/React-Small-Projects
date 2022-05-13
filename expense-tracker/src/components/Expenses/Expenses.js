import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
const Expenses = (props) => {
  const [enteredYear, setEnteredYear] = useState("2020");
  const selectedYearHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expenses) => {
    return expenses.date.getFullYear().toString() === enteredYear;
  });
  let expenseContent = <p>No expenses found.</p>;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expenses) => {
      return (
        <ExpenseItem
          key={expenses.id}
          expenseTitle={expenses.title}
          expenseAmount={expenses.amount}
          expenseDate={expenses.date}
        />
      );
    });
  }
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          onSelectedYear={selectedYearHandler}
          selected={enteredYear}
        />
        {/* <ExpensesChart expenses={filteredExpenses} /> */}
        {expenseContent}
      </Card>
    </div>
  );
};
export default Expenses;
