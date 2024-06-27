// import React from 'react';
import PropTypes from 'prop-types';

const ExpenseList = ({ expenses, onEdit, onDelete }) => {
  return (
    <div className='expense-list bg-pink-800 p-2 rounded-md text-white w-full'>
      <h2 className='text-2xl font-semibold'>Registered Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <ul>
          {expenses.map((expense, index) => (
            <li
              key={index}
              className='flex justify-between items-center p-2 border-b border-gray-300'
            >
              <div className='flex w-2/3'>
                <span className='font-bold'>{expense.date}</span>
                <span className='font-bold'>{expense.category}</span>
                <span className='font-bold'>${expense.amount}</span>
                <span className='font-bold'>{expense.notes}</span>
              </div>
              <div className='flex space-x-2'>
                <button
                  onClick={() => onEdit(index)}
                  className='bg-yellow-500 text-white p-1 rounded'
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(index)}
                  className='bg-red-500 text-white p-1 rounded'
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ExpenseList.propTypes = {
  expenses: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ExpenseList;
