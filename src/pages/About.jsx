function About() {
  return (
    <div className='min-h-[calc(100vh-5rem-50px)] py-6 text-slate-700 bg-slate-50 dark:bg-slate-800 dark:text-slate-200'>
      <div className='w-11/12 max-w-5xl mx-auto'>
        <h1 className='text-5xl font-bold'>About Me</h1>
        <p className='my-4'>
          My Name is Boluwaji Oladimeji,an aspiring fullstack developer. As they
          say, a journey of a thousand miles starts with a step. My big step
          starts with learning and being a frontend developer using tools like
          HTML,CSS,Javscript,React,Tailwind Css. I have learnt from awesome
          instructors such as Oluwasetemi Ojo, Ikenna Ezeani from altschool.
          Also Insructors like John smilga and Jonas Schmedtmann from udemy.
        </p>
        <p>
          I enjoy building beautiful applications,providing solutions, learning
          new technologies while also teaching people how to code from what I
          have learnt. I plan to become an adequate frontend developer while
          also being an instructor (I hope to be a part of altschool Instructors
          or teaching assistant some day.). Some of my latest Projects are
          listed below
        </p>

        <section className='mt-8'>
          <h2 className='text-center text-3xl font-bold'>
            Similar React Projects
          </h2>
          <div className='flex flex-col sm:flex-row gap-4 py-8'>
            <article className='project'>
              <a
                href='https://bolu-search-movies.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <img src='./movie-search.JPG' alt='projectMovie' />
                <p className='py-2'>Search Movie App</p>
              </a>
            </article>
            <article className='project'>
              <a
                href='https://elias-quizzical-app.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <img src='./quizzical.JPG' alt='projectMovie' />
                <p className='py-2'>Quizzical</p>
              </a>
            </article>
            <article className='project'>
              <a
                href='https://bolu-react-scissors.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <img src='./react-scissors.JPG' alt='projectMovie' />
                <p className='py-2'>React Scissors</p>
              </a>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
