import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faTachometerAlt,
  faWallet,
  faShoppingCart,
  faSearch,
  faCog,
  faQuestionCircle,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const isLoggedIn = true;
  return (
    <aside className=' w-10/12 p-2 bg-gray-900 fixedSidebar sm:w-11/12 md:w-80 md:h-4/5 md:bg-gray-800'>
      <nav className='bg-gray-900 rounded-lg sm:pr-4 md:bg-gray-800 md:px-6 md:py-10 '>
        <ul className='text-3xl md:space-y-10 md:h-3/4 flex justify-between md:flex-col md:text-2xl'>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/home'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faHome} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Home</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Home
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/dashboard'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faTachometerAlt} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Dashboard</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Dashboard
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/expenses'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faShoppingCart} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Expenses</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Expenses
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/budget'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faWallet} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Budget</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Budget
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/search'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faSearch} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Search</span>
              </div>
            </Link>
            <div className='absolute left-1/2 transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Search
            </div>
          </li>
        </ul>
        <hr className='hidden md:block my-8 border-white' />

        <ul className='flex justify-around mt-1 text-3xl md:space-y-10 md:h-3/4  md:flex-col md:text-lg'>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/settings'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faCog} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Settings</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Settings
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/help'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faQuestionCircle} className='mr-2' />
                <span className='hidden md:block md:font-bold'>Help</span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Help
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/login'>
              <div className='md:flex'>
                <FontAwesomeIcon icon={faSignOutAlt} className='mr-2' />
                <span className='hidden md:block md:font-bold'>
                  {isLoggedIn ? 'Log Out' : 'Log In'}
                </span>
              </div>
            </Link>
            <div className='absolute left-full transform -translate-x-1/3 -translate-y-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2'>
              {isLoggedIn ? 'Log Out' : 'Log In'}
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
