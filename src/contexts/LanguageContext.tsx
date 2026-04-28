import React, { createContext, useState, useContext, ReactNode } from 'react';

// Aqui você vai adicionar todos os textos do seu site no futuro!
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇺🇸 EN",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇧🇷 PT",
  }
};

type Language = 'pt' | 'en';

interface LanguageContextData {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof typeof translations['pt']) => string;
}

const LanguageContext = createContext<LanguageContextData>({} as LanguageContextData);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Função mágica que busca o texto na língua certa
  const t = (key: keyof typeof translations['pt']) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);