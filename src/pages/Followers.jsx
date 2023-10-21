import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { FaGithub } from 'react-icons/fa';

function Followers() {
  const [followers, setFollowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const { name, userInfo } = useOutletContext();
  const totalButtons =
    userInfo.followers >= 80 ? 10 : Math.ceil(userInfo.followers / 8);

  const getFollowers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${name}/followers?page=${page}&per_page=8`
      );
      const data = await response.json();
      setFollowers(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getFollowers();
  }, [name, page]);

  if (!loading && followers.length < 1) {
    return (
      <div className='min-h-screen md:min-h-[calc(100%-4rem)] flex items-center justify-center text-2xl tracking-wide dark:bg-slate-700 dark:text-slate-200'>
        No Followers
      </div>
    );
  }

  return (
    <div className='md:min-h-[calc(100%-4rem)]  p-4 bg-blue-100/30 text-slate-700 dark:bg-slate-700  dark:text-slate-200 duration-150 transition ease-in'>
      <p>Please note the app is set to fetch a maximum of 80 followers</p>
      {loading && (
        <div className=' h-[calc(100vh-80px-50px-6.9rem)] flex items-center justify-center'>
          <Spinner height={4} />
        </div>
      )}
      {!loading && (
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 tracking-wider'>
          {followers.map((follower) => {
            return (
              <li
                key={follower.id}
                className='bg-slate-200 rounded p-2 dark:bg-slate-800 text-slate-700 dark:text-slate-200 '
              >
                <a href={follower.html_url} target='_blank' rel='noreferrer'>
                  <img
                    src={follower.avatar_url}
                    alt='follower avatar'
                    className='w-20 h-20 rounded-full lg:h-24 lg:w-24 mx-auto'
                  />
                  <div className=' pt-2   text-center justify-center flex gap-3 text-sm items-center '>
                    <p>{follower.login}</p>
                    <p>
                      <FaGithub />
                    </p>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      )}

      {totalButtons > 1 && totalButtons <= 2 && (
        <div className=' flex items-center gap-8 justify-center   text-slate-700 mt-8'>
          <button onClick={() => page > 1 && setPage(1)}>Prev</button>
          <button onClick={() => page === 1 && setPage(2)}>Next</button>
        </div>
      )}

      {totalButtons > 2 && (
        <ul className=' flex items-center gap-2 justify-center mt-4'>
          {Array.from({ length: totalButtons }, (_, i) => {
            return (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className='bg-slate-700 rounded text-slate-100 w-6 h-6 text-sm  lg:w-10 lg:h-10 dark:bg-slate-800'
              >
                {i + 1}
              </button>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default Followers;
