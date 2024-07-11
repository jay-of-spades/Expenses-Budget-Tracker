import { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Expenses = () => {
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem('expenses');
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });
  useEffect(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);
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
      <h1 className='text-blue-500 font-bold mb-10 flex'>
        <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />
        Expenses
      </h1>
      <ExpenseForm
        addExpense={addExpense}
        editExpense={editExpense}
        expenseToEdit={expenseToEdit}
        setExpenseToEdit={setExpenseToEdit}
        categories={categories}
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
