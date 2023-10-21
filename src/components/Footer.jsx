function Footer() {
  const date = new Date();
  return (
    <div className='h-[50px] bg-slate-700 flex items-center justify-center italic text-slate-50 dark:bg-slate-400 dark:text-slate-800 text-center text-sm'>
      Inspired by Altschool and completed by Boluwaji Oladimeji &copy;
      {date.getFullYear()}
    </div>
  );
}

export default Footer;
