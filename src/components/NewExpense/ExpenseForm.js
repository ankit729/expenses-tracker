import "./ExpenseForm.css";
import { useState } from "react";

function ExpenseForm(props) {
  const [open, setOpen] = useState(false);
  const [userInput, setUserInput] = useState({
    amount: 0,
    date: "",
    title: "",
  });

  function clickHandler() {
    setOpen((open) => !open);
  }

  function submitHandler(event) {
    event.preventDefault();
    const ret = userInput;
    ret.amount = +ret.amount;
    ret.date = new Date(ret.date);
    ret.id = Math.random().toString();
    props.onAddNewExpense(ret);
    setUserInput({
      amount: 0,
      date: "",
      title: "",
    });
    clickHandler();
  }

  function userInputChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [name]: value,
      };
    });
  }

  if (!open) {
    return <button onClick={clickHandler}>Add New Expense</button>;
  }

  return (
    <form onSubmit={submitHandler} onCancel={clickHandler}>
      <div className="new-expense_controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input
            name="title"
            type="text"
            value={userInput.title}
            onChange={userInputChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={userInputChangeHandler}
          />
        </div>
        <div className="new-expense_control">
          <label>Date</label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={userInput.date}
            onChange={userInputChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense_actions">
        <button type="cancel">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
