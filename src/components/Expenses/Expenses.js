import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  /* const [expenses] = useState(props.items); */

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  /* const list = expenses.filter(
    (expense) => (expense.date.getYear() + 1900).toString() === filteredYear
  ); */

  const filteredExpanses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expensesContent = <p>No expenses found.</p>;

  if (filteredExpanses.length > 0) {
    expensesContent = filteredExpanses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpanses} />
        {expensesContent}
        {/* {filteredExpanses.length === 0 && <p>No expenses found.</p>} */}
        {/* {filteredExpanses.length > 0 &&
          filteredExpanses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
