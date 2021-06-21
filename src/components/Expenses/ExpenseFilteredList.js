import ExpenseItem from "./ExpenseItem";
import "./ExpenseFilteredList.css";
import ExpensesChart from "./ExpensesChart";

const ExpenseFilteredList = ({ items, filter }) => {
  const filteredItems = items.filter((e) => e.date.getFullYear() === +filter);

  return (
    <div>
      <ExpensesChart expenses={filteredItems} />
      <ul className="expense-filtered-list">
        {filteredItems.length !== 0 ? (
          filteredItems.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        ) : (
          <h2 className="expense-filtered-list__text">No expenses found!</h2>
        )}
      </ul>
    </div>
  );
};

export default ExpenseFilteredList;
