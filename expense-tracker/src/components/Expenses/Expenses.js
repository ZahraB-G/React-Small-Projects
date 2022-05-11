import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
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
  );
};
export default Expenses;
