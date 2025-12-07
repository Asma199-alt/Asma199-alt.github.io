import React, { createContext, useContext } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      getLanguageUrl: (_, path) => path || '',
      isEnglish: true,
      isChinese: false
    };
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  return (
    <LanguageContext.Provider value={{
      language: 'en',
      setLanguage: () => {},
      toggleLanguage: () => {},
      getLanguageUrl: (_, pathname) => pathname || (typeof window !== 'undefined' ? window.location.pathname : ''),
      isEnglish: true,
      isChinese: false
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
