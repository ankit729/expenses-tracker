import "./ExpenseDate.css";

function ExpenseDate(props) {
  return (
    <div className="expense-date">
      <div className="expense-date_month">
        {props.date.toLocaleString("en-US", { month: "long" })}
      </div>
      <div className="expense-date_year">{props.date.getFullYear()}</div>
      <div className="expense-date_day">
        {props.date.toLocaleString("en-US", { day: "numeric" })}
      </div>
    </div>
  );
}

export default ExpenseDate;
