import PropTypes from 'prop-types';

const BudgetList = ({ budgets, onEdit, onDelete }) => {
  return (
    <div className='expense-list bg-pink-800 p-2 rounded-md text-white w-full'>
      <h2 className='text-2xl font-semibold'>Registered Budgets</h2>
      {budgets.length === 0 ? (
        <p>No budget recorded.</p>
      ) : (
        <ul>
          {budgets.map((budget, index) => (
            <li
              key={index}
              className='flex justify-between items-center p-2 border-b border-gray-300'
            >
              <div className='flex w-2/3'>
                <span className='font-bold'>{budget.date}</span>
                <span className='font-bold'>{budget.category}</span>
                <span className='font-bold'>{budget.amount}</span>
                <span className='font-bold'>{budget.notes}</span>
              </div>
              <div className='flex space-x-2'>
                <button
                  className='bg-yellow-500 hover:bg-yellow-600 text-white p-1 rounded'
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className='bg-red-500 hover:bg-red-600  text-white p-1 rounded'
                  onClick={() => onDelete(index)}
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

BudgetList.propTypes = {
  budgets: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BudgetList;
