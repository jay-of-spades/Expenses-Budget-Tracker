import { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [expenseToEdit, setExpenseToEdit] = useState(null);
  const addExpense = newExpense => {
    setExpenses([...expenses, newExpense]);
  };

  const editExpense = (index, updatedExpense) => {
    const updatedExpenses = [...expenses];
    updatedExpenses[index] = updatedExpense;
    setExpenses(updatedExpenses);
  };

  const deleteExpense = index => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  const handleEdit = index => {
    setExpenseToEdit({ index, ...expenses[index] });
  };
  return (
    <div>
      <h1 className='mb-7'>Expenses</h1>
      <ExpenseForm
        addExpense={addExpense}
        editExpense={editExpense}
        expenseToEdit={expenseToEdit}
        setExpenseToEdit={setExpenseToEdit}
      />
      <ExpenseList
        expenses={expenses}
        onEdit={handleEdit}
        onDelete={deleteExpense}
      />
    </div>
  );
};
export default Expenses;
