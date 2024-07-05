import PropTypes from 'prop-types';

const CategoryList = ({ categories, onEdit, onDelete }) => {
  return (
    <div className='category-list bg-pink-800 p-2 rounded text-white w-full'>
      <h2 className='text-2xl font-semibold'>Categories</h2>
      {categories.length === 0 ? (
        <p>No categories recorded.</p>
      ) : (
        <ul>
          {categories.map((category, index) => (
            <li
              key={index}
              className='flex justify-between items-center p-2 border-b border-gray-300'
            >
              <span className='font-bold block'>{category.name}</span>
              <div className='flex space-x-2'>
                <button
                  className='bg-yellow-500 hover:bg-yellow-600 text-white p-1 rounded'
                  onClick={() => onEdit(index)}
                >
                  Edit
                </button>
                <button
                  className='bg-red-500 hover:bg-red-600 text-white p-1 rounded'
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

CategoryList.propTypes = {
  categories: PropTypes.array.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default CategoryList;
