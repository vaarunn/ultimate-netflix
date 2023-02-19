import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import netflixBackground from '../assets/netflixBg.jpg';
import { UserAuth } from '../context/AuthContext';
const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { signIn } = UserAuth();
  const navigate = useNavigate();

  const handleSingIn = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/');
    } catch (error) {
      console.error(error);
      setError(error.message);
    }
  };
  return (
    <div className='w-full h-screen'>
      <img
        className='hidden sm:block absolute w-full h-full object-cover'
        src={netflixBackground}
        alt='/'
      />
      {/* overlay  */}
      <div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>

      <div className='fixed w-full px-4 py-24 z-50'>
        {/* box  */}
        <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
          <div className='max-w-[320px] mx-auto py-16'>
            <h1 className='text-3xl font-bold'>Sign In</h1>
            {error ? <p className='p-2 my-3 bg-red-900'>{error}</p> : null}
            <form onSubmit={handleSingIn} className='w-full flex flex-col'>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className='p-3 my-2 bg-gray-700 rounded'
                placeholder='email'
                type='email'
              />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className='p-3 my-2 bg-gray-700 rounded'
                placeholder='password'
                type='password'
              />
              <button className='bg-red-600 py-3 my-6 rounded font-bold'>
                Sign In
              </button>
            </form>
            <div className='flex items-center justify-between text-sm text-gray-600'>
              <p>
                <input className='mr-2' type='checkbox' />
                Remember Me
              </p>
              <p>Need Help?</p>
            </div>
            <p className='py-4'>
              <span className='text-gray-600 mr-2'>New to Netflix?</span>
              <Link to='/signup'>Sign Up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
