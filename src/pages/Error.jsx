import { Link } from 'react-router-dom';
import notfound from '../assets/error-404.svg';

function Error() {
  return (
    <div className='min-h-screen bg-slate-200 p-8 flex flex-col space-y-4 justify-center text-slate-700  dark:bg-slate-800 dark:text-slate-200'>
      <img src={notfound} className='w-full max-w-xl mx-auto' alt='' />
      <h1 className='text-xl text-center'>
        OOOOOPS!! Cant find what you are looking for ??
      </h1>
      <Link
        className=' text-2xl text-center hover:text-slate-400 transition-all duration-150'
        to='/'
      >
        Back Home
      </Link>
    </div>
  );
}

export default Error;
