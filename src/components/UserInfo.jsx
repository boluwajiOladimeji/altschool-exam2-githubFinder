import {
  FaLocationArrow,
  FaUserFriends,
  FaBook,
  FaUser,
  FaCalendarTimes,
} from 'react-icons/fa';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }).format(new Date(date));

function UserInfo({ userInfo }) {
  return (
    <div className='md:w-2/5 lg:w-2/6 md:min-h-full md:border-r-4 md:border-r-slate-400/60 py-8 pt-16 px-5 dark:md:border-r-slate-700 duration-150 transition ease-in  '>
      <div className='w-64 h-64 mb-8 rounded-full  border-4 border-slate-300 mx-auto hover:-translate-y-4 transition duration-300 ease-in'>
        <img
          src={userInfo.avatar_url}
          className='w-full rounded-full '
          alt=''
        />
      </div>
      <article className='text-center flex flex-col space-y-2 text-slate-700 tracking-wide dark:text-slate-200 group'>
        <h1 className='text-3xl font-bold hover:text-green-600 dark:hover:text-green-300'>
          {userInfo.name}
        </h1>

        <div className='flex gap-2 justify-center items-center text-sm'>
          <FaUser className='text-slate-800/60 dark:text-slate-400' />
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            {userInfo.login}
          </p>
        </div>

        {userInfo.bio && (
          <p className='text-sm max-w-sm mx-auto hover:text-green-600 dark:hover:text-green-300'>
            Bio: {userInfo.bio}
          </p>
        )}

        <div className='flex gap-2 justify-center items-center text-sm'>
          <FaBook className='text-slate-800/60 dark:text-slate-400' />
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            {userInfo.public_repos} Repos
          </p>
        </div>

        <div className='flex gap-2 justify-center items-center text-sm'>
          <FaUserFriends className='text-slate-800/60 dark:text-slate-400' />
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            {' '}
            {userInfo.followers} Followers
          </p>
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            {userInfo.following} Following
          </p>
        </div>
        <div className='flex gap-2 justify-center items-center text-sm'>
          <FaLocationArrow className='text-slate-800/60 dark:text-slate-400' />
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            {userInfo.location}{' '}
          </p>
        </div>
        <div className='flex justify-center gap-2 items-center text-xs'>
          <FaCalendarTimes className='text-slate-800/60 dark:text-slate-400' />
          <p className='hover:text-green-600 dark:hover:text-green-300'>
            Last updated at {formatDate(userInfo.updated_at)}
          </p>
        </div>
      </article>
    </div>
  );
}
export default UserInfo;
// function UserInfo() {
//   return <div>Hello There</div>;
// }

// export default UserInfo;
