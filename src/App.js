import AddExpenseForm from "./components/AddExpenseForm/addexpenseform.component";
import "./App.css";
import Expenses from "./components/Expenses/expenses.component";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      expenses: [
        {
          id: "e1",
          title: "Toilet Paper",
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        {
          id: "e2",
          title: "New TV",
          amount: 799.49,
          date: new Date(2021, 2, 12),
        },
        {
          id: "e3",
          title: "Car Insurance",
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: "e4",
          title: "New Desk (Wooden)",
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ],
      showForm: false,
    };
  }

  handleShowForm = () => {
    this.setState((prevState) => {
      return {
        showForm: !prevState.showForm,
      };
    });
  };

  handleAddExpense = (expenseData) => {
    console.log(expenseData);
    this.setState((prevState) => {
      return {
        expenses: [...prevState.expenses, expenseData],
      };
    });
  };

  render() {
    const { expenses, showForm } = this.state;
    return (
      <div className="App">
        <h1>Welcome to the expense tracker</h1>
        <AddExpenseForm
          data={showForm}
          onShowForm={this.handleShowForm}
          onAddExpense={this.handleAddExpense}
        />
        <Expenses items={expenses} />
      </div>
    );
  }
}

export default App;
