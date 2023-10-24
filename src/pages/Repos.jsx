import { Link, useOutletContext } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useEffect, useState } from 'react';
import { usePageContext } from '../context/PageContext';
import repoImg from '../assets/repo-img.svg';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function Repos() {
  const [repos, setRepos] = useState([]);
  const [repoLoading, setRepoLoading] = useState(false);
  const { name, userInfo } = useOutletContext();
  const { currentPage, setCurrentPage } = usePageContext();

  const totalPages = Math.ceil(userInfo.public_repos / 8);

  const getUserRepo = async () => {
    try {
      setRepoLoading(true);
      const response = await fetch(
        `https://api.github.com/users/${name}/repos?page=${currentPage}&per_page=8`
      );
      const data = await response.json();
      setRepos(data);
    } catch (error) {
      console.log(error);
    } finally {
      setRepoLoading(false);
    }
  };

  useEffect(() => {
    getUserRepo();
  }, [name, currentPage]);

  if (!repoLoading && repos.length < 1) {
    return (
      <div className='min-h-screen md:min-h-[calc(100%-4rem)] flex items-center justify-center text-2xl tracking-wide dark:bg-slate-700 dark:text-slate-200'>
        No Repository Created
      </div>
    );
  }

  return (
    <div className='md:min-h-[calc(100%-4rem)]  p-4 bg-blue-100/30 dark:bg-slate-700 text-slate-700 dark:text-slate-200 duration-150 transition ease-in'>
      <div className='flex justify-between items-center font-bold'>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <div className='hidden md:flex gap-20 pr-7'>
          {currentPage > 1 && (
            <button
              className='hover:text-green-600 dark:hover:text-green-300 transition duration-200 ease-in'
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Prev
            </button>
          )}
          {currentPage < totalPages && (
            <button
              className='hover:text-green-600 dark:hover:text-green-300 transition duration-200 ease-in'
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Next
            </button>
          )}
        </div>
      </div>
      {repoLoading && (
        <div className=' h-[calc(100vh-80px-50px-6.9rem)] flex items-center justify-center'>
          <Spinner height={4} />
        </div>
      )}
      {!repoLoading && (
        <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 tracking-wider'>
          {repos.map((repo) => {
            return (
              <Link
                to={`${repo.name}`}
                key={repo.id}
                className='bg-slate-200 rounded dark:bg-slate-800 text-slate-700 dark:text-slate-200  hover:shadow-md hover:shadow-green-900 dark:hover:shadow-green-200 hover:scale-105 transition duration-300 ease-in group '
              >
                <img src={repoImg} alt='' className='w-full h-20 lg:h-24' />
                <div className='px-6  pb-2  text-sm'>
                  <p className='font-bold dark:group-hover:text-green-300 group-hover:text-green-600'>
                    {repo.name}
                  </p>
                  <p className='text-xs'>
                    Created at: {formatDate(repo.created_at)}
                  </p>
                </div>
              </Link>
            );
          })}
        </ul>
      )}
      <div className='md:hidden flex gap-20 pt-5 justify-center'>
        {currentPage > 1 && (
          <button
            className='hover:text-green-600 dark:hover:text-green-300 transition duration-200 ease-in'
            onClick={() => setCurrentPage((prev) => prev - 1)}
          >
            Prev
          </button>
        )}
        {currentPage < totalPages && (
          <button
            className='hover:text-green-600 dark:hover:text-green-300 transition duration-200 ease-in'
            onClick={() => setCurrentPage((page) => page + 1)}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Repos;
