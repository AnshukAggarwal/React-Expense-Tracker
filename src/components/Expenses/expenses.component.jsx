import React from "react";
import ExpenseFilter from "../ExpenseFilter/expenseFilter.component";
import ExpenseItem from "../ExpenseItem/expenseItem.component";
import { Card } from "../UI/Card";
import styles from "./expenses.module.css";

// const Expenses = ({ items }) => {
//   console.log(items);
//   return (
//     <div>
//       <p>Expenses Filter Component will go here.</p>
//       <p>
//         {items.map((item) => (
//           <ExpenseItem key={item.id} data={item} />
//         ))}
//       </p>
//     </div>
//   );
// };

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMonth: "All",
    };
  }

  handleMonthChange = (e) => {
    this.setState({ selectedMonth: e.target.value });
  };

  render() {
    const { items } = this.props;
    const { selectedMonth } = this.state;
    const filteredExpenses = items.filter((item) => {
      if (selectedMonth === "All") {
        return item;
      }
      return (
        item.date.toLocaleString("default", { month: "long" }) === selectedMonth
      );
    });
    return (
      <Card className={styles.expenses}>
        <ExpenseFilter
          currentMonth={selectedMonth}
          handleMonthChange={this.handleMonthChange}
        />
        {filteredExpenses.length === 0 && (
          <h2 className={styles.noItems}>No Items Found</h2>
        )}
        <section className={styles["expense-list"]}>
          {filteredExpenses.map((item) => (
            <ExpenseItem key={item.id} data={item} />
          ))}
        </section>
      </Card>
    );
  }
}

export default Expenses;
