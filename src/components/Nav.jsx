import { AppLogo } from '../components/AppLogo';
import SearchUser from '../components/SearchUser';
import { useThemeContext } from '../context/ThemeContext';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';

function Nav() {
  const { isDarkTheme, toggleTheme } = useThemeContext();
  return (
    <nav className='h-[80px] p-3  flex items-center  bg-slate-200 dark:bg-slate-700 dark:text-slate-200'>
      <div className='w-10/12 max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between transition duration-300 ease-in'>
        <AppLogo />
        <SearchUser />
      </div>
      <button className='pr-5' onClick={toggleTheme}>
        {isDarkTheme ? (
          <BsSunFill className='text-slate-200 text-xl' />
        ) : (
          <BsMoonFill className='text-xl' />
        )}
      </button>
    </nav>
  );
}

export default Nav;
