import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaEye,
  FaCodeBranch,
  FaClock,
  FaUserClock,
  FaCalendarDay,
  FaFileCode,
} from 'react-icons/fa';
import { BsFillFileEarmarkLockFill } from 'react-icons/bs';
import { MdDescription, MdKeyboardBackspace } from 'react-icons/md';

import { useNavigate, useOutletContext, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const formatDate = (date) =>
  new Intl.DateTimeFormat('en', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

function SingleRepo() {
  const [repoInfo, setRepoInfo] = useState(null);
  const [repoInfoLoading, setRepoInfoLoading] = useState(false);
  const { repoName } = useParams();
  const { name } = useOutletContext();
  const navigate = useNavigate();

  const getRepo = async () => {
    try {
      setRepoInfoLoading(true);
      const response = await fetch(
        `https://api.github.com/repos/${name}/${repoName}`
      );
      const data = await response.json();
      setRepoInfo(data);
    } catch (error) {
      console.log(error);
    } finally {
      setRepoInfoLoading(false);
    }
  };

  useEffect(() => {
    getRepo();
  }, [name, repoName]);

  if (repoInfoLoading)
    return (
      <div className=' h-[calc(100vh-80px-50px-4rem)] flex items-center justify-center'>
        <Spinner height={4} />
      </div>
    );

  if (repoInfo) {
    return (
      <div className='md:min-h-[calc(100%-4rem)]  px-8 bg-blue-100/30 text-slate-700 dark:bg-slate-800 dark:text-slate-200  py-8 text-sm'>
        <button
          className='text-slate-500/80 hover:font-bold hover:text-slate-700 transition duration-300 dark:text-slate-200 flex items-center gap-1'
          onClick={() => navigate(-1)}
        >
          <MdKeyboardBackspace /> Back to Previous Page
        </button>
        <div className='flex flex-col space-y-6 mt-8'>
          <h1 className='text-3xl font-bold tracking-wider'>{repoInfo.name}</h1>

          {repoInfo.description && (
            <p className='flex items-center gap-2'>
              <span>
                <MdDescription className='text-2xl' />
              </span>
              {repoInfo.description}
            </p>
          )}
          <p className='flex items-center gap-2'>
            <span>
              <FaCodeBranch className='text-2xl' />
            </span>
            Default Branch: {repoInfo.default_branch}
          </p>
          <p className='flex items-center gap-2'>
            <span>
              <FaEye className='text-2xl' />
            </span>
            Visibility: {repoInfo.visibility}
          </p>
          <p className='flex items-center gap-2'>
            <span>
              <BsFillFileEarmarkLockFill className='text-2xl' />
            </span>
            Allows Forking : {repoInfo.allow_forking ? 'True' : 'False'}
          </p>
          {repoInfo.watchers_count > 0 ||
            (repoInfo.forks_count > 0 && (
              <div className='flex items-center gap-4'>
                <p>Watchers : {repoInfo.watchers_count}</p>
                <p>Forks : {repoInfo.forks_count}</p>
              </div>
            ))}

          <div className='flex lg:items-center flex-col lg:flex-row gap-4'>
            <p className='flex items-center gap-2 text-sm'>
              <span>
                <FaClock className='text-2xl' />
              </span>
              Created at {formatDate(repoInfo.created_at)}
            </p>

            <p className='flex items-center gap-2 text-sm'>
              <span>
                <FaCalendarDay className='text-2xl' />
              </span>
              Pushed at {formatDate(repoInfo.pushed_at)}
            </p>
            <p className='flex items-center gap-2 text-sm'>
              <span>
                <FaUserClock className='text-2xl' />
              </span>
              Updated at {formatDate(repoInfo.updated_at)}
            </p>
          </div>
          <p className='flex items-center gap-2 text-sm'>
            <span>
              <FaFileCode className='text-2xl' />
            </span>
            <a
              href={repoInfo.html_url}
              target='_blank'
              rel='noreferrer'
              className='text-green-600 dark:text-green-300 transition duration-200 ease-in font-bold hover:opacity-80'
            >
              Check {repoInfo.name} Files on github
            </a>
          </p>
          <p className='flex items-center gap-2 text-sm'>
            <span>
              <FaGithub className='text-2xl' />
            </span>
            <a
              href={repoInfo.owner.html_url}
              target='_blank'
              rel='noreferrer'
              className='text-green-600 font-bold dark:text-green-300 hover:opacity-80 transition duration-200 ease-in'
            >
              Check {name} profile on github
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default SingleRepo;
