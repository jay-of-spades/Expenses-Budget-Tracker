import { useState, useEffect } from 'react';
import BudgetForm from '../components/BudgetForm';
import BudgetList from '../components/BudgetList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';

const Budget = () => {
  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem('budgets');
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  });

  const [budgetToEdit, setBudgetToEdit] = useState(null);

  const [categories, setCategories] = useState(() => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : [];
  });

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

  useEffect(() => {
    const savedCategories = localStorage.getItem('categories');
    if (savedCategories) {
      setCategories(JSON.parse(savedCategories));
    }
  }, []);

  const addBudget = newBudget => {
    setBudgets([...budgets, newBudget]);
  };

  const editBudget = (index, updateBudget) => {
    const updatedBudgets = [...budgets];
    updatedBudgets[index] = updateBudget;
    setBudgets(updatedBudgets);
  };

  const deleteBudget = index => {
    const updatedBudgets = budgets.filter((_, i) => i !== index);
    setBudgets(updatedBudgets);
  };

  const handleEdit = index => {
    setBudgetToEdit({ index, ...budgets[index] });
  };

  return (
    <div>
      <h1 className='text-blue-500 font-bold mb-10 flex'>
        <FontAwesomeIcon icon={faWallet} className='mr-2' />
        Budget
      </h1>
      <BudgetForm
        addBudget={addBudget}
        editBudget={editBudget}
        budgetToEdit={budgetToEdit}
        setBudgetToEdit={setBudgetToEdit}
        categories={categories}
      />
      <BudgetList
        budgets={budgets}
        onEdit={handleEdit}
        onDelete={deleteBudget}
      />
    </div>
  );
};

export default Budget;
