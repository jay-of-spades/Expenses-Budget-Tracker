import { useState, useEffect } from 'react';
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
  faBars as faHamburger,
  faClose,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const isLoggedIn = true;
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavHamburgerClick = () => {
    setIsNavOpen(true);
  };
  const handleCloseNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return (
    <aside className='w-10/12 h-28 flex flex-col justify-center p-2 bg-gray-900 fixedSidebar sm:w-11/12 md:block md:w-80 md:h-4/5 md:bg-gray-800'>
      <nav className='bg-gray-900 rounded-lg sm:pr-4 md:bg-gray-800 md:px-6 md:py-10 '>
        <ul className='text-3xl md:space-y-10 md:h-3/4 flex justify-between md:flex-col md:text-2xl'>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/home'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faHome}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
                <span className='hidden md:block md:font-bold'>Home</span>
              </div>
            </Link>
            <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Home
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/dashboard'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faTachometerAlt}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
                <span className='hidden md:block md:font-bold'>Dashboard</span>
              </div>
            </Link>
            <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Dashboard
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/expenses'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faShoppingCart}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
                <span className='hidden md:block md:font-bold'>Expenses</span>
              </div>
            </Link>
            <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Expenses
            </div>
          </li>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/budget'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faWallet}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
                <span className='hidden md:block md:font-bold'>Budget</span>
              </div>
            </Link>
            <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Budget
            </div>
          </li>
          <li className='relative group hidden md:block'>
            <Link className='text-blue-400 hover:text-gray-100' to='/search'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faSearch}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
                <span className='hidden md:block md:font-bold'>Search</span>
              </div>
            </Link>
            <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
              Search
            </div>
          </li>
          <li className='mr-8 md:hidden'>
            <div
              id='navHamburger'
              className='text-blue-400 hover:cursor-pointer hover:text-gray-100 relative group'
              onClick={handleNavHamburgerClick}
            >
              <FontAwesomeIcon icon={faHamburger} />
              <div className='absolute left-0 -bottom-16 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
                Other Menus
              </div>
            </div>
            <div
              id='smallNav'
              className={`fixed flex flex-col justify-center items-start left-1/2 -translate-x-1/2 ${
                isNavOpen ? 'bottom-28 opacity-100' : '-bottom-32 opacity-10'
              }  w-full h-32 transition-all duration-300 ease-in-out`}
            >
              <div
                id='closeNav'
                className='absolute grid place-items-center top-2 right-5 text-red-700 rounded-full bg-gray-300 text-md w-8 h-8 hover:cursor-pointer'
                onClick={handleCloseNav}
              >
                <FontAwesomeIcon icon={faClose} />
              </div>
              <div className='absolute w-full h-full -z-10 bg-gray-900 opacity-85'></div>
              <ul className='absolute bottom-15 left-1/2 -translate-x-1/2 flex gap-10'>
                <li className='relative group md:block'>
                  <Link
                    className='text-blue-400 hover:text-gray-100'
                    to='/search'
                    onClick={handleCloseNav}
                  >
                    <div className='md:flex'>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className='mt-0 mr-2 md:mt-1 md:mr-6'
                      />
                      <span className='hidden'>Search</span>
                    </div>
                  </Link>
                  <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
                    Search
                  </div>
                </li>
                <li className='relative group'>
                  <Link
                    className='text-blue-400 hover:text-gray-100'
                    to='/settings'
                    onClick={handleCloseNav}
                  >
                    <div className='md:flex'>
                      <FontAwesomeIcon
                        icon={faCog}
                        className='mt-0 mr-2 md:mt-1 md:mr-6'
                      />
                      <span className='hidden md:block md:font-bold'>
                        Settings
                      </span>
                    </div>
                  </Link>
                  <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
                    Settings
                  </div>
                </li>
                <li className='relative group'>
                  <Link
                    className='text-blue-400 hover:text-gray-100'
                    to='/help'
                    onClick={handleCloseNav}
                  >
                    <div className='md:flex'>
                      <FontAwesomeIcon
                        icon={faQuestionCircle}
                        className='mt-0 mr-2 md:mt-1 md:mr-6'
                      />
                      <span className='hidden md:block md:font-bold'>Help</span>
                    </div>
                  </Link>
                  <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
                    Help
                  </div>
                </li>
                <li className='relative group'>
                  <Link
                    className='text-blue-400 hover:text-gray-100'
                    to='/login'
                    onClick={handleCloseNav}
                  >
                    <div className='md:flex'>
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className='mt-0 mr-2 md:mt-1 md:mr-6'
                      />
                      <span className='hidden md:block md:font-bold'>
                        {isLoggedIn ? 'Log Out' : 'Log In'}
                      </span>
                    </div>
                  </Link>
                  <div className='absolute left-0 -bottom-12 transform -translate-y-1/2 mb-2 hidden group-hover:block md:group-hover:hidden bg-gray-700 text-white text-xs rounded py-1 px-2'>
                    {isLoggedIn ? 'Log Out' : 'Log In'}
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <hr className='hidden md:block my-8 border-white' />

        <ul className='hidden md:flex justify-around mt-1 text-3xl md:space-y-10 md:h-3/4  md:flex-col md:text-lg'>
          <li className='relative group'>
            <Link className='text-blue-400 hover:text-gray-100' to='/settings'>
              <div className='md:flex'>
                <FontAwesomeIcon
                  icon={faCog}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
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
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
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
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  className='mt-0 mr-2 md:mt-1 md:mr-6'
                />
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
