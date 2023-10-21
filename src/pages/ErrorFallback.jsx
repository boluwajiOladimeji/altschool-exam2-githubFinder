function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className='flex items-center px-6 justify-center h-screen text-3xl bg-slate-100 text-center dark:bg-slate-800 dark:text-slate-200'>
      <div className='px-4 py-6 bg-slate-500'>
        <h1>Oooooops😢 , You triggered the Error Boundary</h1>

        <p className='text-sm text-center mt-4'>{error.message}</p>
        <div className='flex justify-center mt-4 '>
          <button
            onClick={resetErrorBoundary}
            className='bg-slate-700 text-slate-100 text-sm rounded py-2 px-3 hover:bg-slate-500/50 transition duration-300'
          >
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorFallback;
