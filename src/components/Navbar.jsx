import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='flex justify-between items-center p-4 z-[100]'>
      <Link to='/'>
        <h1 className='text-red-800 text-4xl font-bold cursor-pointer'>
          NETFLIX
        </h1>
      </Link>

      {user ? (
        <div>
          <Link to='/account'>
            <button className='text-[10px] md:text-sm  py-2  text-white pr-2'>
              {user?.email}
            </button>
          </Link>

          <button
            onClick={handleLogOut}
            className='px-6 py-2 text-white  bg-red-500 '
          >
            Log Out
          </button>
        </div>
      ) : (
        <div>
          <Link to='/signin'>
            <button className='px-6 py-2  text-white pr-4'>Sign in</button>
          </Link>

          <Link to='/signup'>
            <button className='px-6 py-2 text-white  bg-red-500 '>
              Sign UP
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
