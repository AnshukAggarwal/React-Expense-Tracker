import React from "react";
import styles from "./expensefilter.module.css";

const ExpenseFilter = ({ currentMonth, handleMonthChange }) => {
  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className={styles.filter}>
      <label>Filter by Month</label>
      <select value={currentMonth} onChange={handleMonthChange}>
        {months.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
