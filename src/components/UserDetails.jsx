import { NavLink, Outlet, useParams } from 'react-router-dom';

function UserDetails({ userInfo }) {
  const { name } = useParams();

  return (
    <div className=' md:w-3/5 lg:w-4/6 min-h-full'>
      <nav className='user flex gap-16 items-center bg-slate-700 dark:bg-slate-300 dark:text-slate-800 dark:font-bold text-slate-100 h-16 px-4 transition duration-150 ease-in'>
        <NavLink to='repo'>Repo</NavLink>
        <NavLink to='followers'>Followers</NavLink>
        <NavLink to='following'>Error</NavLink>
      </nav>
      <Outlet context={{ name, userInfo }} />
    </div>
  );
}

export default UserDetails;
