import React, { createContext, useState, useContext, useEffect } from 'react';
import en from '../locales/en.json';
import uk from '../locales/uk.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const translations = {
  en,
  uk,
  de,
  es
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  // Check local storage for saved language, default to 'en'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('voxflow_language');
    return saved && translations[saved] ? saved : 'en';
  });

  useEffect(() => {
    localStorage.setItem('voxflow_language', language);
  }, [language]);

  // Translation function
  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    for (let k of keys) {
      if (value[k] === undefined) {
        console.warn(`Translation missing for key: ${key} in language: ${language}`);
        return key; // Fallback to key if missing
      }
      value = value[k];
    }
    return value;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
