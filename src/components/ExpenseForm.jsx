import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ExpenseForm = ({
  addExpense,
  editExpense,
  expenseToEdit,
  setExpenseToEdit,
}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (expenseToEdit !== null) {
      setAmount(expenseToEdit.amount);
      setCategory(expenseToEdit.category);
      setDate(expenseToEdit.date);
      setNotes(expenseToEdit.notes);
    }
  }, [expenseToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    const newExpense = { amount, category, date, notes };

    if (expenseToEdit !== null) {
      editExpense(expenseToEdit.index, newExpense);
      setExpenseToEdit(null);
    } else {
      addExpense(newExpense);
    }

    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
  };

  return (
    <form className='flex flex-col gap-3 mb-5' onSubmit={handleSubmit}>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Amount:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='number'
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Category:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='text'
          value={category}
          onChange={e => setCategory(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Date:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          required
        />
      </div>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Notes:</label>
        <textarea
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm mb-5'
          value={notes}
          onChange={e => setNotes(e.target.value)}
        />
      </div>
      <button className='p-3 w-5/12 bg-blue-600 mb-7' type='submit'>
        {expenseToEdit !== null ? 'Edit Expense' : 'Add Expense'}
      </button>
    </form>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.object,
  setExpenseToEdit: PropTypes.func.isRequired,
};

export default ExpenseForm;
