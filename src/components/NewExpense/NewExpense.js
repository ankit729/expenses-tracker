import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  function addNewExpense(data) {
    props.onAddNewExpense(data);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onAddNewExpense={addNewExpense} />
    </div>
  );
}

export default NewExpense;
