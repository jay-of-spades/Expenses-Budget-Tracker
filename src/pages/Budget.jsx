import { useState, useEffect } from 'react';
import BudgetForm from '../components/BudgetForm';
import BudgetList from '../components/BudgetList';

const Budget = () => {
  const [budgets, setBudgets] = useState(() => {
    const savedBudgets = localStorage.getItem('budgets');
    return savedBudgets ? JSON.parse(savedBudgets) : [];
  });

  const [budgetToEdit, setBudgetToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem('budgets', JSON.stringify(budgets));
  }, [budgets]);

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
      <h1>Budgets</h1>
      <BudgetForm
        addBudget={addBudget}
        editBudget={editBudget}
        budgetToEdit={budgetToEdit}
        setBudgetToEdit={setBudgetToEdit}
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
