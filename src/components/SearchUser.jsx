import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { usePageContext } from '../context/PageContext';

function SearchUser() {
  const [user, setUser] = useState('');
  const { setCurrentPage } = usePageContext();

  const { name } = useParams();

  const navigate = useNavigate();

  const handleFetchUser = (e) => {
    e.preventDefault();
    if (name === user) return;
    if (!user) return;
    setCurrentPage(1);
    navigate(`${user}`);
  };

  return (
    <form
      onSubmit={handleFetchUser}
      className='w-5/6 mt-2 md:mt-0 flex justify-center md:w-1/2 max-w-sm '
    >
      <input
        type='text'
        className=' w-4/6 max-w-sm text-sm p-2 outline-none dark:text-slate-700  '
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button className='bg-slate-700 p-2  text-slate-100 text-sm capitalize w-2/6 dark:bg-slate-200 dark:text-slate-700 transition duration-300 ease-in'>
        find user
      </button>
    </form>
  );
}

export default SearchUser;
