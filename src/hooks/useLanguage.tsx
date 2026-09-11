import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Language } from '@/types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const languages: Language[] = ['tr', 'en', 'de', 'es', 'it'];

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('tr');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    document.documentElement.lang = lang;
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const currentIndex = languages.indexOf(prev);
      const nextIndex = (currentIndex + 1) % languages.length;
      const newLang = languages[nextIndex];
      document.documentElement.lang = newLang;
      return newLang;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
