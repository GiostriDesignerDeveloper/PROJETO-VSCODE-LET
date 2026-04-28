import { createContext, useState, useContext, ReactNode } from 'react';

// Aqui fica o nosso dicionário ÚNICO e unificado!
const translations = {
  pt: {
    "nav.home": "Início",
    "nav.projects": "Projetos",
    "nav.experience": "Experiências",
    "nav.contact": "Contato",
    "lang.switch": "🇺🇸 EN",
    
    // Textos do Hero
    "hero.greeting": "Olá, sou a Letícia",
    "hero.title": "Design orientado por comportamentos e dados para produtos digitais.",
    "hero.subtitle": "Olá, sou a Letícia designer focada em criar soluções visuais baseadas em usabilidade e métricas de negócio.",
  },
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",
    "lang.switch": "🇧🇷 PT",
    
    // Textos do Hero (Inglês)
    "hero.greeting": "Hello, I'm Letícia",
    "hero.title": "Behavior and data-driven design for digital products.",
    "hero.subtitle": "Hi, I'm Letícia, a designer focused on creating visual solutions based on usability and business metrics.",
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