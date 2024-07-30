import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phone, setPhone] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
  };

  const handleRegister = e => {
    e.preventDefault();
    const userData = {
      email,
      password,
      firstName,
      lastName,
      dob,
      phone,
    };
    localStorage.setItem('userData', JSON.stringify(userData));
    navigate('/settings');
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className='bg-white p-8 rounded shadow-md w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4'>
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        <form onSubmit={isRegistering ? handleRegister : handleLogin}>
          {isRegistering && (
            <>
              <input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded-full'
                required
              />
              <input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded w-full'
                required
              />
              <input
                type='date'
                placeholder='Date of Birth'
                value={dob}
                onChange={e => setDob(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded w-full'
                required
              />
              <input
                type='tel'
                placeholder='Phone'
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className='mb-4 p-2 border border-gray-300 rounded w-full'
                required
              />
            </>
          )}
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
            className='mb-4 p-2 border border-gray-300 rounded w-full'
            required
          />
          <button
            type='submit'
            className='bg-blue-500 text-white py-2 px-4 rounded w-full'
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        <button
          className='text-blue-500 mt-4'
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering
            ? 'Already have an account? Login'
            : "Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
