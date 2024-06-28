import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    if (savedExpenses) {
      setExpenses(JSON.parse(savedExpenses));
    }

    const savedBudgets = localStorage.getItem('budgets');
    if (savedBudgets) {
      setBudgets(JSON.parse(savedBudgets));
    }
  }, []);

  const calculateTotalExpenses = () => {
    return expenses.reduce(
      (total, expense) => total + parseFloat(expense.amount),
      0
    );
  };

  const calculateRemainingBudget = category => {
    const budget = budgets.find(b => b.category === category);
    if (!budget) return 0;
    const expensesForCategory = expenses.filter(e => e.category === category);
    const totalExpensesForCategory = expensesForCategory.reduce(
      (total, expense) => total + parseFloat(expense.amount),
      0
    );
    return budget.amount - totalExpensesForCategory;
  };

  const getRecentTransactions = () => {
    return expenses.slice(-5).reverse();
  };
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-12'>Dashboard</h1>
      <div className='mb-16'>
        <h2 className='text-2xl font-bold mb-6'>
          Total Expenses: ${calculateTotalExpenses()}
        </h2>
        <h2 className='text-2xl font-bold mb-4'>Remaining Budget</h2>
        {budgets.map((budget, index) => (
          <div
            key={index}
            className='mb-4 p-2 border-b border-gray-300 w-2/5 flex justify-between items-start'
          >
            <span>
              {budget.category}: ${budget.amount}
            </span>
            <span>Remaining: ${calculateRemainingBudget(budget.category)}</span>
          </div>
        ))}
      </div>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Recent Transactions</h2>
        {getRecentTransactions().length === 0 ? (
          <p>No Transactions.</p>
        ) : (
          <ul>
            {getRecentTransactions().map((expense, index) => (
              <li
                key={index}
                className='p-2 border-b border-gray-300 w-10/12 flex justify-between items-start'
              >
                <span className='w-3/12'>{expense.date}</span>
                <span className='w-3/12'>{expense.category}</span>
                <span className='w-3/12'>${expense.amount}</span>
                <span className='w-3/12'>{expense.notes}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
