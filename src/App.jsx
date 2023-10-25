import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense, lazy } from 'react';

import Repos from './pages/Repos';
import SingleRepo from './pages/SingleRepo';
import Followers from './pages/Followers';
import Following from './pages/Following';

import { PageContextProvider } from './context/PageContext';
import FullPageSpinner from './components/FullPageSpinner';
import { ThemeContextProvider } from './context/ThemeContext';

// import AppLayout from './pages/AppLayout';
// import Home from './pages/Home';
// import User from './pages/User';
// import Error from './pages/Error';

const AppLayout = lazy(() => import('./pages/AppLayout'));
const Home = lazy(() => import('./pages/Home'));
const User = lazy(() => import('./pages/User'));
const About = lazy(() => import('./pages/About'));
const Error = lazy(() => import('./pages/Error'));

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        theme='dark'
        bodyStyle={{ color: 'yellow' }}
      />
      <ThemeContextProvider>
        <PageContextProvider>
          <BrowserRouter>
            <Suspense fallback={<FullPageSpinner />}>
              <Routes>
                <Route path='/' element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path='/:name' element={<User />}>
                    <Route index element={<Navigate replace to='repo' />} />
                    <Route path='repo' element={<Repos />} />
                    <Route path='repo/:repoName' element={<SingleRepo />} />
                    <Route path='followers' element={<Followers />} />
                    <Route path='following' element={<Following />} />
                  </Route>
                  <Route path='about' element={<About />} />
                </Route>
                <Route path='*' element={<Error />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </PageContextProvider>
      </ThemeContextProvider>
    </>
  );
}

export default App;
