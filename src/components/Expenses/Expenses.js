import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseFilteredList from "./ExpenseFilteredList";

const Expenses = ({ items }) => {
  const [filter, setFilter] = useState(2021);

  const filterChangeHandler = (filterValue) => {
    setFilter(filterValue);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter onFilterChange={filterChangeHandler}></ExpenseFilter>
      <ExpenseFilteredList items={items} filter={filter}></ExpenseFilteredList>
    </Card>
  );
};

export default Expenses;
