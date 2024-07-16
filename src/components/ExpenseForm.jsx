import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ExpenseForm = ({
  addExpense,
  editExpense,
  expenseToEdit,
  setExpenseToEdit,
  categories,
}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

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
    <div className='flex justify-center items-center w-full'>
      <form
        className='flex flex-col gap-3 mb-5 w-10/12 md:w-11/12 lg:w-2/3 p-10 shadow-inner shadow-black hover:shadow-md hover:shadow-gray-50 transition-all duration-300 ease-in'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-3'>
          <label className='block w-full text-gray-50'>Amount:</label>
          <input
            className='block w-full p-4 rounded shadow bg-gray-500 text-gray-50'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-50'>Category:</label>
          <select
            className='block w-full p-4 rounded shadow bg-gray-500 text-gray-50'
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value=''>Select a category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          <button
            type='button'
            className='p-2 bg-blue-600 text-white rounded ml-2 hover:bg-green-300 hover:text-gray-700 transition-colors duration-300 ease-in'
            onClick={() => navigate('/settings')}
          >
            Edit Categories
          </button>
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-50'>Date:</label>
          <input
            className='block w-full p-4 rounded shadow bg-gray-500 text-gray-50'
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-50'>Notes:</label>
          <textarea
            className='block w-full p-4 rounded shadow bg-gray-500 text-gray-50 mb-5'
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>
        <button
          className='p-3 w-5/12 bg-blue-600 mb-7 hover:bg-pink-800 transition-all duration-300 ease-in'
          type='submit'
        >
          {expenseToEdit !== null ? 'Edit Expense' : 'Add Expense'}
        </button>
      </form>
    </div>
  );
};

ExpenseForm.propTypes = {
  addExpense: PropTypes.func.isRequired,
  editExpense: PropTypes.func.isRequired,
  expenseToEdit: PropTypes.object,
  setExpenseToEdit: PropTypes.func.isRequired,
};

export default ExpenseForm;
