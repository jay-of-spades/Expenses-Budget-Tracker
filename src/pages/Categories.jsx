import { useState, useEffect } from 'react';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

const Categories = () => {
  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  const [categoryToEdit, setCategoryToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('categories', JSON.stringify(categories));
  }, [categories]);

  const addCategory = newCategory => {
    setCategories([...categories, newCategory]);
  };

  const editCategory = (index, updatedCategory) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = updatedCategory;
    setCategories(updatedCategories);
  };

  const deleteCategory = index => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  const handleEdit = index => {
    setCategoryToEdit({ index, ...categories[index] });
  };

  return (
    <div>
      <h1>Manage Categories</h1>
      <CategoryForm
        addCategory={addCategory}
        editCategory={editCategory}
        categoryToEdit={categoryToEdit}
        setCategoryToEdit={setCategoryToEdit}
      />
      <CategoryList
        categories={categories}
        onEdit={handleEdit}
        onDelete={deleteCategory}
      />
    </div>
  );
};

export default Categories;
