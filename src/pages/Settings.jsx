import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDollarSign,
  faLanguage,
  faCreditCard,
  faTags,
  faUser,
  faUserAlt,
  faKey,
  faLockOpen,
  faPenAlt,
  faCalendarAlt,
  faMobileAlt,
  faEnvelope,
  faImage,
  faAdd,
} from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
  const [currency, setCurrency] = useState('');
  const [language, setLanguage] = useState('');
  const [accounts, setAccounts] = useState({
    creditCard: '',
    creditLimit: '',
    savings: '',
    investment: '',
  });

  const [categories, setCategories] = useState([]);
  const [profile, setProfile] = useState({
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: '',
    description: '',
    password: '',
    newPassword: '',
    confirmPassword: '',
    profilePicture: '',
  });

  const [newCategory, setNewCategory] = useState('');
  const [categoryToEdit, setCategoryToEdit] = useState('null');

  useEffect(() => {
    const savedCurrency = localStorage.getItem('currency');
    const savedLanguage = localStorage.getItem('language');
    const savedAccounts = localStorage.getItem('accounts');
    const savedCategories = localStorage.getItem('categories');
    const savedProfile = localStorage.getItem('profile');

    if (savedCurrency) setCurrency(savedCurrency);
    if (savedLanguage) setLanguage(savedLanguage);
    if (savedAccounts) setAccounts(JSON.parse(savedAccounts));
    if (savedCategories) setCategories(JSON.parse(savedCategories));
    if (savedProfile) setProfile(JSON.parse(savedProfile));
  }, []);

  const handleProfilePictureUpload = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile({ ...profile, profilePicture: reader.result });
      localStorage.setItem(
        'profile',
        JSON.stringify({ ...profile, profilePicture: reader.result })
      );
    };
    reader.readAsDataURL(file);
  };

  const handlePasswordChange = e => {
    e.preventDefault();
    if (profile.newPassword !== profile.confirmPassword) {
      alert('Password do not match!');
    }
  };

  const saveAccountInformation = e => {
    e.preventDefault();
    localStorage.setItem('accounts', JSON.stringify(accounts));
  };

  const addCategory = e => {
    e.preventDefault();
    if (categoryToEdit !== null) {
      const updatedCategories = [...categories];
      updatedCategories[categoryToEdit] = newCategory;
      setCategories(updatedCategories);
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
      setCategoryToEdit(null);
    } else {
      setCategories([...categories, newCategory]);
      localStorage.setItem(
        'categories',
        JSON.stringify([...categories, newCategory])
      );
    }
    setNewCategory('');
  };

  const editCategory = index => {
    setNewCategory(categories[index]);
    setCategoryToEdit(index);
  };

  const deleteCategory = index => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
  };

  const saveUserProfile = e => {
    e.preventDefault();
    localStorage.setItem('profile', JSON.stringify(profile));
  };

  function renderCurrencySettings() {
    return (
      <div>
        <div className='my-8 flex justify-between items-center'>
          <label className='text-gray-50'>Select Currency:</label>
          <select
            value={currency}
            onChange={e => setCurrency(e.target.value)}
            className='p-4 rounded shadow bg-gray-500 cursor-pointer'
          >
            <option value='USD'>$</option>
            <option value='EUR'>€</option>
            <option value='GBP'>£</option>
            <option value='YEN'>¥</option>
            <option value='YUAN'>CN¥</option>
            <option value='RUP'>₹</option>
          </select>
        </div>
        <button
          onClick={() => localStorage.setItem('currency', currency)}
          className='bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
        >
          Save
        </button>
      </div>
    );
  }

  function renderLanguageSettings() {
    return (
      <div>
        <div className='my-8 flex justify-between items-center'>
          <label className='text-gray-50'>Select Language:</label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className='p-4 rounded shadow bg-gray-500 cursor-pointer'
          >
            <option value='en'>🇬🇧</option>
            <option value='es'>🇪🇸</option>
            <option value='fr'>🇫🇷</option>
            <option value='de'>🇩🇪</option>
            <option value='it'>🇮🇹</option>
            <option value='nl'>🇳🇱</option>
            <option value='cn'>🇨🇳</option>
            <option value='jp'>🇯🇵</option>
            <option value='in'>🇮🇳</option>
          </select>
        </div>
        <button
          onClick={() => localStorage.setItem('language', language)}
          className='bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
        >
          Save
        </button>
      </div>
    );
  }

  function renderAccountInformationSettings() {
    return (
      <div>
        <form onSubmit={saveAccountInformation}>
          <div className='my-5 flex justify-between items-center'>
            <label className='text-gray-50'>Credit Card:</label>
            <input
              type='text'
              value={accounts.creditCard}
              onChange={e =>
                setAccounts({ ...accounts, creditCard: e.target.value })
              }
              className='p-4 rounded shadow bg-gray-500'
            />
          </div>
          <div className='my-5 flex justify-between items-center'>
            <label className='text-gray-50'>Credit Limit:</label>
            <input
              type='number'
              value={accounts.creditLimit}
              onChange={e =>
                setAccounts({ ...accounts, creditLimit: e.target.value })
              }
              className='p-4 rounded bg-gray-500'
            />
          </div>
          <div className='my-5 flex justify-between items-center'>
            <label className='text-gray-50'>Savings:</label>
            <input
              type='number'
              value={accounts.savings}
              onChange={e =>
                setAccounts({ ...accounts, savings: e.target.value })
              }
              className='p-4 rounded bg-gray-500'
            />
          </div>
          <div className='my-5 flex justify-between items-center'>
            <label className='text-gray-50'>Investment Account:</label>
            <input
              type='text'
              value={accounts.investment}
              onChange={e =>
                setAccounts({ ...accounts, investment: e.target.value })
              }
              className='p-4 rounded bg-gray-500'
            />
          </div>
          <button
            type='submit'
            className='mt-6 bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
          >
            Save
          </button>
        </form>
      </div>
    );
  }

  function renderCategoriesSettings() {
    return (
      <div className='w-full'>
        <div className='divide-y divide-gray-50'>
          {categories.map((category, index) => (
            <div key={index} className='flex justify-between w-full p-4'>
              <span className='text-gray-50 block'>{category}</span>
              <div className='flex justify-between w-2/6'>
                <button
                  onClick={() => editCategory(index)}
                  className='bg-gray-400 hover:bg-green-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteCategory(index)}
                  className='bg-gray-400 hover:bg-red-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={addCategory} className='p-2 w-2/3 mt-8'>
          <h3 className='flex text-lg font-bold text-blue-400 items-center my-8'>
            <FontAwesomeIcon icon={faAdd} className='mr-2' />
            Add New Category
          </h3>
          <div className='flex justify-between items-center my-4'>
            <label className='text-gray-50'>New Category:</label>
            <input
              type='text'
              value={newCategory}
              onChange={e => setNewCategory(e.target.value)}
              className='p-4 rounded bg-gray-500'
            />
          </div>
          <button
            type='submit'
            className='bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out'
          >
            {categoryToEdit !== null ? 'Edit' : 'Add'}
          </button>
        </form>
      </div>
    );
  }

  function renderUserProfileSettings() {
    return (
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <form onSubmit={saveUserProfile} className='p-8 rounded-md'>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faImage} className='mr-2' />
                Profile Picture:
              </label>
              <input
                type='file'
                onChange={handleProfilePictureUpload}
                className='text-gray-50 p-2 cursor-pointer'
              />
            </div>

            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faUser} className='mr-2' />
                First Name:
              </label>
              <input
                type='text'
                value={profile.firstName}
                onChange={e =>
                  setProfile({ ...profile, firstName: e.target.value })
                }
                className='p-4 rounded shadow bg-gray-500 w-1/2'
                required
              />
            </div>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faUserAlt} className='mr-2' />
                Last Name:
              </label>
              <input
                type='text'
                value={profile.lastName}
                onChange={e =>
                  setProfile({ ...profile, lastName: e.target.value })
                }
                required
                className='p-4 rounded shadow bg-gray-500 w-1/2'
              />
            </div>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faCalendarAlt} className='mr-2' />
                Date of Birth:
              </label>
              <input
                type='date'
                value={profile.dob}
                onChange={e => setProfile({ ...profile, dob: e.target.value })}
                required
                className='p-4 rounded shadow bg-gray-500 w-1/2'
              />
            </div>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faMobileAlt} className='mr-2' />
                Phone Number:
              </label>
              <input
                type='tel'
                value={profile.phone}
                onChange={e =>
                  setProfile({ ...profile, phone: e.target.value })
                }
                required
                className='p-4 rounded shadow bg-gray-500 w-1/2'
              />
            </div>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-center text-gray-50'>
                <FontAwesomeIcon icon={faEnvelope} className='mr-2' />
                Email:
              </label>
              <input
                type='email'
                value={profile.email}
                onChange={e =>
                  setProfile({ ...profile, email: e.target.value })
                }
                required
                className='p-4 rounded shadow bg-gray-500 w-1/2'
              />
            </div>
            <div className='flex justify-between items-center my-4'>
              <label className='flex items-cente text-gray-50'>
                <FontAwesomeIcon icon={faPenAlt} className='mr-2' />
                Brief Description:
              </label>
              <textarea
                value={profile.description}
                onChange={e =>
                  setProfile({ ...profile, description: e.target.value })
                }
                className='resize p-4 rounded shadow bg-gray-500 w-1/2'
              ></textarea>
            </div>
            <button
              type='submit'
              className='bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out w-4/5 m-5 p-4'
            >
              Save
            </button>
          </form>
        </div>
      </div>
    );
  }

  function renderPasswordReset() {
    return (
      <div className='grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <form onSubmit={handlePasswordChange} className='p-8 rounded-md'>
            <label className='flex items-center text-gray-50 mt-10'>
              <FontAwesomeIcon icon={faKey} className='mr-2' />
              New Password:
            </label>
            <input
              type='password'
              value={profile.newPassword}
              onChange={e =>
                setProfile({ ...profile, newPassword: e.target.value })
              }
              required
              className='p-4 rounded shadow bg-gray-500 w-full'
            />

            <label className='flex items-center text-gray-50 mt-10'>
              <FontAwesomeIcon icon={faKey} className='mr-2' />
              Confirm Password:
            </label>
            <input
              type='password'
              value={profile.confirmPassword}
              onChange={e =>
                setProfile({ ...profile, confirmPassword: e.target.value })
              }
              className='p-4 rounded shadow bg-gray-500 w-full'
              required
            />
            <button
              type='submit'
              className='bg-gray-500 hover:bg-blue-300 hover:text-gray-700 transition-colors duration-300 ease-in-out block mt-10 p-4 w-4/5 m-5'
            >
              Change Password
            </button>
          </form>
        </div>
      </div>
    );
  }
  return (
    <div className='grid grid-cols-3 gap-4 '>
      <div className='p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-2 flex items-center text-blue-400'>
          <FontAwesomeIcon icon={faDollarSign} className='mr-2' />
          Currency
        </h2>
        {renderCurrencySettings()}
      </div>
      <div className='col-span-2 p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-6 flex items-center text-blue-400'>
          <FontAwesomeIcon icon={faTags} className='mr-2' />
          Categories
        </h2>
        {renderCategoriesSettings()}
      </div>
      <div className='col-span-1 flex flex-col p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-2 flex items-center text-blue-400'>
          <FontAwesomeIcon icon={faLanguage} className='mr-2' />
          Language
        </h2>

        {renderLanguageSettings()}
      </div>

      <div className='col-span-2 p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-2 flex items-center text-blue-400 '>
          <FontAwesomeIcon icon={faCreditCard} className='mr-2' />
          Accounts
        </h2>
        {renderAccountInformationSettings()}
      </div>

      <div className='col-span-3 p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-2 flex items-center text-blue-400'>
          <FontAwesomeIcon icon={faUser} className='mr-2' />
          Profile
        </h2>
        {renderUserProfileSettings()}
      </div>
      <div className='col-span-3 p-10 bg-gray-800 shadow-inner shadow-black hover:bg-gray-800 hover:shadow hover:shadow-gray-400 transition-colors duration-300 ease-in-out'>
        <h2 className='text-3xl font-bold mb-2 flex items-center text-blue-400'>
          <FontAwesomeIcon icon={faLockOpen} className='mr-2' />
          Password Reset
        </h2>
        {renderPasswordReset()}
      </div>
    </div>
  );
};

export default Settings;
