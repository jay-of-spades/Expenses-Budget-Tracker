import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const Reports = () => {
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

  const getExpenseData = () => {
    const categories = [...new Set(expenses.map(expense => expense.category))];

    const data = categories.map(category => {
      return expenses
        .filter(expense => expense.category === category)
        .reduce((total, expense) => total + parseFloat(expense.amount), 0);
    });

    return {
      labels: categories,
      datasets: [
        {
          label: 'Expenses',
          data: data,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  const getBudgetData = () => {
    const categories = budgets.map(budget => budget.category);

    const data = budgets.map(budget => budget.amount);

    return {
      labels: categories,
      datasets: [
        {
          label: 'Budgets',
          data: data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Financial Reports</h1>
      <div className='mb-8'>
        <h2 className='text-2xl font-bold mb-4'>Expenses by Category</h2>
        <Bar data={getExpenseData()} />
      </div>
      <div>
        <h2 className='text-2xl font-bold mb-4'>Budget by Category</h2>
        <Bar data={getBudgetData()} />
      </div>
    </div>
  );
};

export default Reports;
