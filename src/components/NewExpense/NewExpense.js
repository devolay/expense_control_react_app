import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";
import Card from "../UI/Card";

const NewExpense = ({ onNewExpense }) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    onNewExpense(expenseData);
  };

  const [isFormOpened, setIsFormOpened] = useState(false);

  const addExpenseHandler = () => {
    setIsFormOpened((prevState) => !prevState);
  };

  return (
    <Card className="new-expense">
      {isFormOpened ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelExpenseHandler={addExpenseHandler}
        />
      ) : (
        <button onClick={addExpenseHandler}>Add new expense</button>
      )}
    </Card>
  );
};

export default NewExpense;
