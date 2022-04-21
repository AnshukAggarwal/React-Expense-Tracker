import React, { useState } from "react";
import styles from "./addexpenseform.module.css";

const AddExpenseForm = ({ data, onShowForm, onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      title,
      amount,
      date: new Date(date),
    };
    onAddExpense(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };
  if (!data) {
    return (
      <section>
        <button onClick={onShowForm}>Add New Expense</button>
      </section>
    );
  }
  return (
    <form className={styles.form} onSubmit={formSubmitHandler}>
      <h1>Add an expense</h1>
      <div className={styles["form-group"]}>
        <label>Title</label>
        <input type="text" value={title} onChange={titleChangeHandler} />
      </div>
      <div className={styles["form-group"]}>
        <label>Amount</label>
        <input type="number" value={amount} onChange={amountChangeHandler} />
      </div>
      <div className={styles["form-group"]}>
        <label>Date</label>
        <input type="date" value={date} onChange={dateChangeHandler} />
      </div>
      <div>
        <button type="button" onClick={onShowForm}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default AddExpenseForm;
