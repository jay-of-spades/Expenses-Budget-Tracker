import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faChartLine,
  faDollarSign,
  faTachometerAlt,
  faCommentsDollar,
  faFileInvoiceDollar,
  faMoneyBillWave,
} from '@fortawesome/free-solid-svg-icons';

const Dashboard = () => {
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [budgets, setBudgets] = useState([]);
  const [showIncomePopup, setShowIncomePopup] = useState(false);
  const [targetIncome, setTargetIncome] = useState(0);
  const [currentIncome, setCurrentIncome] = useState(0);

  useEffect(() => {
    const savedExpenses = localStorage.getItem('expenses');
    const savedIncomes = localStorage.getItem('incomes');
    const savedBudgets = localStorage.getItem('budgets');
    const savedTargetIncome = localStorage.getItem('targetIncome');
    const savedCurrentIncome = localStorage.getItem('currentIncome');
    const savedMonth = localStorage.getItem('month');
    const currentMonth = new Date().getMonth();

    if (savedMonth && parseInt(savedMonth) !== currentMonth) {
      localStorage.removeItem('expenses');
      localStorage.removeItem('budgets');
      setExpenses([]);
      setBudgets([]);
    } else {
      if (savedExpenses) setExpenses(JSON.parse(savedExpenses));
      if (savedBudgets) setBudgets(JSON.parse(savedBudgets));
    }

    localStorage.setItem('month', currentMonth);
    if (savedTargetIncome) setTargetIncome(JSON.parse(savedTargetIncome));
    if (savedCurrentIncome) setCurrentIncome(JSON.parse(savedCurrentIncome));
  }, []);

  const handleIncomeSubmit = e => {
    e.preventDefault();
    localStorage.setItem('targetIncome', JSON.stringify(targetIncome));
    localStorage.setItem('currentIncome', JSON.stringify(currentIncome));
    setShowIncomePopup(false);
  };

  // const incomePercentage = (currentIncome / targetIncome) * 100;
  const incomePercentage =
    targetIncome && currentIncome ? (currentIncome / targetIncome) * 100 : null;

  const calculateTotalExpenses = () => {
    return expenses.reduce(
      (total, expense) => total + parseFloat(expense.amount),
      0
    );
  };

  const calculateTotalBudget = () => {
    return budgets.reduce(
      (total, budget) => total + parseFloat(budget.amount),
      0
    );
  };

  const calculateRemainingBudget = () => {
    return calculateTotalBudget() - calculateTotalExpenses();
  };

  const getRecentTransactions = () => {
    return expenses.slice(-5).reverse();
  };

  const aggregateDataByMonth = data => {
    const result = Array(12).fill(0);
    data.forEach(item => {
      const month = new Date(item.date).getMonth();
      result[month] += parseFloat(item.amount);
    });
    return result;
  };

  const budgetData = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Expenses',
        // data: expenses.map(expense => expense.amount),
        data: aggregateDataByMonth(expenses),
        borderColor: 'red',
        fill: false,
      },
      {
        label: 'Budget',
        // data: budgets.map(budget => budget.amount),
        data: aggregateDataByMonth(budgets),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className='p-4'>
      <div>
        <h1 className='text-blue-500 font-bold mb-12 flex'>
          <FontAwesomeIcon icon={faTachometerAlt} className='mr-2' />
          Dashboard
        </h1>
        <div className='grid grid-cols gap-8'>
          <div className='p-8 rounded shadow-inner shadow-black'>
            <h2 className='text-2xl text-blue-400 font-bold  flex items-center space-x-2 my-5'>
              <FontAwesomeIcon icon={faDollarSign} />
              <span>Income</span>
            </h2>
            <div className='relative'>
              {incomePercentage !== null ? (
                <CircularProgressbar
                  value={incomePercentage}
                  text={`${incomePercentage.toFixed(2)}%`}
                  styles={buildStyles({
                    pathColor: '#4caf50',
                    trailColor: '#d6d6d6',
                    textColor: '#4caf50',
                    strokeWidth: 5,
                  })}
                />
              ) : (
                <div className='text-gray-50 text-center flex justify-center items-center w-full h-24'>
                  <button
                    className='bg-transparent font-bold text-lg my-8 w-3/4 text-red-700 border p-6 rounded-3xl cursor-pointer border-rose-700 hover:bg-rose-200 transition-all duration-500 ease-in'
                    onClick={() => setShowIncomePopup(true)}
                  >
                    <FontAwesomeIcon icon={faEdit} className='mr-2' />
                    Set income
                  </button>
                </div>
              )}
              {/* <button
                onClick={() => setShowIncomePopup(true)}
                className='absolute top-0 right-0 p-2 bg-blue-600 text-white rounded'
              >
                <FontAwesomeIcon icon={faEdit} />
              </button> */}
            </div>
          </div>
          {/* Income Popup */}
          {showIncomePopup && (
            <div className='fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50'>
              <div className='p-8 rounded shadow-inner shadow-black bg-gray-50'>
                <h2 className='text-2xl text-blue-400 font-bold mb-4'>
                  Set Income
                </h2>
                <form onSubmit={handleIncomeSubmit}>
                  <div className='mb-4'>
                    <label className='block mb-2 text-gray-600'>
                      Target Income:
                    </label>
                    <input
                      type='number'
                      value={targetIncome}
                      onChange={e => setTargetIncome(e.target.value)}
                      className='w-full p-2 border rounded'
                      required
                    />
                  </div>
                  <div className='mb-4'>
                    <label className='block mb-2  text-gray-600'>
                      Current Income:
                    </label>
                    <input
                      type='number'
                      value={currentIncome}
                      onChange={e => setCurrentIncome(e.target.value)}
                      className='w-full p-2 border rounded'
                      required
                    />
                  </div>
                  <div className='flex justify-end space-x-2'>
                    <button
                      type='button'
                      onClick={() => setShowIncomePopup(false)}
                      className='p-2 bg-gray-600 text-white rounded'
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='p-2 bg-blue-600 text-white rounded'
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* {Recent Transactions} */}
          <div className='p-8 rounded shadow-inner shadow-black'>
            <h2 className='text-2xl text-blue-400 font-bold mb- my-5 flex'>
              <FontAwesomeIcon icon={faCommentsDollar} className='mr-2' />
              Recent Transactions
            </h2>
            {getRecentTransactions().length === 0 ? (
              <p className='text-gray-50 text-lg'>No Transactions.</p>
            ) : (
              <ul>
                {getRecentTransactions().map((expense, index) => (
                  <li
                    key={index}
                    className='p-2 border-b border-gray-50 pb-4 flex justify-between text-gray-50'
                  >
                    <span>{expense.date}</span>
                    <span>{expense.category}</span>
                    <span>${expense.amount}</span>
                    <span>{expense.notes}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* {Total Expenses Box} */}
          <div className='p-8 rounded shadow-inner shadow-black'>
            <h2 className='text-2xl text-blue-400 font-bold my-5 flex'>
              <FontAwesomeIcon icon={faFileInvoiceDollar} className='mr-2' />
              Total Expenses of the Month
            </h2>
            <p className='text-4xl font-extrabold text-gray-50 p-6'>
              ${calculateTotalExpenses()}
            </p>
          </div>

          {/* Remaining Budget Box */}
          <div className='p-8 rounded shadow-inner shadow-black'>
            <h2 className='text-2xl text-blue-400 font-bold my-5 flex'>
              <FontAwesomeIcon icon={faMoneyBillWave} className='mr-2' />
              Remaining Budget this Month
            </h2>
            <p className='text-4xl font-extrabold text-gray-50 p-6'>
              ${calculateRemainingBudget().toFixed(2)}
            </p>
          </div>
          {/* Budget and Expenses Line Graph */}
          <div className='col-span-2 p-8 rounded shadow-inner shadow-black'>
            <h2 className='text-2xl text-blue-400 font-bold mb-2 flex items-center space-x- my-5'>
              <FontAwesomeIcon icon={faChartLine} className='mr-2' />
              <span>Budget vs Expenses</span>
            </h2>
            <Line data={budgetData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
