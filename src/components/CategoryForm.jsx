import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CategoryForm = ({
  addCategory,
  editCategory,
  categoryToEdit,
  setCategoryToEdit,
}) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (categoryToEdit !== null) {
      setName(categoryToEdit.name);
    }
  }, [categoryToEdit]);

  const handleSubmit = e => {
    e.preventDefault();
    if (categoryToEdit !== null) {
      editCategory(categoryToEdit.index, { name });
      setCategoryToEdit(null);
    } else {
      addCategory({ name });
    }
    setName('');
  };

  return (
    <form className='flex flex-col gap-3 mb-5' onSubmit={handleSubmit}>
      <div className='flex gap-3 w-2/5'>
        <label className='block w-full'>Category Name:</label>
        <input
          className='block w-full p-3 bg-gray-300 text-gray-800 rounded-sm'
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <button className='p-3 w-5/12 bg-blue-600 text-white mb-7' type='submit'>
        {categoryToEdit !== null ? 'Edit' : 'Add'} Category
      </button>
    </form>
  );
};

CategoryForm.propTypes = {
  addCategory: PropTypes.func.isRequired,
  editCategory: PropTypes.func.isRequired,
  categoryToEdit: PropTypes.object,
  setCategoryToEdit: PropTypes.func.isRequired,
};

export default CategoryForm;
