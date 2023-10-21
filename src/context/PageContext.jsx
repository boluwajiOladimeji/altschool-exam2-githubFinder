import { createContext, useContext, useState } from 'react';

const PageContext = createContext();

function PageContextProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <PageContext.Provider value={{ currentPage, setCurrentPage }}>
      {children}
    </PageContext.Provider>
  );
}

const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error('Page Context used outside PageContext Provider');
  }
  return context;
};

export { PageContextProvider, usePageContext };
