import { useNavigate, useParams } from 'react-router-dom';
import UserDetails from '../components/UserDetails';
import UserInfo from '../components/UserInfo';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';

function User() {
  const { name } = useParams();
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);
  const [userInfoLoading, setUserInfoLoading] = useState(false);

  const getUser = async () => {
    try {
      setUserInfoLoading(true);
      const response = await fetch(`https://api.github.com/users/${name}`);
      const data = await response.json();
      if (data.message === 'Not Found') {
        navigate('/');
        toast.error(`${name} does not exist`);
        return;
      }
      setUserInfo(data);
    } catch (error) {
      // toast(`Username does not exist`);
    } finally {
      setUserInfoLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [name]);

  if (userInfoLoading) {
    return (
      <div className='min-h-[calc(100vh-80px)] flex items-center justify-center dark:bg-slate-800'>
        <Spinner />
      </div>
    );
  }

  if (!userInfoLoading && userInfo) {
    return (
      <div className=' md:min-h-[calc(100vh-80px-50px)] md:flex bg-slate-50 dark:bg-slate-800 dark:text-slate-200 transition duration-150 ease-in'>
        <UserInfo userInfo={userInfo} userInfoLoading={userInfoLoading} />
        <UserDetails userInfo={userInfo} />
      </div>
    );
  }
}

export default User;
