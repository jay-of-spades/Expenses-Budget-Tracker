// import React from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Budget from './pages/Budget';
import Layout from './components/Layout';
import Reports from './pages/Reports';
import Categories from './pages/Categories';
import Home from './pages/Home';
import './index.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to={<Home />} />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/expenses' element={<Expenses />} />
          <Route path='/budget' element={<Budget />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/reports' element={<Reports />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
