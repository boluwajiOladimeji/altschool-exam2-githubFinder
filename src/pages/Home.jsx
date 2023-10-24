import headerImg from '../assets/header-image.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <header className=' flex items-center justify-center  min-h-[calc(100vh-80px-50px)] text-slate-700 dark:bg-slate-800 dark:text-slate-50 transition duration-300 ease-in overflow-clip'>
      <div className=' w-10/12 mx-auto flex flex-col md:flex-row items-center md:justify-center max-w-5xl md:gap-12 '>
        <img
          className='md:w-1/2 w-11/12  max-w-sm md:max-w-md'
          src={headerImg}
          alt='header'
          data-aos='fade-down-right'
          data-aos-easing='ease-in-sine'
          data-aos-duration='1000'
        />
        <div
          className='text-center  mt-8 md:mt-0 flex flex-col space-y-2 '
          data-aos='fade-up-left'
          data-aos-easing='ease-in-sine'
          data-aos-duration='1000'
        >
          <h1 className='text-2xl md:text-4xl italic font-bold'>
            Github Profile Finder
          </h1>
          <p className='text-sm   md:text-center max-w-sm'>
            Your one stop hub to getting github users information, repos and
            followers. You can simply do this by putting the github username on
            the searchbox and clicking the find user.
          </p>
          <p className='text-xs max-w-xs'>
            Have a trial with the default username on the searchbox
          </p>
        </div>
      </div>
    </header>
  );
}

export default Home;
