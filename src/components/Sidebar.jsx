import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className='w-80 h-3/4 p-4 bg-gray-100'>
      <nav>
        <ul className='space-y-10 h-3/4 flex flex-col text-2xl my-10'>
          <li>
            <Link className='text-blue-600 hover:underline' to='/'>
              Home
            </Link>
          </li>
          <li>
            <Link className='text-blue-600 hover:underline' to='/dashboard'>
              Dashboard
            </Link>
          </li>
          <li>
            <Link className='text-blue-600 hover:underline' to='/expenses'>
              Expenses
            </Link>
          </li>
          <li>
            <Link className='text-blue-600 hover:underline' to='/budget'>
              Budget
            </Link>
          </li>
          <li>
            <Link className='text-blue-600 hover:underline' to='/categories'>
              Categories
            </Link>
          </li>
          <li>
            <Link className='text-blue-600 hover:underline' to='/reports'>
              Reports
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
