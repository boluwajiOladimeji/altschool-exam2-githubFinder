import React from 'react';
import { Link } from 'react-router-dom';

export const AppLogo = () => {
  return (
    <Link to='/'>
      <h1 className='text-xl italic font-extrabold text-slate-700 dark:text-slate-200 transition duration-300 ease-in'>
        Github Username Finder
      </h1>
    </Link>
  );
};
