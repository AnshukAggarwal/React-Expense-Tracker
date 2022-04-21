import React from "react";

const ExpenseItem = ({ data }) => {
  const month = data.date.toLocaleString("default", { month: "long" });
  const day = data.date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div
      style={{
        backgroundColor: "white",
        margin: "10px",
        display: "flex",
        width: "100%",
        padding: "20px",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div>
          {month} <span>{day}</span>
        </div>
      </div>

      <div>{data.title}</div>
      <div>$ {data.amount}</div>
    </div>
  );
};

export default ExpenseItem;
