import "./Expenses.css";
import Card from "../UI/Card";
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

function Expenses(props) {
  const [year, setYear] = useState(2022);

  function filterHandler(year) {
    setYear(year);
  }

  let expenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() == year
  );

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilter={filterHandler} />
      <ExpensesList expenses={expenses} />
    </Card>
  );
}

export default Expenses;
