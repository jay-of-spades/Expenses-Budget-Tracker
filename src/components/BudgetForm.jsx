import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BudgetForm = ({
  addBudget,
  editBudget,
  budgetToEdit,
  setBudgetToEdit,
  categories,
}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (budgetToEdit !== null) {
      setAmount(budgetToEdit.amount);
      setCategory(budgetToEdit.category);
      setDate(budgetToEdit.date);
      setNotes(budgetToEdit.notes);
    }
  }, [budgetToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    const newBudget = { amount, category, date, notes };

    if (budgetToEdit !== null) {
      editBudget(budgetToEdit.index, newBudget);
      setBudgetToEdit(null);
    } else {
      addBudget(newBudget);
    }
    setAmount('');
    setCategory('');
    setDate('');
    setNotes('');
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <form
        className='flex flex-col gap-3 mb-5 neumorphicBox1 w-2/3 p-10'
        onSubmit={handleSubmit}
      >
        <div className='flex gap-3'>
          <label className='block w-full text-gray-700'>Amount:</label>
          <input
            className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
          />
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-700'>Category:</label>
          <select
            className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
          >
            <option value=''>Select Category</option>
            {categories.map((cat, index) => (
              <option key={index} value={cat} className='text-white'>
                {cat}
              </option>
            ))}
          </select>
          <button
            type='button'
            className='p-2 bg-blue-600 text-white rounded ml-2'
            onClick={() => navigate('/settings')}
          >
            Edit Categories
          </button>
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-700'>Date:</label>
          <input
            className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
            type='date'
            value={date}
            onChange={e => setDate(e.target.value)}
            required
          />
        </div>
        <div className='flex gap-3'>
          <label className='block w-full text-gray-700'>Notes:</label>
          <textarea
            className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
            value={notes}
            onChange={e => setNotes(e.target.value)}
          />
        </div>
        <button className='p-3 w-5/12 bg-blue-600 mb-7' type='submit'>
          {budgetToEdit !== null ? 'Edit' : 'Add'} Budget
        </button>
      </form>
    </div>
  );
};

BudgetForm.propTypes = {
  addBudget: PropTypes.func.isRequired,
  editBudget: PropTypes.func.isRequired,
  budgetToEdit: PropTypes.object,
  setBudgetToEdit: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
};

export default BudgetForm;
